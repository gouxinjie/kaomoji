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
        totalCount: 17
    },

    // 分类
    categories: [
        {
            "id": "star",
            "name": "装饰星星",
            "emoji": "★",
            "badge": 18,
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
                { "symbol": "≛", "desc": "三星星" },
                { "symbol": "✰", "desc": "白星" },
                { "symbol": "✶", "desc": "六角星" },
                { "symbol": "✷", "desc": "空心八角星" },
                { "symbol": "✹", "desc": "八芒星" },
                { "symbol": "✺", "desc": "六瓣星花" },
                { "symbol": "✵", "desc": "双环星" }
            ]
        },
        {
            "id": "heart",
            "name": "爱心符号",
            "emoji": "♥",
            "badge": 12,
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
                { "symbol": "🖤", "desc": "黑心" },
                { "symbol": "💗", "desc": "粉心" },
                { "symbol": "💙", "desc": "蓝心" }
            ]
        },
        {
            "id": "flower",
            "name": "花朵装饰",
            "emoji": "✿",
            "badge": 14,
            "items": [
                { "symbol": "✿", "desc": "小花" },
                { "symbol": "❀", "desc": "白花" },
                { "symbol": "❁", "desc": "八瓣花" },
                { "symbol": "❃", "desc": "涡旋花" },
                { "symbol": "✾", "desc": "六瓣花" },
                { "symbol": "✻", "desc": "十二瓣花" },
                { "symbol": "❋", "desc": "重瓣花" },
                { "symbol": "❊", "desc": "轮辐花" },
                { "symbol": "❈", "desc": "星形花" },
                { "symbol": "❉", "desc": "雪花花" },
                { "symbol": "✼", "desc": "四叶花" },
                { "symbol": "✽", "desc": "对称花" },
                { "symbol": "❖", "desc": "钻石花" },
                { "symbol": "✢", "desc": "三叶花" }
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
            "badge": 22,
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
                { "symbol": "⓪", "desc": "圈内零" },
                { "symbol": "⑪", "desc": "圈内十一" },
                { "symbol": "⑫", "desc": "圈内十二" },
                { "symbol": "⑬", "desc": "圈内十三" },
                { "symbol": "⑭", "desc": "圈内十四" },
                { "symbol": "⑮", "desc": "圈内十五" },
                { "symbol": "⑯", "desc": "圈内十六" },
                { "symbol": "⑰", "desc": "圈内十七" },
                { "symbol": "⑱", "desc": "圈内十八" },
                { "symbol": "⑲", "desc": "圈内十九" },
                { "symbol": "⑳", "desc": "圈内二十" }
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
            "badge": 16,
            "items": [
                { "symbol": "¥", "desc": "人民币" },
                { "symbol": "₩", "desc": "韩元" },
                { "symbol": "€", "desc": "欧元" },
                { "symbol": "£", "desc": "英镑" },
                { "symbol": "$", "desc": "美元" },
                { "symbol": "₹", "desc": "卢比" },
                { "symbol": "₽", "desc": "卢布" },
                { "symbol": "฿", "desc": "泰铢" },
                { "symbol": "₿", "desc": "比特币" },
                { "symbol": "₪", "desc": "新谢克尔" },
                { "symbol": "₫", "desc": "越南盾" },
                { "symbol": "₱", "desc": "菲律宾比索" },
                { "symbol": "₴", "desc": "乌克兰格里夫纳" },
                { "symbol": "₮", "desc": "蒙古图格里克" },
                { "symbol": "₺", "desc": "土耳其里拉" },
                { "symbol": "₦", "desc": "尼日利亚奈拉" }
            ]
        },
        {
            "id": "music-symbol",
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
            "id": "weather",
            "name": "天气自然",
            "emoji": "☀",
            "badge": 14,
            "items": [
                { "symbol": "☀", "desc": "太阳" },
                { "symbol": "☁", "desc": "云朵" },
                { "symbol": "☂", "desc": "雨伞" },
                { "symbol": "☃", "desc": "雪人" },
                { "symbol": "☄", "desc": "彗星" },
                { "symbol": "☾", "desc": "上弦月" },
                { "symbol": "☽", "desc": "下弦月" },
                { "symbol": "☼", "desc": "带射线太阳" },
                { "symbol": "❄", "desc": "雪花" },
                { "symbol": "❅", "desc": "带叶雪花" },
                { "symbol": "❆", "desc": "粗雪花" },
                { "symbol": "☀️", "desc": "太阳表情" },
                { "symbol": "☁️", "desc": "云朵表情" },
                { "symbol": "⛈", "desc": "雷雨" }
            ]
        },
        {
            "id": "mood",
            "name": "心情字符",
            "emoji": "☺",
            "badge": 12,
            "items": [
                { "symbol": "☺", "desc": "微笑脸" },
                { "symbol": "☻", "desc": "实心笑脸" },
                { "symbol": "☹", "desc": "哭脸" },
                { "symbol": "♞", "desc": "马" },
                { "symbol": "♜", "desc": "城堡" },
                { "symbol": "♛", "desc": "王后" },
                { "symbol": "♚", "desc": "国王" },
                { "symbol": "♝", "desc": "主教" },
                { "symbol": "♟", "desc": "棋子" },
                { "symbol": "☠", "desc": "骷髅" },
                { "symbol": "☯", "desc": "太极" },
                { "symbol": "☮", "desc": "和平" }
            ]
        },
        {
            "id": "shape",
            "name": "菱形方块",
            "emoji": "◆",
            "badge": 16,
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
                { "symbol": "▣", "desc": "内点方框" },
                { "symbol": "▢", "desc": "空心方框" },
                { "symbol": "▷", "desc": "空心三角右" },
                { "symbol": "▶", "desc": "实心三角右" },
                { "symbol": "◀", "desc": "实心三角左" },
                { "symbol": "◍", "desc": "阴影圆" },
                { "symbol": "▧", "desc": "斜纹方框" }
            ]
        },
        {
            "id": "card",
            "name": "扑克花色",
            "emoji": "♠",
            "badge": 8,
            "items": [
                { "symbol": "♠", "desc": "黑桃" },
                { "symbol": "♣", "desc": "梅花" },
                { "symbol": "♦", "desc": "方块" },
                { "symbol": "♤", "desc": "空心黑桃" },
                { "symbol": "♧", "desc": "空心梅花" },
                { "symbol": "♢", "desc": "空心方块" },
                { "symbol": "🂠", "desc": "扑克牌背" },
                { "symbol": "🃏", "desc": "小丑牌" }
            ]
        },
        {
            "id": "tech",
            "name": "科技符号",
            "emoji": "☎",
            "badge": 12,
            "items": [
                { "symbol": "☎", "desc": "电话" },
                { "symbol": "☏", "desc": "手绘电话" },
                { "symbol": "✆", "desc": "电话占线" },
                { "symbol": "✉", "desc": "信封" },
                { "symbol": "✎", "desc": "铅笔" },
                { "symbol": "✏", "desc": "斜铅笔" },
                { "symbol": "✂", "desc": "剪刀" },
                { "symbol": "✚", "desc": "十字" },
                { "symbol": "⚡", "desc": "闪电" },
                { "symbol": "☢", "desc": "辐射" },
                { "symbol": "☣", "desc": "生物危害" },
                { "symbol": "⚛", "desc": "原子" }
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
            "desc": "17 类精心整理 快速找到想要的符号"
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
