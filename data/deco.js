/**
 * 颜文字图鉴 · 组合长串 / 装饰分隔线数据源（独立模块）
 * 多字符拼成的花式分隔线、长串装饰，适合文章排版、评论区点缀。
 * 通过 window.KAOMOJI_DECO 暴露给页面。
 */
window.KAOMOJI_DECO = {
    meta: {
        title: '装饰长串',
        icon: '✦',
        subtitle: '花式分隔线、长串星星爱心、文字点缀 · 排版评论区都能用',
        totalLabel: '点击 复制',
        totalCount: 148
    },

    categories: [
        {
            "id": "divider-line",
            "name": "分隔线",
            "emoji": "═",
            "badge": 26,
            "items": [
                { "symbol": "──────────", "desc": "细横线" },
                { "symbol": "══════════", "desc": "粗横线" },
                { "symbol": "━━━━━━━━━━", "desc": "实线" },
                { "symbol": "───────✿───────", "desc": "花心分隔线" },
                { "symbol": "──────★──────", "desc": "星形分隔线" },
                { "symbol": "───────────────", "desc": "长细线" },
                { "symbol": "═════♡═════", "desc": "爱心分隔线" },
                { "symbol": "───── ⋆⋅☆⋅⋆ ─────", "desc": "星点分隔线" },
                { "symbol": "───────────  ✿  ───────────", "desc": "居中花朵分隔线" },
                { "symbol": "┄┄┄┄┄┄┄┄┄┄", "desc": "虚线" },
                { "symbol": "─────── ٩(◕‿◕)۶ ───────", "desc": "表情分隔线" },
                { "symbol": "⊱ ────── {.⋅ ✯ ⋅.} ────── ⊰", "desc": "精致框线" },
                { "symbol": "◈ ──────── ◈", "desc": "菱形点线" },
                { "symbol": "——  ·.·´¯`·.· ———", "desc": "飘点线" },
                { "symbol": "╭───────╮", "desc": "上弧线" },
                { "symbol": "╰───────╯", "desc": "下弧线" },
                { "symbol": "︵──────────────────︵", "desc": "弧形长线" },
                { "symbol": "◜◝◞◟", "desc": "四角点" },
                // 新增
                { "symbol": "୨୧┈┈┈┈┈┈┈┈┈┈୨୧", "desc": "蝴蝶结分隔线" },
                { "symbol": "⋆ ˚｡⋆୨୧˚｡⋆", "desc": "星点蝴蝶结" },
                { "symbol": "━━━━━━━ • ━━━━━━━", "desc": "居中圆点粗线" },
                { "symbol": "✧･ﾟ: *✧･ﾟ:* *:･ﾟ✧*:･ﾟ✧", "desc": "完整闪光分隔" },
                { "symbol": "︵‿︵‿୨♡୧‿︵‿︵", "desc": "波浪爱心分隔" },
                { "symbol": "─── ⋆⋅☆⋅⋆ ───", "desc": "星点短分隔" },
                { "symbol": "‧₊˚ ⋅ 𓐐𓎩 ‧₊˚ ⋅", "desc": "天使翅膀分隔" },
                { "symbol": "⋆┈┈┈┈┈┈┈┈⋆", "desc": "星点虚线" }
            ]
        },
        {
            "id": "star-line",
            "name": "星星长串",
            "emoji": "✩",
            "badge": 17,
            "items": [
                { "symbol": "★ ★ ★ ★ ★", "desc": "空格星" },
                { "symbol": "✧✧✧✧✧✧✧✧", "desc": "细星连串" },
                { "symbol": "✦✦✦✦✦✦✦✦", "desc": "四瓣星串" },
                { "symbol": "✩₊˚.༄", "desc": "星尘点缀" },
                { "symbol": "⋆｡°✩⋆", "desc": "星钻组合" },
                { "symbol": "✧･ﾟ: *✧･ﾟ:*", "desc": "闪光星" },
                { "symbol": "★·.·´¯`·.·★", "desc": "花式单星" },
                { "symbol": "☆〜（ゝ。∂）", "desc": "星脸表情" },
                { "symbol": "✧✦✧✦✧✦✧✦", "desc": "大小星交替" },
                { "symbol": "🌟⋆⭒˚｡⋆", "desc": "emoji 星串" },
                { "symbol": "✫彡✫彡✫彡", "desc": "花星闪烁" },
                { "symbol": "⌒°⋆⠁⋆°⌒", "desc": "弧角星" },
                // 新增
                { "symbol": "⋆｡°✩⋆｡°✩⋆｡°✩", "desc": "连续星钻" },
                { "symbol": "⋆⁺₊⋆ ☾⋆⁺₊⋆", "desc": "月亮星尘" },
                { "symbol": "★彡★彡★彡", "desc": "流星闪" },
                { "symbol": "⋆⭒˚｡⋆ ⋆⭒˚｡⋆", "desc": "双星串" },
                { "symbol": "✧･ﾟ: *✧･ﾟ:* *:･ﾟ✧*:･ﾟ✧", "desc": "双闪光" }
            ]
        },
        {
            "id": "heart-line",
            "name": "爱心长串",
            "emoji": "♡",
            "badge": 16,
            "items": [
                { "symbol": "♡ ♡ ♡ ♡ ♡", "desc": "空格爱心" },
                { "symbol": "♥♥♥♥♥♥♥♥", "desc": "实心爱串" },
                { "symbol": "♡♡♡♡♡♡♡♡", "desc": "空心爱串" },
                { "symbol": "·♡·♡·♡·♡·", "desc": "点爱相间" },
                { "symbol": "❥❥❥❥❥❥❥", "desc": "旋转爱串" },
                { "symbol": "♡+.ﾟ(￫ε￩*)ﾟ+.ﾟ", "desc": "爱心撒娇" },
                { "symbol": "♡̆̈", "desc": "爱心带点" },
                { "symbol": "❤️ྀི", "desc": "爱心变体" },
                { "symbol": "♡ ～♡～ ♡", "desc": "波浪爱心" },
                { "symbol": "₍ᐢ •⌄• ᐢ₎ ♡", "desc": "小手爱心" },
                { "symbol": "·  ♡  ·", "desc": "居中爱心" },
                { "symbol": "♡̷♡̷♡̷♡̷", "desc": "音符爱串" },
                // 新增
                { "symbol": "୨♡୧ ୨♡୧ ୨♡୧", "desc": "蝴蝶结爱心" },
                { "symbol": "♡₊˚♡₊˚♡₊˚", "desc": "星点爱心" },
                { "symbol": "♡̷♡̷♡̷♡̷♡̷", "desc": "划线爱心串" },
                { "symbol": "·♡· ♡ ·♡·", "desc": "对称爱心" }
            ]
        },
        {
            "id": "flower-line",
            "name": "花朵装饰",
            "emoji": "✿",
            "badge": 15,
            "items": [
                { "symbol": "✿ ✿ ✿ ✿ ✿", "desc": "空格花" },
                { "symbol": "❀❀❀❀❀❀❀", "desc": "白花串" },
                { "symbol": "✿✿✿✿✿✿✿✿", "desc": "花串" },
                { "symbol": "🌸🌸🌸🌸🌸", "desc": "樱花串" },
                { "symbol": "·❀·❀·❀·❀·", "desc": "点花相间" },
                { "symbol": "❁´◡`❁", "desc": "花脸组合" },
                { "symbol": "◦°˚°◦  ✿  ◦°˚°◦", "desc": "光环花" },
                { "symbol": "✧❀✧❀✧❀", "desc": "星花交替" },
                { "symbol": "₊✧.◦・◦.✧₊", "desc": "小碎花" },
                { "symbol": "❁❀✿❁❀✿", "desc": "三种花循环" },
                { "symbol": "(❁´◡`❁)", "desc": "笑脸带花" },
                { "symbol": "♡◦*♡◦*", "desc": "花心碎钻" },
                // 新增
                { "symbol": "°❀⋆.ೃ࿔*", "desc": "梦幻小花" },
                { "symbol": "✿´◡`✿", "desc": "笑脸花" },
                { "symbol": "❀✿❁❀✿❁", "desc": "三种花循环加强" }
            ]
        },
        {
            "id": "emoji-deco",
            "name": "Emoji 长串",
            "emoji": "🎀",
            "badge": 14,
            "items": [
                { "symbol": "🎀🎀🎀🎀🎀", "desc": "蝴蝶结串" },
                { "symbol": "🌈🌈🌈🌈🌈", "desc": "彩虹串" },
                { "symbol": "💫💫💫💫💫", "desc": "星光串" },
                { "symbol": "🎉🎉🎉🎉🎉", "desc": "彩带串" },
                { "symbol": "✨✨✨✨✨", "desc": "闪亮串" },
                { "symbol": "🔥🔥🔥🔥🔥", "desc": "火焰串" },
                { "symbol": "💛💛💛💛💛", "desc": "黄心串" },
                { "symbol": "🦋🦋🦋🦋🦋", "desc": "蝴蝶串" },
                { "symbol": "🍀🍀🍀🍀🍀", "desc": "幸运草串" },
                { "symbol": "🕊️🕊️🕊️🕊️", "desc": "和平鸽串" },
                { "symbol": "☄️☄️☄️☄️", "desc": "流星串" },
                { "symbol": "🌙🌙🌙🌙🌙", "desc": "月亮串" },
                { "symbol": "🌸🌸🌸", "desc": "三樱" },
                { "symbol": "💖💖💖", "desc": "三粉心" }
            ]
        },
        {
            "id": "deco-combo",
            "name": "花字组合",
            "emoji": "✧",
            "badge": 16,
            "items": [
                { "symbol": "(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧", "desc": "抛星欢迎" },
                { "symbol": "☆*:.｡.o(≧▽≦)o.｡.:*☆", "desc": "星幕庆祝" },
                { "symbol": "⊂(◉‿◉)つ", "desc": "张开双臂" },
                { "symbol": "˗ˋˏ ♡ ˎˊ˗", "desc": "爱心悬浮" },
                { "symbol": "✧≖◡≖✧", "desc": "花眼微笑" },
                { "symbol": "·͜·♡", "desc": "爱心点点" },
                { "symbol": "(￣ω￣;)ゞ", "desc": "挠头花字" },
                { "symbol": "ˋ( ° ▽、° )", "desc": "挥手告别" },
                { "symbol": "°˖✧◝(⁰▿⁰)◜✧˖°", "desc": "星光登场" },
                { "symbol": "・*:..｡o○☆*:..｡o○", "desc": "光点环绕" },
                { "symbol": "٩(◕‿◕｡)۶", "desc": "开心招手" },
                { "symbol": "～♡～", "desc": "波浪爱心" },
                { "symbol": "(｡♥‿♥｡)", "desc": "心动组合" },
                { "symbol": "♫꒰･◡･๑꒱", "desc": "音符笑脸" },
                { "symbol": "ε(´｡•᎑•`)っ💕", "desc": "爱心传递" },
                { "symbol": "∠( ᐛ 」∠)＿", "desc": "躺平画字" }
            ]
        },
        {
            "id": "arrow-line",
            "name": "箭头长串",
            "emoji": "➤",
            "badge": 13,
            "items": [
                { "symbol": "➤➤➤➤➤", "desc": "实心箭头串" },
                { "symbol": "→→→→→→→→", "desc": "右箭头串" },
                { "symbol": "≫≫≫≫≫≫≫", "desc": "重箭头串" },
                { "symbol": "▶▶▶▶▶▶▶", "desc": "播放箭串" },
                { "symbol": "◁◁◁◁◁◁◁", "desc": "左箭串" },
                { "symbol": "↝↝↝↝↝↝", "desc": "波浪箭串" },
                { "symbol": "➤┈┈┈┈┈┈➤", "desc": "线箭结合" },
                { "symbol": "→ → → → →", "desc": "空格箭头" },
                { "symbol": "»»»»»»»»", "desc": "双尖括号" },
                { "symbol": "↺↻↺↻↺↻", "desc": "旋转箭头" },
                // 新增
                { "symbol": "╰┈➤", "desc": "弯曲箭头" },
                { "symbol": "»»————-««", "desc": "双向箭头框" },
                { "symbol": "→∙→∙→∙→", "desc": "点缀箭头" }
            ]
        },
        {
            "id": "box-deco",
            "name": "边框长串",
            "emoji": "▬",
            "badge": 14,
            "items": [
                { "symbol": "▬▬▬▬▬▬▬▬", "desc": "黑色长条" },
                { "symbol": "▁▂▃▄▅▆▇█", "desc": "渐变条" },
                { "symbol": "█▇▆▅▄▃▂▁", "desc": "反渐变条" },
                { "symbol": "▒▒▒▒▒▒▒▒", "desc": "灰度条" },
                { "symbol": "░▒▓█▓▒░", "desc": "渐进边框" },
                { "symbol": "▌▌▌▌▌▌▌▌", "desc": "左框条" },
                { "symbol": "▐▐▐▐▐▐▐▐", "desc": "右框条" },
                { "symbol": "▓▓▓▓▓▓▓▓", "desc": "深灰条" },
                { "symbol": "▀▄▀▄▀▄▀▄", "desc": "棋盘条" },
                { "symbol": "◣◢◣◢◣◢", "desc": "三角条" },
                { "symbol": "▰▰▰▰▰▰▰", "desc": "实心块条" },
                { "symbol": "▱▱▱▱▱▱▱", "desc": "空心块条" },
                { "symbol": "━━━━━┳━━━━━", "desc": "中线长条" },
                { "symbol": "┄┄┄┄◆┄┄┄┄", "desc": "菱形线" }
            ]
        },
        {
            "id": "text-deco",
            "name": "文字点缀",
            "emoji": "♡",
            "badge": 15,
            "items": [
                { "symbol": "· 别忘了我 ·", "desc": "文字强调" },
                { "symbol": "✧ 划重点 ✧", "desc": "重点标记" },
                { "symbol": "❀ 好物分享 ❀", "desc": "好物标记" },
                { "symbol": "★ 置顶 ★", "desc": "置顶标记" },
                { "symbol": "─── 分割线 ───", "desc": "中文分割" },
                { "symbol": "─ ♡ 未完待续 ♡ ─", "desc": "未完标记" },
                { "symbol": "⊹ 正文开始 ⊹", "desc": "正文标记" },
                { "symbol": "◍ 补充说明 ◍", "desc": "补充标记" },
                { "symbol": "✦ 今日份 ✦", "desc": "今日标记" },
                { "symbol": "☾ 晚安好梦 ☽", "desc": "晚安标记" },
                { "symbol": "☀ 早安 ☀", "desc": "早安标记" },
                { "symbol": "♫ 配乐 ♫", "desc": "配乐标记" },
                // 新增
                { "symbol": "✦ 重点内容 ✦", "desc": "重点内容" },
                { "symbol": "♡ 今日心情 ♡", "desc": "心情标记" },
                { "symbol": "─── END ───", "desc": "结束标记" }
            ]
        },
        {
            "id": "bow-line",
            "name": "蝴蝶结长串",
            "emoji": "୨୧",
            "badge": 8,
            "items": [
                { "symbol": "୨୧୨୧୨୧୨୧", "desc": "连续蝴蝶结" },
                { "symbol": "⋆୨୧⋆୨୧⋆", "desc": "星点蝴蝶结" },
                { "symbol": "୨♡୧୨♡୧୨♡୧", "desc": "爱心蝴蝶结" },
                { "symbol": "‧₊˚୨୧˚₊‧", "desc": "柔和蝴蝶结" },
                { "symbol": "୨୧┈┈┈┈୨୧", "desc": "线蝴蝶结" },
                { "symbol": "⋆ ˚｡⋆୨୧˚｡⋆", "desc": "星环蝴蝶结" },
                { "symbol": "୨୧ ୨୧ ୨୧", "desc": "空格蝴蝶结" },
                { "symbol": "꒰୨୧꒱", "desc": "括号蝴蝶结" }
            ]
        }
    ],

    // 底部特性卡
    features: [
        {
            "icon": "🖌️",
            "iconClass": "feat-blue",
            "title": "排版利器",
            "desc": "花式分隔线、长串装饰，一键排版文章与评论区"
        },
        {
            "icon": "✨",
            "iconClass": "feat-purple",
            "title": "样式丰富",
            "desc": "星星、爱心、花朵、边框、箭头、蝴蝶结……应有尽有"
        },
        {
            "icon": "📋",
            "iconClass": "feat-green",
            "title": "一键复制",
            "desc": "整段长串一次复制，无需逐个拼接"
        },
        {
            "icon": "❤️",
            "iconClass": "feat-orange",
            "title": "轻松使用",
            "desc": "点击即复制，为你的文字加点小心思"
        }
    ]
};