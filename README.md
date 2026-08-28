# 颜文字图鉴 (→_→)


> 键盘打不出的灵感收藏站 · 一键复制的颜文字 / Emoji / 符号 / 部首 / 花字 / 装饰

一个纯静态的中文表达符号收藏网站，收录 **颜文字、Emoji 图标、特殊符号、汉字部首、花字变体、装饰长串** 六大类内容，总计 **131 个分类、2341 个精选条目**。点击即可一键复制到剪贴板，让文字表达更有温度。

----


## 页面截图

**PC 端 · 颜文字**：

![PC 端 · 颜文字](imgs/pc-kaomoji.png)

**PC 端 · 花字变体**：

![PC 端 · 花字变体](imgs/pc-fancy.png)

**移动端**（一行三个）：

<table align="center" style="max-width:1100px">
  <tr>
    <td width="33%" style="text-align:center"><img src="imgs/mob-kaomoji.png" alt="移动端 · 颜文字" style="width:100%; max-width:340px"></td>
    <td width="33%" style="text-align:center"><img src="imgs/mob-fancy.png" alt="移动端 · 花字变体" style="width:100%; max-width:340px"></td>
    <td width="33%" style="text-align:center"><img src="imgs/mob-icons.png" alt="移动端 · Emoji" style="width:100%; max-width:340px"></td>
  </tr>
</table>

## ✨ 功能特性

- **六大内容板块**：顶部 Tab 一键切换
  - 📝 **颜文字**：51 大类、534 个，从嘲讽到撒娇、从极简到沙雕
  - 😊 **Emoji 图标**：15 大类、484 个常用表情图标
  - ★ **特殊符号**：18 大类、281 个键盘打不出的星星爱心、箭头序号、数学货币符号
  - 灬 **汉字部首**：康熙字典 214 部首，按构字位置与笔画整理，共 214 条
  - ⓐ **花字变体**：20 大类、674 个带圈/带框/花体/全角等 Unicode 变体字母数字，昵称签名一步到位
  - ✦ **装饰长串**：10 大类、154 个花式分隔线、长串星星爱心、文字点缀，文章排版评论区都能用
- **一键复制**：点击条目或复制按钮即可复制到剪贴板，并伴有 Toast 提示
- **实时搜索**：输入关键词即时过滤当前板块的内容
- **分类筛选**：侧边栏按分类快速跳转，移动端提供独立筛选按钮
- **智能折叠**：超过 5 条的类别自动折叠，点击「查看更多」展开
- **纯前端零依赖**：无需构建、无需安装，浏览器直接打开即可使用
- **响应式设计**：适配桌面端与移动端

## 🚀 快速开始

### 方式一：直接打开

克隆或下载项目后，直接双击打开 `index.html` 即可使用。

```bash
git clone https://gitee.com/gou-xinjie/kaomoji.git
cd kaomoji
# 直接用浏览器打开 index.html
```

### 方式二：本地服务器

建议通过本地服务器访问，以获得最佳体验：

```bash
# 推荐使用项目自带脚本（已禁用浏览器缓存，刷新即更新）
./start.ps1          # Windows 一键启动，端口 8000

# 或手动启动（注意：python -m http.server 默认有缓存，刷新可能不生效）
python -m http.server 8000

# 然后浏览器访问
# http://localhost:8000
```

> **缓存提示**：静态资源已加版本号（`?v=日期`），每次更新数据后修改该日期即可强制刷新。若仍看到旧内容，用 `Ctrl+Shift+R`（Windows）硬刷新，或开无痕窗口。

## 🌐 在线访问

- **Gitee Pages**：https://gou-xinjie.gitee.io/kaomoji/
- **GitHub Pages**：https://gouxinjie.github.io/kaomoji/

## 📦 部署到静态 Pages

本项目是纯静态站点，可直接部署到任意静态托管服务：

- **Gitee Pages**：在仓库「服务 → Gitee Pages」中选择 `master` 分支、部署目录为根目录，开启强制 HTTPS 后启动即可。
- **GitHub Pages**：在仓库「Settings → Pages」中选择 `master` 分支、根目录（`/`）作为源，保存后自动生成站点。
- **其他平台**（Vercel / Netlify / Cloudflare Pages 等）：直接导入仓库，构建命令留空、发布目录设为根目录即可。

> 部署后若需更新内容，修改对应 `data/` 文件后提交并推送到 `master`，Pages 服务会自动重新发布。

## 🖥️ 部署到阿里云 ECS（GitHub Actions）

本项目支持通过 **GitHub Actions** 自动部署到自建的阿里云 ECS 服务器（Nginx 托管）。每次推送到 `master` 分支都会自动同步到服务器 `/var/www/kaomoji` 目录。

**部署结构**：`kaomoji.gouxinjie.com` → Nginx (80) → `/var/www/kaomoji`

### 一、服务器初始化（一次性）

登录 ECS 服务器，执行初始化脚本（安装 Nginx、创建部署目录、配置站点）：

```bash
# 把项目拉到服务器（或直接执行仓库中的脚本）
git clone https://github.com/gouxinjie/kaomoji.git
cd kaomoji
sudo bash docs/setup_server.sh
```

脚本会自动完成：
- 安装并启动 Nginx
- 创建 `/var/www/kaomoji` 部署目录
- 将 `docs/server_kaomoji.conf` 复制到 `/etc/nginx/conf.d/`
- 校验并重载 Nginx 配置

> 服务器安全组需放行 **80**（HTTP）和 **22**（SSH）端口。
>
> 部署目录默认属主为 `root`。若 `ECS_USER` 使用普通用户部署，请将 `/var/www/kaomoji` 属主改为该部署用户，使其具备写入权限：
> ```bash
> sudo chown -R deploy_user:deploy_user /var/www/kaomoji
> ```

### 二、配置 GitHub Secrets

在 GitHub 仓库 **Settings → Secrets and variables → Actions** 中新增以下 Secrets：

| Secret 名称 | 说明 | 示例 |
| --- | --- | --- |
| `ECS_HOST` | 服务器公网 IP | `47.98.xx.xx` |
| `ECS_USER` | 部署 SSH 用户 | `root`（或具有部署权限的用户） |
| `ECS_PORT` | SSH 端口 | `22` |
| `ECS_SSH_PRIVATE_KEY` | 部署密钥对的**私钥** | `-----BEGIN OPENSSH PRIVATE KEY-----...` |
| `ECS_TARGET` | 相对部署用户家目录的路径，最终映射到 `/var/www/kaomoji` | 见下方说明 |

**关于 `ECS_TARGET`**：`ssh-deploy` 会把文件上传到 SSH 用户的家目录下。若部署用户是 `root`，家目录为 `/root`，则 `ECS_TARGET` 设为 `/var/www/kaomoji`（绝对路径即可映射正确）；若使用普通用户（家目录为 `/home/user`），可设为 `/var/www/kaomoji` 或家目录下的相对路径，部署前脚本会先 `mkdir -p /var/www/kaomoji` 创建目录。

### 三、生成部署密钥对（可选但推荐）

为安全起见，建议在 ECS 上为部署用户生成独立的 SSH 密钥对：

```bash
ssh-keygen -t ed25519 -C "github-actions-deploy" -f ~/.ssh/deploy_key
cat ~/.ssh/deploy_key.pub >> ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
```

将 `~/.ssh/deploy_key` 的**私钥内容**填入 `ECS_SSH_PRIVATE_KEY`。

### 四、触发部署

初始化完成后，每次 `git push` 到 `master` 分支，GitHub Actions 会自动：
1. 检出最新代码
2. 通过 SSH 将文件同步到 `/var/www/kaomoji`（自动清理已删除的文件，保证与仓库完全一致）
3. 跳过 `.github/`、`docs/`、`README.md` 等非站点文件

在仓库 **Actions** 页面可查看每次部署的实时日志。

### 五、Nginx 配置说明

站点配置文件为 `docs/server_kaomoji.conf`，主要配置：
- `listen 80` + `server_name kaomoji.gouxinjie.com`：HTTP 访问
- 静态资源（css/js/svg/png）长缓存 7 天；HTML 不缓存，保证数据更新及时生效
- 关闭 `server_tokens` 隐藏版本号

如需使用 HTTPS，可在阿里云申请免费 SSL 证书，并将 `listen 80` 改为 `listen 443 ssl` + 配置证书路径 + 添加 80 跳转 443。

## 📁 项目结构

```
kaomoji/
├── index.html          # 页面结构
├── styles.css          # 样式
├── app.js              # 渲染与交互逻辑（Tab、搜索、复制、折叠）
├── data/               # 数据源目录
│   ├── kaomoji.js      # 颜文字数据（window.KAOMOJI_DATA）
│   ├── icons.js        # Emoji 图标数据（window.KAOMOJI_ICONS）
│   ├── symbols.js      # 特殊符号数据（window.KAOMOJI_SYMBOLS）
│   ├── radicals.js     # 汉字部首数据（window.KAOMOJI_RADICALS）
│   ├── fancy.js        # 花字变体数据（window.KAOMOJI_FANCY）
│   └── deco.js         # 装饰长串数据（window.KAOMOJI_DECO）
├── imgs/               # 预览图等静态资源
│   ├── home.png        # 首页预览图
│   └── top.png         # 顶部预览图
├── favicon.svg         # 网站图标（矢量）
├── push.bat            # 一键推送 GitHub + Gitee 脚本
├── start.ps1           # 一键启动本地预览服务器脚本
├── LICENSE             # MIT 许可证
├── .github/            # GitHub Actions 配置
│   └── workflows/
│       └── deploy.yml  # 部署到阿里云 ECS 的工作流
├── docs/               # 部署相关文档与配置
│   ├── server_kaomoji.conf   # Nginx 站点配置（kaomoji.gouxinjie.com）
│   └── setup_server.sh       # ECS 服务器初始化脚本（一次性）
└── README.md           # 说明文档
```

## 🛠️ 自定义数据

想增删内容？直接编辑 `data/` 目录下对应的数据源文件即可。每个数据源均为一个全局对象，结构如下：

```js
window.KAOMOJI_DATA = {
    meta: {
        title: '颜文字图鉴',
        icon: '(⊙_⊙)',
        subtitle: '从嘲讽到撒娇，从极简到沙雕 · 点击颜文字即可复制',
        totalCount: 540   // 该板块条目总数，记得同步更新
    },
    categories: [
        {
            id: 'shock',
            name: '震惊 · 瞪大眼',
            emoji: '😳',
            badge: 8,      // 该分类条目数量
            items: [
                { symbol: '(⊙ˍ⊙)', desc: '轻微震惊' },
                { symbol: '(☉_☉)', desc: '呆滞凝视' }
            ]
        }
        // ...更多分类
    ]
};
```

新增一个数据源板块时，还需在 `index.html` 中引入对应脚本，并在 `app.js` 的 `HEADER_TABS` 中登记 Tab 项。

## 📄 开源协议

本项目基于 **MIT 许可证** 开源，你可以自由使用、修改和分发。

## 🙌 致谢

感谢所有颜文字、Emoji、符号作者的创意，让文字表达变得如此有趣。

## 💡 为什么能一键复制

站内所有内容都是 **Unicode 文本字符**（而非图片）。它们"键盘打不出"只是因为没有对应按键，但字体能正常渲染；复制写入的是字符本身的文本，因此能在任何支持 Unicode 的文本框里原样粘贴，不受图片或字体限制。

技术上优先调用 `navigator.clipboard.writeText`（需 HTTPS / localhost 安全上下文），不支持时自动回退到隐藏 `<textarea>` + `document.execCommand('copy')`，两条路径都静默写入系统剪贴板、无需手动选中。
