# 颜文字图鉴 (⊙_⊙)

> 让表达更有趣 · 一键复制的颜文字收藏站

一个纯静态的颜文字收藏网站，收录 **151 大类、约 100+ 个精选颜文字**，从嘲讽到撒娇、从极简到沙雕，点击即可一键复制到剪贴板。

![预览](index.png)

## ✨ 功能特性

- **151 大类颜文字**：震惊、开心、难过、吐槽、卖萌……应有尽有
- **一键复制**：点击颜文字或复制按钮即可复制到剪贴板，并伴有 Toast 提示
- **ASCII 艺术分类**：专门展示大篇幅字符画，自动换行排版
- **智能折叠**：超过 5 条的类别自动折叠，点击「查看更多」展开
- **纯前端零依赖**：无需构建、无需安装，浏览器直接打开即可使用
- **响应式设计**：适配桌面端与移动端

## 🚀 快速开始

### 方式一：直接打开

克隆或下载项目后，直接双击打开 `index.html` 即可使用。

```bash
git clone https://gitee.com/your-repo/kaomoji.git
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

## 📁 项目结构

```
kaomoji/
├── index.html      # 页面结构
├── styles.css      # 样式
├── data.js         # 颜文字数据源（window.KAOMOJI_DATA）
├── app.js          # 渲染与交互逻辑
├── index.png       # 预览图
└── README.md       # 说明文档
```

## 🛠️ 自定义数据

想增删颜文字？直接编辑 `data.js`：

```js
window.KAOMOJI_DATA = {
    meta: {
        title: '颜文字图鉴',
        icon: '(⊙_⊙)',
        subtitle: '从嘲讽到撒娇，从极简到沙雕 · 点击颜文字即可复制',
        totalCount: 151   // 记得更新总类数
    },
    categories: [
        {
            id: 'shock',
            name: '震惊 · 瞪大眼',
            emoji: '😳',
            badge: 6,
            items: [
                { symbol: '(⊙ˍ⊙)', desc: '轻微震惊' },
                { symbol: '(☉_☉)', desc: '呆滞凝视' }
            ]
        }
        // ...更多分类
    ]
};
```

## 📄 开源协议

本项目基于 **MIT 许可证** 开源，你可以自由使用、修改和分发。

## 🙌 致谢

感谢所有颜文字作者的创意，让文字表达变得如此有趣。
