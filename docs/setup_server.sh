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

# 统一提权前缀：root 直接执行；非 root 一律通过 sudo 提权
# 注意：以 `sudo bash` 运行时 id -u 也是 0，这里按实际身份判断，
# 避免 root/sudo 场景误跳过关键步骤（复制配置、校验并重载 Nginx）。
if [ "$(id -u)" = "0" ]; then
    RUN=""
else
    RUN="sudo"
fi

echo "============================================"
echo "  颜文字图鉴 · ECS 服务器初始化"
echo "============================================"

# 1. 更新源并安装 nginx
if ! command -v nginx >/dev/null 2>&1; then
    echo "[1/4] 安装 nginx ..."
    if command -v apt-get >/dev/null 2>&1; then
        $RUN apt-get update
        $RUN apt-get install -y nginx
    elif command -v yum >/dev/null 2>&1; then
        $RUN yum install -y nginx
    elif command -v dnf >/dev/null 2>&1; then
        $RUN dnf install -y nginx
    else
        echo "[错误] 未识别的包管理器，请手动安装 nginx"
        exit 1
    fi
else
    echo "[1/4] nginx 已安装，跳过"
fi

# 2. 创建部署目录
echo "[2/4] 创建部署目录 /var/www/kaomoji ..."
$RUN mkdir -p /var/www/kaomoji
$RUN chmod -R 755 /var/www/kaomoji
# 目录属主默认为 root（部署用户写入时若权限不足，请在 ECS 上另行 chown 给部署用户）

# 3. 复制 nginx 配置并启用
echo "[3/4] 配置 nginx 站点 ..."
CONF_SRC="$SCRIPT_DIR/server_kaomoji.conf"
CONF_DST=/etc/nginx/conf.d/server_kaomoji.conf
if [ ! -f "$CONF_SRC" ]; then
    echo "[错误] 未找到 $CONF_SRC，中止"
    exit 1
fi
$RUN cp "$CONF_SRC" "$CONF_DST"
$RUN chmod 644 "$CONF_DST"

# 校验 nginx 配置并重载（配置有误会因 set -e 立即退出，便于及时暴露问题）
$RUN nginx -t
$RUN systemctl enable nginx 2>/dev/null || true
$RUN systemctl restart nginx 2>/dev/null || true
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
