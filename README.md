# 颜文字图鉴 (⊙_⊙)

> 让表达更有趣 · 一键复制的颜文字 / Emoji / 符号 / 部首收藏站

一个纯静态的中文表达符号收藏网站，收录 **颜文字、Emoji 图标、特殊符号、汉字部首** 四大类内容，总计 **103 个分类、约 1440+ 个精选条目**。点击即可一键复制到剪贴板，让文字表达更有温度。

![预览](index.png)

## ✨ 功能特性

- **四大内容板块**：顶部 Tab 一键切换
  - 📝 **颜文字**：65 大类、540 个，从嘲讽到撒娇、从极简到沙雕
  - 😊 **Emoji 图标**：15 大类、449 个常用表情图标
  - ★ **特殊符号**：17 大类、237 个键盘打不出的星星爱心、箭头序号、数学货币符号
  - 灬 **汉字部首**：康熙字典 214 部首，按构字位置与笔画整理，共 216 条
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
# Python 3
python -m http.server 8000

# Node.js
npx serve .

# 然后浏览器访问
# http://localhost:8000
```

## 🌐 在线访问

- **Gitee Pages**：https://gou-xinjie.gitee.io/kaomoji/
- **GitHub Pages**：https://gouxinjie.github.io/kaomoji/

## 📦 部署到静态 Pages

本项目是纯静态站点，可直接部署到任意静态托管服务：

- **Gitee Pages**：在仓库「服务 → Gitee Pages」中选择 `master` 分支、部署目录为根目录，开启强制 HTTPS 后启动即可。
- **GitHub Pages**：在仓库「Settings → Pages」中选择 `master` 分支、根目录（`/`）作为源，保存后自动生成站点。
- **其他平台**（Vercel / Netlify / Cloudflare Pages 等）：直接导入仓库，构建命令留空、发布目录设为根目录即可。

> 部署后若需更新内容，修改对应 `data/` 文件后提交并推送到 `master`，Pages 服务会自动重新发布。

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
│   └── radicals.js     # 汉字部首数据（window.KAOMOJI_RADICALS）
├── index.png           # 预览图
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

新增一个数据源板块时，还需在 `index.html` 中引入对应脚本，并在 `app.js` 的 `renderTabs()` 中登记 Tab 项。

## 📄 开源协议

本项目基于 **MIT 许可证** 开源，你可以自由使用、修改和分发。

## 🙌 致谢

感谢所有颜文字、Emoji、符号作者的创意，让文字表达变得如此有趣。
