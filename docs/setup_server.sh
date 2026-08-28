#!/bin/bash
# ============================================================
# 颜文字图鉴 · 阿里云 ECS 服务器初始化脚本（一次性执行）
# 作用：安装 nginx、创建部署目录、配置部署目录权限
# 在 ECS 上执行一次即可（需要 root 权限）
#
# 用法（二选一）：
#   sudo bash docs/setup_server.sh     # 有 sudo 时推荐
#   bash docs/setup_server.sh          # 已是 root 时直接执行
# ============================================================

# 设置脚本退出时立即返回错误码
set -o errexit
set -e

# 定位脚本所在目录（无论从哪个目录调用都能找到本仓库的配置）
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# 统一提权前缀：有 sudo 用 sudo，root 直接执行，否则留空由后续命令自行处理
if command -v sudo >/dev/null 2>&1 && [ "$(id -u)" != "0" ]; then
    SUDO="sudo"
else
    SUDO=""
fi

echo "============================================"
echo "  颜文字图鉴 · ECS 服务器初始化"
echo "============================================"

# 1. 更新源并安装 nginx
if ! command -v nginx >/dev/null 2>&1; then
    echo "[1/4] 安装 nginx ..."
    if command -v apt-get >/dev/null 2>&1; then
        $SUDO apt-get update
        $SUDO apt-get install -y nginx
    elif command -v yum >/dev/null 2>&1; then
        $SUDO yum install -y nginx
    elif command -v dnf >/dev/null 2>&1; then
        $SUDO dnf install -y nginx
    else
        echo "[错误] 未识别的包管理器，请手动安装 nginx"
        exit 1
    fi
else
    echo "[1/4] nginx 已安装，跳过"
fi

# 2. 创建部署目录
echo "[2/4] 创建部署目录 /var/www/kaomoji ..."
$SUDO mkdir -p /var/www/kaomoji
$SUDO chmod -R 755 /var/www/kaomoji
# 目录属主默认为 root（部署用户写入时若权限不足，请在 ECS 上另行 chown 给部署用户）

# 3. 复制 nginx 配置并启用
echo "[3/4] 配置 nginx 站点 ..."
CONF_SRC="$SCRIPT_DIR/server_kaomoji.conf"
CONF_DST=/etc/nginx/conf.d/server_kaomoji.conf
if [ -f "$CONF_SRC" ]; then
    if [ -n "$SUDO" ]; then
        $SUDO cp "$CONF_SRC" "$CONF_DST"
        $SUDO chmod 644 "$CONF_DST"
    else
        echo "[警告] 缺少 root 权限，无法写入 $CONF_DST，请手动复制："
        echo "  sudo cp $CONF_SRC $CONF_DST"
    fi
else
    echo "[警告] 未找到 $CONF_SRC，请手动复制到 $CONF_DST"
fi

# 校验 nginx 配置并重载（需要 root 权限）
if [ -n "$SUDO" ]; then
    $SUDO nginx -t
    $SUDO systemctl enable nginx 2>/dev/null || true
    $SUDO systemctl restart nginx 2>/dev/null || true
fi
echo "[3/4] nginx 已配置并启动"

# 4. 部署提示
echo "[4/4] 初始化完成！"
echo ""
echo "============================================"
echo "  下一步：在 GitHub 仓库配置 Secrets 后推送即可自动部署"
echo "  所需 Secrets："
echo "    ECS_HOST             - 服务器公网 IP"
echo "    ECS_USER             - 部署用户（如 root）"
echo "    ECS_PORT             - SSH 端口（默认 22）"
echo "    ECS_SSH_PRIVATE_KEY  - 部署密钥对的私钥"
echo "    ECS_TARGET           - 相对家目录的部署路径，见文档说明"
echo "============================================"
