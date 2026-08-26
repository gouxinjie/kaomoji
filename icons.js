/**
 * 颜文字图鉴 · Emoji 图标数据源（独立模块，与颜文字 data.js 区分）
 * 通过 window.KAOMOJI_ICONS 暴露给页面
 */
window.KAOMOJI_ICONS = {
    // 头部信息
    meta: {
        title: 'Emoji 图标库',
        icon: '😊',
        subtitle: '常用 Emoji 表情符号 · 点击即可复制',
        totalLabel: '点击 复制',
        totalCount: 10
    },

    // 分类
    categories: [
        {
            "id": "face",
            "name": "表情 · 笑脸",
            "emoji": "😀",
            "badge": 20,
            "items": [
                { "symbol": "😀", "desc": "开心大笑" },
                { "symbol": "😁", "desc": "露齿笑" },
                { "symbol": "😂", "desc": "笑哭" },
                { "symbol": "🤣", "desc": "笑到打滚" },
                { "symbol": "😊", "desc": "微笑脸红" },
                { "symbol": "😇", "desc": "天使微笑" },
                { "symbol": "🙂", "desc": "浅浅微笑" },
                { "symbol": "😉", "desc": "眨眼" },
                { "symbol": "😌", "desc": "如释重负" },
                { "symbol": "😍", "desc": "花痴" },
                { "symbol": "😘", "desc": "飞吻" },
                { "symbol": "😗", "desc": "亲亲" },
                { "symbol": "😙", "desc": "亲亲眨眼" },
                { "symbol": "😚", "desc": "嘟嘴亲亲" },
                { "symbol": "😋", "desc": "馋嘴" },
                { "symbol": "😜", "desc": "吐舌调皮" },
                { "symbol": "😝", "desc": "吐舌眯眼" },
                { "symbol": "🤗", "desc": "拥抱" },
                { "symbol": "🤩", "desc": "星星眼" },
                { "symbol": "🥳", "desc": "庆祝" }
            ]
        },
        {
            "id": "shockface",
            "name": "表情 · 震惊尴尬",
            "emoji": "😳",
            "badge": 12,
            "items": [
                { "symbol": "😳", "desc": "脸红尴尬" },
                { "symbol": "😱", "desc": "吓到尖叫" },
                { "symbol": "😨", "desc": "惊慌" },
                { "symbol": "😰", "desc": "紧张冒汗" },
                { "symbol": "😥", "desc": "失落冒汗" },
                { "symbol": "😓", "desc": "无语汗" },
                { "symbol": "🤯", "desc": "大脑爆炸" },
                { "symbol": "😮", "desc": "惊讶张嘴" },
                { "symbol": "😲", "desc": "目瞪口呆" },
                { "symbol": "😯", "desc": "震惊沉默" },
                { "symbol": "🙄", "desc": "翻白眼" },
                { "symbol": "🤔", "desc": "思考" }
            ]
        },
        {
            "id": "love",
            "name": "情感 · 爱心",
            "emoji": "❤️",
            "badge": 12,
            "items": [
                { "symbol": "❤️", "desc": "红心" },
                { "symbol": "🧡", "desc": "橙心" },
                { "symbol": "💛", "desc": "黄心" },
                { "symbol": "💚", "desc": "绿心" },
                { "symbol": "💙", "desc": "蓝心" },
                { "symbol": "💜", "desc": "紫心" },
                { "symbol": "🖤", "desc": "黑心" },
                { "symbol": "🤍", "desc": "白心" },
                { "symbol": "💖", "desc": "闪烁爱心" },
                { "symbol": "💕", "desc": "两颗心" },
                { "symbol": "💞", "desc": "旋转爱心" },
                { "symbol": "💓", "desc": "跳动爱心" }
            ]
        },
        {
            "id": "gesture",
            "name": "手势 · 比赞",
            "emoji": "👍",
            "badge": 14,
            "items": [
                { "symbol": "👍", "desc": "点赞" },
                { "symbol": "👎", "desc": "点踩" },
                { "symbol": "👏", "desc": "鼓掌" },
                { "symbol": "🙌", "desc": "举手庆祝" },
                { "symbol": "🤝", "desc": "握手" },
                { "symbol": "👌", "desc": "OK" },
                { "symbol": "✌️", "desc": "剪刀手" },
                { "symbol": "🤞", "desc": "祈祷好运" },
                { "symbol": "🤟", "desc": "爱的手势" },
                { "symbol": "👊", "desc": "拳头碰拳" },
                { "symbol": "✊", "desc": "握拳加油" },
                { "symbol": "💪", "desc": "肌肉加油" },
                { "symbol": "🫶", "desc": "比心" },
                { "symbol": "☝️", "desc": "食指朝上" }
            ]
        },
        {
            "id": "animal",
            "name": "动物 · 萌宠",
            "emoji": "🐶",
            "badge": 16,
            "items": [
                { "symbol": "🐶", "desc": "狗" },
                { "symbol": "🐱", "desc": "猫" },
                { "symbol": "🐭", "desc": "鼠" },
                { "symbol": "🐹", "desc": "仓鼠" },
                { "symbol": "🐰", "desc": "兔子" },
                { "symbol": "🦊", "desc": "狐狸" },
                { "symbol": "🐻", "desc": "熊" },
                { "symbol": "🐼", "desc": "熊猫" },
                { "symbol": "🐨", "desc": "考拉" },
                { "symbol": "🐯", "desc": "老虎" },
                { "symbol": "🦁", "desc": "狮子" },
                { "symbol": "🐮", "desc": "牛" },
                { "symbol": "🐷", "desc": "猪" },
                { "symbol": "🐸", "desc": "青蛙" },
                { "symbol": "🐵", "desc": "猴子" },
                { "symbol": "🦄", "desc": "独角兽" }
            ]
        },
        {
            "id": "food",
            "name": "美食 · 吃喝",
            "emoji": "🍔",
            "badge": 16,
            "items": [
                { "symbol": "🍔", "desc": "汉堡" },
                { "symbol": "🍟", "desc": "薯条" },
                { "symbol": "🍕", "desc": "披萨" },
                { "symbol": "🍜", "desc": "拉面" },
                { "symbol": "🍣", "desc": "寿司" },
                { "symbol": "🍰", "desc": "蛋糕" },
                { "symbol": "🍩", "desc": "甜甜圈" },
                { "symbol": "🍪", "desc": "曲奇" },
                { "symbol": "🍦", "desc": "冰淇淋" },
                { "symbol": "🍺", "desc": "啤酒" },
                { "symbol": "🍵", "desc": "绿茶" },
                { "symbol": "☕", "desc": "咖啡" },
                { "symbol": "🍎", "desc": "苹果" },
                { "symbol": "🍉", "desc": "西瓜" },
                { "symbol": "🍇", "desc": "葡萄" },
                { "symbol": "🍓", "desc": "草莓" }
            ]
        },
        {
            "id": "activity",
            "name": "运动 · 活动",
            "emoji": "⚽",
            "badge": 12,
            "items": [
                { "symbol": "⚽", "desc": "足球" },
                { "symbol": "🏀", "desc": "篮球" },
                { "symbol": "🏈", "desc": "橄榄球" },
                { "symbol": "🎾", "desc": "网球" },
                { "symbol": "🏐", "desc": "排球" },
                { "symbol": "🎱", "desc": "台球" },
                { "symbol": "🏓", "desc": "乒乓球" },
                { "symbol": "🏸", "desc": "羽毛球" },
                { "symbol": "🎮", "desc": "游戏手柄" },
                { "symbol": "🎲", "desc": "骰子" },
                { "symbol": "🎯", "desc": "靶心" },
                { "symbol": "🏆", "desc": "奖杯" }
            ]
        },
        {
            "id": "nature",
            "name": "自然 · 天气",
            "emoji": "🌈",
            "badge": 12,
            "items": [
                { "symbol": "🌈", "desc": "彩虹" },
                { "symbol": "☀️", "desc": "晴天" },
                { "symbol": "⛅", "desc": "多云" },
                { "symbol": "🌧️", "desc": "下雨" },
                { "symbol": "⛈️", "desc": "雷雨" },
                { "symbol": "❄️", "desc": "雪花" },
                { "symbol": "🌊", "desc": "海浪" },
                { "symbol": "🌙", "desc": "月亮" },
                { "symbol": "⭐", "desc": "星星" },
                { "symbol": "🌻", "desc": "向日葵" },
                { "symbol": "🌸", "desc": "樱花" },
                { "symbol": "🍀", "desc": "四叶草" }
            ]
        },
        {
            "id": "symbol",
            "name": "符号 · 标记",
            "emoji": "⭐",
            "badge": 12,
            "items": [
                { "symbol": "⭐", "desc": "星星" },
                { "symbol": "✨", "desc": "闪光" },
                { "symbol": "🔥", "desc": "火" },
                { "symbol": "💧", "desc": "水滴" },
                { "symbol": "⚡", "desc": "闪电" },
                { "symbol": "🎵", "desc": "音符" },
                { "symbol": "💯", "desc": "满分" },
                { "symbol": "❗", "desc": "感叹号" },
                { "symbol": "❓", "desc": "问号" },
                { "symbol": "✅", "desc": "对勾" },
                { "symbol": "❌", "desc": "叉号" },
                { "symbol": "⚠️", "desc": "警告" }
            ]
        },
        {
            "id": "celebration",
            "name": "庆祝 · 场景",
            "emoji": "🎉",
            "badge": 10,
            "items": [
                { "symbol": "🎉", "desc": "庆祝彩带" },
                { "symbol": "🎊", "desc": "庆祝礼花" },
                { "symbol": "🎂", "desc": "生日蛋糕" },
                { "symbol": "🎁", "desc": "礼物" },
                { "symbol": "🎈", "desc": "气球" },
                { "symbol": "🥂", "desc": "干杯" },
                { "symbol": "🍾", "desc": "香槟" },
                { "symbol": "🏮", "desc": "红灯笼" },
                { "symbol": "🧨", "desc": "鞭炮" },
                { "symbol": "💐", "desc": "花束" }
            ]
        }
    ],

    // 底部 4 个特性卡
    features: [
        {
            "icon": "📋",
            "iconClass": "feat-blue",
            "title": "一键复制",
            "desc": "点击任意 Emoji 即可复制到剪贴板"
        },
        {
            "icon": "🔍",
            "iconClass": "feat-green",
            "title": "分类清晰",
            "desc": "分类精心整理 快速找到想要的表情"
        },
        {
            "icon": "⭐",
            "iconClass": "feat-purple",
            "title": "持续更新",
            "desc": "更多 Emoji 持续收录中 欢迎收藏本站"
        },
        {
            "icon": "❤️",
            "iconClass": "feat-orange",
            "title": "轻松使用",
            "desc": "简洁界面，无需学习 让表达更有趣"
        }
    ],

    // 页脚
    footer: 'Emoji 图标库 · 让表达更有趣'
};
