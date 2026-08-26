/**
 * 颜文字图鉴 · 特殊符号 Symbol 数据源（独立模块，与颜文字 data.js、图标 icons.js 区分）
 * 通过 window.KAOMOJI_SYMBOLS 暴露给页面
 */
window.KAOMOJI_SYMBOLS = {
    // 头部信息
    meta: {
        title: '特殊符号库',
        icon: '★',
        subtitle: '键盘打不出的装饰符号 · 点击即可复制',
        totalLabel: '点击 复制',
        totalCount: 12
    },

    // 分类
    categories: [
        {
            "id": "star",
            "name": "装饰星星",
            "emoji": "★",
            "badge": 12,
            "items": [
                { "symbol": "★", "desc": "实心星" },
                { "symbol": "☆", "desc": "空心星" },
                { "symbol": "✦", "desc": "四瓣星" },
                { "symbol": "✧", "desc": "细四瓣星" },
                { "symbol": "✩", "desc": "空心小星" },
                { "symbol": "✪", "desc": "圈内星" },
                { "symbol": "✫", "desc": "带点星" },
                { "symbol": "✬", "desc": "八角星" },
                { "symbol": "✭", "desc": "细八角星" },
                { "symbol": "✮", "desc": "实心八角星" },
                { "symbol": "✯", "desc": "旋转星" },
                { "symbol": "≛", "desc": "三星星" }
            ]
        },
        {
            "id": "heart",
            "name": "爱心符号",
            "emoji": "♥",
            "badge": 10,
            "items": [
                { "symbol": "♥", "desc": "实心心" },
                { "symbol": "♡", "desc": "空心心" },
                { "symbol": "❤", "desc": "红心" },
                { "symbol": "❥", "desc": "旋转心" },
                { "symbol": "❦", "desc": "花心" },
                { "symbol": "❧", "desc": "空心花心" },
                { "symbol": "❣", "desc": "感叹心" },
                { "symbol": "💕", "desc": "双心" },
                { "symbol": "💘", "desc": "带箭心" },
                { "symbol": "🖤", "desc": "黑心" }
            ]
        },
        {
            "id": "check",
            "name": "对错勾叉",
            "emoji": "✓",
            "badge": 8,
            "items": [
                { "symbol": "✓", "desc": "对勾" },
                { "symbol": "✔", "desc": "粗对勾" },
                { "symbol": "☑", "desc": "带框勾" },
                { "symbol": "✗", "desc": "细错叉" },
                { "symbol": "✘", "desc": "粗错叉" },
                { "symbol": "☒", "desc": "带框叉" },
                { "symbol": "✖", "desc": "乘号叉" },
                { "symbol": "❌", "desc": "红叉" }
            ]
        },
        {
            "id": "arrow",
            "name": "箭头符号",
            "emoji": "→",
            "badge": 13,
            "items": [
                { "symbol": "→", "desc": "右箭头" },
                { "symbol": "←", "desc": "左箭头" },
                { "symbol": "↑", "desc": "上箭头" },
                { "symbol": "↓", "desc": "下箭头" },
                { "symbol": "↔", "desc": "左右双向" },
                { "symbol": "↕", "desc": "上下双向" },
                { "symbol": "↗", "desc": "右上箭头" },
                { "symbol": "↘", "desc": "右下箭头" },
                { "symbol": "↖", "desc": "左上箭头" },
                { "symbol": "↙", "desc": "左下箭头" },
                { "symbol": "⇒", "desc": "双线右箭" },
                { "symbol": "⇔", "desc": "双线双向" },
                { "symbol": "⟶", "desc": "长右箭头" }
            ]
        },
        {
            "id": "number",
            "name": "序号符号",
            "emoji": "①",
            "badge": 12,
            "items": [
                { "symbol": "①", "desc": "圈内一" },
                { "symbol": "②", "desc": "圈内二" },
                { "symbol": "③", "desc": "圈内三" },
                { "symbol": "④", "desc": "圈内四" },
                { "symbol": "⑤", "desc": "圈内五" },
                { "symbol": "⑥", "desc": "圈内六" },
                { "symbol": "⑦", "desc": "圈内七" },
                { "symbol": "⑧", "desc": "圈内八" },
                { "symbol": "⑨", "desc": "圈内九" },
                { "symbol": "⑩", "desc": "圈内十" },
                { "symbol": "❶", "desc": "实心一" },
                { "symbol": "⓪", "desc": "圈内零" }
            ]
        },
        {
            "id": "bracket",
            "name": "括号边框",
            "emoji": "「",
            "badge": 10,
            "items": [
                { "symbol": "【", "desc": "黑方括号左" },
                { "symbol": "】", "desc": "黑方括号右" },
                { "symbol": "「", "desc": "日式角括号左" },
                { "symbol": "」", "desc": "日式角括号右" },
                { "symbol": "『", "desc": "日式双角括号左" },
                { "symbol": "』", "desc": "日式双角括号右" },
                { "symbol": "〈", "desc": "书名角括号左" },
                { "symbol": "〉", "desc": "书名角括号右" },
                { "symbol": "《", "desc": "书名号左" },
                { "symbol": "》", "desc": "书名号右" }
            ]
        },
        {
            "id": "math",
            "name": "数学符号",
            "emoji": "≠",
            "badge": 14,
            "items": [
                { "symbol": "≤", "desc": "小于等于" },
                { "symbol": "≥", "desc": "大于等于" },
                { "symbol": "≠", "desc": "不等于" },
                { "symbol": "≈", "desc": "约等于" },
                { "symbol": "∞", "desc": "无穷大" },
                { "symbol": "√", "desc": "根号" },
                { "symbol": "π", "desc": "圆周率" },
                { "symbol": "±", "desc": "正负号" },
                { "symbol": "×", "desc": "乘号" },
                { "symbol": "÷", "desc": "除号" },
                { "symbol": "∑", "desc": "求和" },
                { "symbol": "∫", "desc": "积分" },
                { "symbol": "∴", "desc": "所以" },
                { "symbol": "∵", "desc": "因为" }
            ]
        },
        {
            "id": "unit",
            "name": "单位符号",
            "emoji": "℃",
            "badge": 8,
            "items": [
                { "symbol": "℃", "desc": "摄氏度" },
                { "symbol": "℉", "desc": "华氏度" },
                { "symbol": "§", "desc": "章节符号" },
                { "symbol": "¶", "desc": "段落符号" },
                { "symbol": "‰", "desc": "千分号" },
                { "symbol": "ℓ", "desc": "升" },
                { "symbol": "Ω", "desc": "欧姆" },
                { "symbol": "°", "desc": "度符号" }
            ]
        },
        {
            "id": "legal",
            "name": "版权商标",
            "emoji": "©",
            "badge": 6,
            "items": [
                { "symbol": "©", "desc": "版权所有" },
                { "symbol": "®", "desc": "注册商标" },
                { "symbol": "™", "desc": "商标" },
                { "symbol": "℗", "desc": "录音版权" },
                { "symbol": "℠", "desc": "服务商标" },
                { "symbol": "Ⓡ", "desc": "圈内 R" }
            ]
        },
        {
            "id": "currency",
            "name": "货币符号",
            "emoji": "¥",
            "badge": 8,
            "items": [
                { "symbol": "¥", "desc": "人民币" },
                { "symbol": "₩", "desc": "韩元" },
                { "symbol": "€", "desc": "欧元" },
                { "symbol": "£", "desc": "英镑" },
                { "symbol": "$", "desc": "美元" },
                { "symbol": "₹", "desc": "卢比" },
                { "symbol": "₽", "desc": "卢布" },
                { "symbol": "฿", "desc": "泰铢" }
            ]
        },
        {
            "id": "music",
            "name": "音符音乐",
            "emoji": "♪",
            "badge": 8,
            "items": [
                { "symbol": "♪", "desc": "单音符" },
                { "symbol": "♫", "desc": "双音符" },
                { "symbol": "♬", "desc": "连音符" },
                { "symbol": "♩", "desc": "四分音符" },
                { "symbol": "♭", "desc": "降号" },
                { "symbol": "♯", "desc": "升号" },
                { "symbol": "♮", "desc": "还原号" },
                { "symbol": "🎵", "desc": "音符表情" }
            ]
        },
        {
            "id": "shape",
            "name": "菱形方块",
            "emoji": "◆",
            "badge": 10,
            "items": [
                { "symbol": "◆", "desc": "实心菱形" },
                { "symbol": "◇", "desc": "空心菱形" },
                { "symbol": "■", "desc": "实心方块" },
                { "symbol": "□", "desc": "空心方块" },
                { "symbol": "▲", "desc": "实心三角上" },
                { "symbol": "△", "desc": "空心三角" },
                { "symbol": "▼", "desc": "实心三角下" },
                { "symbol": "●", "desc": "实心圆点" },
                { "symbol": "○", "desc": "空心圆" },
                { "symbol": "▣", "desc": "内点方框" }
            ]
        }
    ],

    // 底部 4 个特性卡
    features: [
        {
            "icon": "📋",
            "iconClass": "feat-blue",
            "title": "一键复制",
            "desc": "点击任意符号即可复制到剪贴板"
        },
        {
            "icon": "🔍",
            "iconClass": "feat-green",
            "title": "分类清晰",
            "desc": "12 类精心整理 快速找到想要的符号"
        },
        {
            "icon": "⭐",
            "iconClass": "feat-purple",
            "title": "持续更新",
            "desc": "更多特殊符号持续收录中 欢迎收藏本站"
        },
        {
            "icon": "❤️",
            "iconClass": "feat-orange",
            "title": "轻松使用",
            "desc": "简洁界面，无需学习 键盘打不出的符号也能轻松用"
        }
    ]
};
