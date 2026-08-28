/**
 * 颜文字图鉴 · 数据源
 * 精简优化版 · 51 大类、534 个颜文字
 * 通过 window.KAOMOJI_DATA 暴露给页面
 */
window.KAOMOJI_DATA = {
    meta: {
        title: '颜文字图鉴',
        icon: '(→_→)',
        subtitle: '从嘲讽到撒娇，从极简到沙雕，从含蓄到放肆 · 534 种颜文字一键复制，让表达更有温度',
        totalLabel: '点击 复制',
        totalCount: 569
    },

    categories: [
        // ========== 基础情绪 ==========
        {
            "id": "shock",
            "name": "震惊 · 瞪大眼",
            "emoji": "😳",
            "badge": 12,
            "items": [
                { "symbol": "(⊙ˍ⊙)", "desc": "轻微震惊" },
                { "symbol": "(☉_☉)", "desc": "呆滞凝视" },
                { "symbol": "(⊙ｏ⊙)", "desc": "大惊失色" },
                { "symbol": "(O_O)", "desc": "普通惊吓" },
                { "symbol": "(°ロ°)", "desc": "惊掉下巴" },
                { "symbol": "(；⊙д⊙)", "desc": "巨大冲击" },
                { "symbol": "(°△°|||)", "desc": "原地石化" },
                { "symbol": "(꒪⌓꒪)", "desc": "瞳孔地震" },
                { "symbol": "(；°Д°)=3", "desc": "石化" },
                { "symbol": "(°ロ°;)", "desc": "呆滞石化" },
                { "symbol": "(＃°Д°)", "desc": "大惊失色" },
                { "symbol": "(ﾟдﾟ)！", "desc": "震惊尖叫" }
            ]
        },
        {
            "id": "sideeye",
            "name": "斜视 · 侧目",
            "emoji": "¬_¬",
            "badge": 16,
            "items": [
                { "symbol": "(→_→)", "desc": "侧目向右" },
                { "symbol": "(←_←)", "desc": "侧目向左" },
                { "symbol": "(→_←)", "desc": "视线交叉" },
                { "symbol": "(←_→)", "desc": "反向视线交叉" },
                { "symbol": "(¬_¬)", "desc": "斜眼白眼" },
                { "symbol": "(¬‿¬)", "desc": "斜眼奸笑" },
                { "symbol": "(¬､¬)", "desc": "眯眼斜瞥" },
                { "symbol": "(눈_눈)", "desc": "死鱼眼侧目" },
                { "symbol": "(ㆆ_ㆆ)", "desc": "黑线斜眼" },
                { "symbol": "(￢_￢)", "desc": "撇嘴斜眼" },
                { "symbol": "(￢‿￢)", "desc": "撇嘴奸笑" },
                { "symbol": "(¬_¬\")", "desc": "斜眼不爽" },
                { "symbol": "(→_→;)", "desc": "心虚侧目" },
                { "symbol": "(←_←)(→_→)", "desc": "左看右看" },
                { "symbol": "(/ω＼)", "desc": "捂脸偷瞄" },
                { "symbol": "(*/ω＼*)", "desc": "害羞捂脸偷瞄" }
            ]
        },
        {
            "id": "think",
            "name": "思考 · 疑惑",
            "emoji": "🤔",
            "badge": 12,
            "items": [
                { "symbol": "(・_・?)", "desc": "疑惑" },
                { "symbol": "(？o？)", "desc": "满脑问号" },
                { "symbol": "(゜-゜)", "desc": "歪头想" },
                { "symbol": "(・∀・？)", "desc": "不解" },
                { "symbol": "(｡ŏ_ŏ)", "desc": "思考中" },
                { "symbol": "(⊙_⊙)?", "desc": "震惊疑惑" },
                { "symbol": "(；一_一)?", "desc": "无语疑惑" },
                { "symbol": "(´･_･)`", "desc": "纠结" },
                { "symbol": "(・へ・)?", "desc": "不解歪头" },
                { "symbol": "(￣ー￣)?", "desc": "深思" },
                { "symbol": "(｡ŏ_ŏ)?", "desc": "犯难" },
                { "symbol": "(；°Д°)?", "desc": "彻底纠结" }
            ]
        },
        {
            "id": "mock",
            "name": "嘲讽 · 阴阳",
            "emoji": "😏",
            "badge": 12,
            "items": [
                { "symbol": "(￣_,￣)", "desc": "就这？斜眼蔑视" },
                { "symbol": "(￣▽￣)ノ", "desc": "拜拜了您嘞" },
                { "symbol": "(＾▽＾)b", "desc": "点赞 · 讽刺版" },
                { "symbol": "(凸⊙▽⊙)凸", "desc": "国际友好手势" },
                { "symbol": "(ಠ_ಠ)", "desc": "死亡凝视" },
                { "symbol": "(⌐■_■)", "desc": "墨镜装酷" },
                { "symbol": "ψ(._. )>", "desc": "暗中观察" },
                { "symbol": "(；￣Д￣)", "desc": "气到无语" },
                { "symbol": "(￣ρ￣)", "desc": "嗤之以鼻" },
                { "symbol": "(｀ε´)", "desc": "撇嘴轻蔑" },
                { "symbol": "(￣ヘ￣)", "desc": "不屑扭头" },
                { "symbol": "(¬_¬)`", "desc": "翻白眼" }
            ]
        },
        {
            "id": "coquetry",
            "name": "撒娇 · 腻歪",
            "emoji": "🥺",
            "badge": 14,
            "items": [
                { "symbol": "(｡♥‿♥｡)", "desc": "含情脉脉" },
                { "symbol": "(◕‿◕)♡", "desc": "比心发射" },
                { "symbol": "(づ｡◕‿‿◕｡)づ", "desc": "要抱抱" },
                { "symbol": "(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧", "desc": "撒花转圈" },
                { "symbol": "(￣ω￣;)", "desc": "吐舌求原谅" },
                { "symbol": "(๑˃̵ᴗ˂̵)و", "desc": "握拳加油" },
                { "symbol": "(✧ω✧)", "desc": "星星眼求求" },
                { "symbol": "(˶‾᷄ ⁻̫ ‾᷅˵)", "desc": "害羞脸红" },
                { "symbol": "(◍•ᴗ•◍)❤", "desc": "比心发射" },
                { "symbol": "(っ´ω`c)♡", "desc": "蹭蹭贴贴" },
                { "symbol": "(๑•́ ω •̀๑)", "desc": "偷偷喜欢" },
                { "symbol": "(⁄ ⁄>⁄ω⁄<⁄ ⁄)", "desc": "脸红偷瞄" },
                { "symbol": "(´･ω･`)♡", "desc": "心动" },
                { "symbol": "(◡‿◡)♡", "desc": "暗自开心" }
            ]
        },
        {
            "id": "cry",
            "name": "委屈 · 哭泣",
            "emoji": "😭",
            "badge": 24,
            "items": [
                { "symbol": "(；﹏；)", "desc": "两行清泪" },
                { "symbol": "(｡•́︿•̀｡)", "desc": "撅嘴含泪" },
                { "symbol": "(つ﹏⊂)", "desc": "捂住脸哭" },
                { "symbol": "(ﾉД`)", "desc": "经典大哭" },
                { "symbol": "(╥﹏╥)", "desc": "委屈到变形" },
                { "symbol": "(༎ຶД༎ຶ)", "desc": "暴风哭泣" },
                { "symbol": "_(´ཀ`」 ∠)_", "desc": "哭到倒地" },
                { "symbol": "(;´༎ຶД༎ຶ`)", "desc": "终极泪崩" },
                { "symbol": "(•́ㅂ•̀)و", "desc": "抽泣无力" },
                { "symbol": "(•̥́_•̀)", "desc": "心碎ing" },
                { "symbol": "(๑•́ ₃ •̀๑)", "desc": "委屈巴巴" },
                { "symbol": "(；д；)", "desc": "泪光闪闪" },
                { "symbol": "(ㄒoㄒ)", "desc": "大哭" },
                { "symbol": "(T_T)", "desc": "泪流满面" },
                { "symbol": "(இωஇ)", "desc": "暴风哭泣" },
                { "symbol": "( ˃̣̣̥ω˂̣̣̥ )", "desc": "哇哇大哭" },
                { "symbol": "(´；ω；｀)", "desc": "伤心大哭" },
                { "symbol": "(இ﹏இ)", "desc": "泪眼婆娑" },
                { "symbol": "(´;︵; )`", "desc": "委屈撇嘴" },
                { "symbol": "(๑ˊᯅˋ๑)", "desc": "哭哭脸" },
                { "symbol": "(｡ŏ﹏ŏ)", "desc": "可怜巴巴" },
                { "symbol": "(；ω；)", "desc": "泪目" },
                { "symbol": "(´-﹏-)`", "desc": "无奈可怜" },
                { "symbol": "(இдஇ)", "desc": "泪流成河" }
            ]
        },
        {
            "id": "regret",
            "name": "遗憾 · 惋惜",
            "emoji": "😔",
            "badge": 35,
            "items": [
                { "symbol": "(；一_一)", "desc": "神情落寞" },
                { "symbol": "(´-﹏-`)", "desc": "惋惜叹气" },
                { "symbol": "(｡ŏ_ŏ)", "desc": "欲言又止" },
                { "symbol": "(´･_･`)", "desc": "有点遗憾" },
                { "symbol": "(´;︵;)", "desc": "委屈遗憾" },
                { "symbol": "(｡•́︿•̀｡)", "desc": "满脸遗憾" },
                { "symbol": "(T﹏T)", "desc": "惋惜不已" },
                { "symbol": "(T_T)", "desc": "泪流满面" },
                { "symbol": "(இ﹏இ)", "desc": "泪眼婆娑" },
                { "symbol": "(；∀；)", "desc": "哽咽难言" },
                { "symbol": "(ㄒoㄒ)", "desc": "忍不住大哭" },
                { "symbol": "(；°Д°)", "desc": "错愕难当" },
                { "symbol": "(´-ω-｀)", "desc": "情绪低落" },
                { "symbol": "(｡ŏ﹏ŏ)", "desc": "可怜巴巴" },
                { "symbol": "(´_ゝ`)", "desc": "有些失落" },
                { "symbol": "(￣ヘ￣)", "desc": "不甘心" },
                { "symbol": "(－‸ლ)", "desc": "无奈扶额" },
                { "symbol": "(・へ・)", "desc": "撇嘴无奈" },
                { "symbol": "(´-_ゝ｀)", "desc": "无奈斜眼" },
                { "symbol": "(╮°□°)╭", "desc": "摊手无奈" },
                { "symbol": "(；°ロ°)", "desc": "错愕呆住" },
                { "symbol": "( ；′⌒`)", "desc": "遗憾摇头" }
            ]
        },
        {
            "id": "awkward",
            "name": "无语 · 尴尬",
            "emoji": "🙄",
            "badge": 12,
            "items": [
                { "symbol": "¯\\_(ツ)_/¯", "desc": "耸肩无奈" },
                { "symbol": "(－‸ლ)", "desc": "扶额无语" },
                { "symbol": "(╮°□°)╭", "desc": "摊手无奈" },
                { "symbol": "(｀д´)", "desc": "无语" },
                { "symbol": "(；￣ェ￣)", "desc": "尴尬冒汗" },
                { "symbol": "(ㆆᴗㆆ)", "desc": "黑线无语" },
                { "symbol": "(；°Д°)", "desc": "震惊尴尬" },
                { "symbol": "(・へ・)", "desc": "噘嘴无奈" },
                { "symbol": "(；´Д)`", "desc": "张大嘴尴尬" },
                { "symbol": "(；ﾟдﾟ)", "desc": "目瞪口呆" },
                { "symbol": "(・_・;)", "desc": "尴尬冒汗" },
                { "symbol": "(；′⌒`)", "desc": "眉头一皱" }
            ]
        },
        {
            "id": "angry",
            "name": "生气 · 傲娇",
            "emoji": "😠",
            "badge": 16,
            "items": [
                { "symbol": "(╬ Ò ‸ Ó)", "desc": "气鼓鼓" },
                { "symbol": "(╯°□°)╯︵ ┻━┻", "desc": "掀桌" },
                { "symbol": "(ノಠ益ಠ)ノ彡┻━┻", "desc": "暴怒掀桌" },
                { "symbol": "(｀Д´)", "desc": "生气叉腰" },
                { "symbol": "(ﾒﾟ皿ﾟ)ﾒ", "desc": "磨牙怒视" },
                { "symbol": "(๑•̀д•́๑)", "desc": "气到跳脚" },
                { "symbol": "(｀⌒´メ)", "desc": "撇嘴恼火" },
                { "symbol": "(╬◣д◢)", "desc": "愤怒" },
                { "symbol": "(＃｀д´)ﾉ", "desc": "暴怒" },
                { "symbol": "(￣^￣)", "desc": "不爽" },
                { "symbol": "(￣ε(#￣)", "desc": "傲娇哼" },
                { "symbol": "(｀⌒´)", "desc": "傲娇撇嘴" },
                { "symbol": "(´-ω-｀)", "desc": "傲娇困" },
                { "symbol": "(╬ﾟдﾟ)", "desc": "青筋暴起" },
                { "symbol": "(｀へ´)╯", "desc": "甩手生气" },
                { "symbol": "(╬ Ò﹏Ó)", "desc": "强忍怒火" }
            ]
        },
        {
            "id": "happy",
            "name": "开心 · 兴奋",
            "emoji": "🎉",
            "badge": 14,
            "items": [
                { "symbol": "＼(≧▽≦)／", "desc": "欢呼雀跃" },
                { "symbol": "(ﾉ´ヮ)ﾉ*:･ﾟ✧", "desc": "疯狂打call" },
                { "symbol": "٩(◕‿◕｡)۶", "desc": "手舞足蹈" },
                { "symbol": "(≧∇≦)/", "desc": "开心挥手" },
                { "symbol": "ヽ(>∀<☆)ノ", "desc": "星星眼开心" },
                { "symbol": "(★ω★)/", "desc": "闪耀兴奋" },
                { "symbol": "(☆▽☆)", "desc": "星星眼爆" },
                { "symbol": "(ﾉ≧∀≦)ﾉ", "desc": "疯狂欢呼" },
                { "symbol": "(⌒▽⌒)☆", "desc": "星星期待" },
                { "symbol": "(≧∀≦)ノ", "desc": "开心比心" },
                { "symbol": "(°▽°)/", "desc": "兴高采烈" },
                { "symbol": "(★≧∀≦★)", "desc": "闪耀狂喜" },
                { "symbol": "ヽ(°▽°)ノ", "desc": "旋转跳跃" },
                { "symbol": "(≧▽≦)ノ", "desc": "蹦跳庆祝" }
            ]
        },
        {
            "id": "supercute",
            "name": "可爱 · 卖萌",
            "emoji": "🥰",
            "badge": 16,
            "items": [
                { "symbol": "(ᵔᴥᵔ)", "desc": "憨憨呆萌" },
                { "symbol": "(๑>◡<๑)", "desc": "开心眯眼" },
                { "symbol": "(๑¯∀¯๑)", "desc": "得意可爱" },
                { "symbol": "(๑•ᴗ•๑)", "desc": "软萌微笑" },
                { "symbol": "(๑´ㅂ๑)`", "desc": "嘟嘴卖萌" },
                { "symbol": "(｡･ω･｡)", "desc": "乖乖可爱" },
                { "symbol": "(๑•̀ω•́๑)", "desc": "元气满满" },
                { "symbol": "(๑´∀๑)`", "desc": "软萌可爱" },
                { "symbol": "(๑˘͈ ᵕ ˘͈๑)", "desc": "害羞可爱" },
                { "symbol": "(´∀｀)♡", "desc": "开心比心" },
                { "symbol": "(｡•́‿•̀｡)", "desc": "微笑软萌" },
                { "symbol": "(๑˃́ꇴ˂̀๑)", "desc": "欢喜雀跃" },
                { "symbol": "(๑¯◡¯๑)", "desc": "眯眼可爱" },
                { "symbol": "(´｡• ᵕ •｡)`", "desc": "抿嘴软萌" },
                { "symbol": "(๑ᵔ◡ᵔ๑)", "desc": "眯眼满足" },
                { "symbol": "(๑>؂<๑)", "desc": "开心雀跃" }
            ]
        },

        // ========== 状态 / 动作 ==========
        {
            "id": "minimal",
            "name": "极简 · 线条",
            "emoji": "✏️",
            "badge": 16,
            "items": [
                { "symbol": "·_·", "desc": "佛系无感" },
                { "symbol": "-_-", "desc": "无语睡着" },
                { "symbol": "^_^", "desc": "标准微笑" },
                { "symbol": ">_<", "desc": "抓狂害羞" },
                { "symbol": "0_0", "desc": "呆住" },
                { "symbol": "@_@", "desc": "头晕眼花" },
                { "symbol": "~_~", "desc": "困倦失望" },
                { "symbol": "$_$", "desc": "见钱眼开" },
                { "symbol": "=_=", "desc": "生无可恋" },
                { "symbol": "-w-", "desc": "眯眯眼" },
                { "symbol": "(´)", "desc": "累" },
                { "symbol": "(；)", "desc": "汗" },
                { "symbol": "(｀・)", "desc": "斜眼" },
                { "symbol": "(・｀)", "desc": "反向斜眼" },
                { "symbol": "(´・)", "desc": "若有所思" },
                { "symbol": "(・´)", "desc": "恍然大悟" }
            ]
        },
        {
            "id": "action",
            "name": "动作 · 肢体",
            "emoji": "🤸",
            "badge": 14,
            "items": [
                { "symbol": "(╯°□°)╯︵ ┻━┻", "desc": "掀桌经典" },
                { "symbol": "┬─┬ ノ( ゜-゜ノ)", "desc": "扶桌乖乖" },
                { "symbol": "_(:3 」∠)_", "desc": "躺平摆烂" },
                { "symbol": "/( .□.)\\", "desc": "抱头蹲墙角" },
                { "symbol": "(￣^￣)ゞ", "desc": "敬礼乖巧" },
                { "symbol": "(゜-゜)つロ", "desc": "干杯" },
                { "symbol": "( ͡° ͜ʖ ͡°)✧", "desc": "计划通" },
                { "symbol": "ε=ε=(~￣▽￣)~", "desc": "狂奔逃跑" },
                { "symbol": "(づ￣ ³￣)づ", "desc": "亲一口" },
                { "symbol": "(つ≧▽≦)つ", "desc": "抱抱" },
                { "symbol": "( •_•)>⌐■-■", "desc": "戴墨镜" },
                { "symbol": "(ﾉ´ヮ)ﾉ*:･ﾟ✧`", "desc": "撒花" },
                { "symbol": "(´･_･)ﾉ⌒●~*`", "desc": "扔炸弹" },
                { "symbol": "( ͡° ͜ʖ ͡°)つ", "desc": "坏笑递物" }
            ]
        },
        {
            "id": "sleepy",
            "name": "睡觉 · 躺平",
            "emoji": "😴",
            "badge": 12,
            "items": [
                { "symbol": "(∪､∪)", "desc": "眯眼困" },
                { "symbol": "(－_－) zzZ", "desc": "犯困" },
                { "symbol": "(￣ρ￣)..zzZ", "desc": "打盹" },
                { "symbol": "(｡-_-｡)", "desc": "眼皮打架" },
                { "symbol": "(∪.∪ )...zzz", "desc": "昏昏欲睡" },
                { "symbol": "(－ω－) zz", "desc": "打瞌睡" },
                { "symbol": "(｡´-ω-｀｡)", "desc": "软绵绵困" },
                { "symbol": "(￣o￣) zzZ", "desc": "睡熟了" },
                { "symbol": "(´,_ゝ｀)", "desc": "困到瘫" },
                { "symbol": "(－ω－)", "desc": "装迷糊" },
                { "symbol": "(－_－)", "desc": "懒得动" },
                { "symbol": "(；°Д°) ！！", "desc": "惊醒" }
            ]
        },
        {
            "id": "shy",
            "name": "害羞 · 脸红",
            "emoji": "😊",
            "badge": 8,
            "items": [
                { "symbol": "(´,,•ω•,,)♡", "desc": "脸红心跳" },
                { "symbol": "(〃∇〃)", "desc": "羞红了" },
                { "symbol": "(´∀｀*)", "desc": "害羞笑" },
                { "symbol": "(⁄ ⁄•⁄ω⁄•⁄ ⁄)", "desc": "扭捏害羞" },
                { "symbol": "(≧◡≦)", "desc": "害羞眯眼" },
                { "symbol": "(´∇｀)", "desc": "娇羞一笑" },
                { "symbol": "(˘͈ ᵕ ˘͈๑)", "desc": "抿嘴羞" },
                { "symbol": "(๑˘͈ ᵕ ˘͈๑)", "desc": "害羞可爱" }
            ]
        },
        {
            "id": "cheer",
            "name": "加油 · 努力",
            "emoji": "💪",
            "badge": 8,
            "items": [
                { "symbol": "(ง •̀_•́)ง", "desc": "斗志满满" },
                { "symbol": "(ง°∀°)ง", "desc": "干劲十足" },
                { "symbol": "(•̀ω•́ )✧", "desc": "闪耀努力" },
                { "symbol": "(•̀ᴗ•́)", "desc": "专注" },
                { "symbol": "(๑•̀ㅂ•́)", "desc": "认真努力" },
                { "symbol": "(๑˃̵ᴗ˂̵)", "desc": "认真加油" },
                { "symbol": "(•̀ω•́)", "desc": "专注状态" },
                { "symbol": "(๑•̀ㅂ•́)و✧", "desc": "加油" }
            ]
        },
        {
            "id": "cool",
            "name": "超酷 · 得意",
            "emoji": "😎",
            "badge": 14,
            "items": [
                { "symbol": "(★ω★)", "desc": "闪耀酷" },
                { "symbol": "(￣ー￣)ゞ", "desc": "冷酷敬礼" },
                { "symbol": "(｀∀´)ノ", "desc": "酷酷挥手" },
                { "symbol": "(✧≖ ͜ʖ≖)", "desc": "眯眼酷" },
                { "symbol": "(•̀ω•́)✧", "desc": "闪耀酷" },
                { "symbol": "(★ᴗ★)", "desc": "星星眼酷" },
                { "symbol": "(｀・ω・´)ノ", "desc": "自信挥手" },
                { "symbol": "(￣ω￣)ﾉ", "desc": "惬意挥手" },
                { "symbol": "(¬‿¬)つ", "desc": "狡黠递物" },
                { "symbol": "(｀ε´)ノ", "desc": "傲娇挥手" },
                { "symbol": "(✧ω✧)ノ", "desc": "酷炫挥手" },
                { "symbol": "(￣ω￣)", "desc": "享受满足" },
                { "symbol": "(๑•̀д•́๑)و", "desc": "霸气挥拳" },
                { "symbol": "(•̀ᴗ•́)و", "desc": "得意振作" }
            ]
        },
        {
            "id": "crazy",
            "name": "沙雕 · 搞怪",
            "emoji": "🤪",
            "badge": 22,
            "items": [
                { "symbol": "( ͡° ͜ʖ ͡°)", "desc": "经典坏笑" },
                { "symbol": "(☞ﾟヮﾟ)☞", "desc": "指点迷津" },
                { "symbol": "(•_•) ( •_•)>⌐■-■ (⌐■_■)", "desc": "墨镜三段" },
                { "symbol": "(｀・ω・´)", "desc": "得意叉腰" },
                { "symbol": "( ͡°ω ͡°)", "desc": "坏笑暧昧" },
                { "symbol": "(ʘ‿ʘ)", "desc": "瞪眼惊讶" },
                { "symbol": "(ﾟ∀ﾟ)", "desc": "傻了" },
                { "symbol": "(ﾟДﾟ)", "desc": "惊了" },
                { "symbol": "(|||ﾟДﾟ)", "desc": "彻底凉了" },
                { "symbol": "(´∀｀)σ", "desc": "吃瓜看戏" },
                { "symbol": "(^q^)", "desc": "猥琐笑" },
                { "symbol": "(°ཀ°)", "desc": "吐了" },
                { "symbol": "(>_<)b", "desc": "疯狂打call" },
                { "symbol": "(☞ﾟ∀ﾟ)☞", "desc": "指点搞怪" },
                { "symbol": "(ノ°ο°)ノ", "desc": "疯狂摇晃" },
                { "symbol": "( ͡~ ͜ʖ ͡°)", "desc": "眯眼坏笑" },
                { "symbol": "( ˙o˙ )", "desc": "呆萌转圈" },
                { "symbol": "(๑´ڡ๑)`", "desc": "偷吃" },
                { "symbol": "(◉◞౪◟◉)", "desc": "变态痴汉" },
                { "symbol": "(｀∀´)Ψ", "desc": "邪魅一笑" },
                { "symbol": "☜(ﾟヮﾟ☜)", "desc": "反向指点" },
                { "symbol": "(╭☞•́⍛•̀)╭☞", "desc": "社会人指你" }
            ]
        },
        {
            "id": "dumb",
            "name": "呆萌 · 傻傻",
            "emoji": "😲",
            "badge": 14,
            "items": [
                { "symbol": "(⊙_⊙)", "desc": "瞪大眼" },
                { "symbol": "(⊙o⊙)", "desc": "圆眼惊讶" },
                { "symbol": "(・∀・)", "desc": "呆呆的" },
                { "symbol": "(・∀・；)", "desc": "冒汗呆" },
                { "symbol": "(´⊙ω⊙)`", "desc": "囧傻" },
                { "symbol": "(；゜o゜)", "desc": "惊呆" },
                { "symbol": "(゜Д゜；)", "desc": "石傻" },
                { "symbol": "(´･ω･)`", "desc": "懵圈" },
                { "symbol": "(⊙﹏⊙)", "desc": "呆瓜" },
                { "symbol": "(￣△￣)", "desc": "傻愣" },
                { "symbol": "(・_・。)", "desc": "呆若木鸡" },
                { "symbol": "(；￣ー￣)", "desc": "一脸懵" },
                { "symbol": "(゜-゜；)", "desc": "迷惑傻" },
                { "symbol": "(；・_・)", "desc": "茫然" }
            ]
        },
        {
            "id": "gentle",
            "name": "温柔 · 满足",
            "emoji": "🕊️",
            "badge": 12,
            "items": [
                { "symbol": "(˘͈ ᵕ ˘͈ )", "desc": "眉眼弯弯" },
                { "symbol": "(´,,•ω•,,)", "desc": "温柔呢喃" },
                { "symbol": "(♡ω♡)", "desc": "爱心温柔" },
                { "symbol": "(´｡•ω•｡)`", "desc": "软糯温柔" },
                { "symbol": "(ˊᗜˋ*)", "desc": "甜甜温柔" },
                { "symbol": "(´• ω •)`", "desc": "轻软温柔" },
                { "symbol": "(´∀｀)～♪", "desc": "满足哼歌" },
                { "symbol": "(´▽｀)♡", "desc": "心满意足" },
                { "symbol": "(⌒▽⌒)~", "desc": "幸福满足" },
                { "symbol": "(◦˘ ˘◦)~", "desc": "暖洋洋" },
                { "symbol": "(◕‿◕)～", "desc": "心满意足" },
                { "symbol": "(＾▽＾)♪", "desc": "满足轻哼" }
            ]
        },
        {
            "id": "nervous",
            "name": "紧张 · 慌乱",
            "emoji": "😰",
            "badge": 10,
            "items": [
                { "symbol": "(；ﾟДﾟ)(ﾟДﾟ)", "desc": "慌了" },
                { "symbol": "(；゜o゜)ゞ", "desc": "抖个不停" },
                { "symbol": "(；•̀д•́)", "desc": "紧张" },
                { "symbol": "(；´Д`)ゝ", "desc": "紧张到抖" },
                { "symbol": "(°▽°；)", "desc": "僵住" },
                { "symbol": "(；ﾟ∀ﾟ)", "desc": "手足无措" },
                { "symbol": "( ﾟДﾟ)ｳｩ", "desc": "心跳加速" },
                { "symbol": "(；´•ω•｀)", "desc": "不知所措" },
                { "symbol": "(；o_o)", "desc": "眼神飘" },
                { "symbol": "(；´△`)", "desc": "手心冒汗" }
            ]
        },
        {
            "id": "obedient",
            "name": "乖巧 · 听话",
            "emoji": "🐑",
            "badge": 10,
            "items": [
                { "symbol": "(＾ω＾ゞ)", "desc": "乖乖照办" },
                { "symbol": "(´・ω・`)ゝ", "desc": "立正站好" },
                { "symbol": "( ｡•̀ᴗ-)✧", "desc": "乖乖听话" },
                { "symbol": "(๑Ő∀Ő๑)ﾉ", "desc": "遵命" },
                { "symbol": "(￣(●●)￣)", "desc": "老实坐着" },
                { "symbol": "(´-`)ゝ", "desc": "好的好的" },
                { "symbol": "(๑•̀ㅂ•́)ゝ", "desc": "收到任务" },
                { "symbol": "(　´∀｀)ノ", "desc": "乖乖举手" },
                { "symbol": "(´・_・`)ゝ", "desc": "安静待命" },
                { "symbol": "(◍•ᴗ•◍)ゝ", "desc": "乖巧应声" }
            ]
        },
        {
            "id": "naughty",
            "name": "调皮 · 坏坏",
            "emoji": "😜",
            "badge": 10,
            "items": [
                { "symbol": "(｀∀´)ΨΨ", "desc": "捣蛋鬼" },
                { "symbol": "(๑•̀ᴗ•́)و‿", "desc": "使坏" },
                { "symbol": "(￢‿￢)ゝ", "desc": "搞怪" },
                { "symbol": "(¬‿¬)♫", "desc": "偷着乐" },
                { "symbol": "(≖‿≖)ゝ", "desc": "坏笑" },
                { "symbol": "(╯‿╰)ノ", "desc": "皮一下" },
                { "symbol": "(´,_ゝ｀)ﾉ", "desc": "调皮鬼" },
                { "symbol": "(◣_◢)ゝ", "desc": "犯倔调皮" },
                { "symbol": "(￣‿￣)Ψ", "desc": "小恶魔" },
                { "symbol": "(╭☞´ิ∀´ิ)╭☞", "desc": "你品你细品" }
            ]
        },

        // ========== 角色 / 风格 ==========
        {
            "id": "animal",
            "name": "动物 · 拟态",
            "emoji": "🐱",
            "badge": 14,
            "items": [
                { "symbol": "=^.^=", "desc": "猫猫脸" },
                { "symbol": "=；ω；=", "desc": "泪目猫猫" },
                { "symbol": "(=｀ェ´=)", "desc": "不爽猫" },
                { "symbol": "(U・ω・U)", "desc": "小熊仓鼠" },
                { "symbol": "(´･ω･`)", "desc": "小狐狸" },
                { "symbol": "(◕ᴥ◕)", "desc": "熊本熊脸" },
                { "symbol": "~(=^‥^)ノ", "desc": "猫爪招呼" },
                { "symbol": "(￣(00)￣)", "desc": "猪猪脸" },
                { "symbol": "ᶻ ᶻ ᶻ", "desc": "猫猫睡觉" },
                { "symbol": "🐶ᵔᴥᵔ", "desc": "汪汪撒娇" },
                { "symbol": "(▽◕ ᴥ ◕▽)", "desc": "欢快的狗子" },
                { "symbol": "(,,-㉨-,,)", "desc": "河豚鼓腮" },
                { "symbol": "(❍ᴥ❍ʋ)", "desc": "警觉的狐狸" },
                { "symbol": "(￣(エ)￣)", "desc": "熊仓鼠" }
            ]
        },
        {
            "id": "green",
            "name": "绿茶 · 白莲",
            "emoji": "🍵",
            "badge": 8,
            "items": [
                { "symbol": "(￣▽￣)~*", "desc": "甩头发 · 人家不懂" },
                { "symbol": "(◕‿◕✿)", "desc": "带小花 · 为你好" },
                { "symbol": "(✿◠‿◠)", "desc": "纯洁无辜" },
                { "symbol": "(｡◕‿◕｡)", "desc": "好单纯好不做作" },
                { "symbol": "(´▽`ʃ♡)ƪ", "desc": "人家最爱你了" },
                { "symbol": "(。・＿・。)ﾉ", "desc": "弱小可怜无助" },
                { "symbol": "(◡ᴗ◡✿)", "desc": "温柔端庄" },
                { "symbol": "(´▽ʃ♡)ƪ`", "desc": "捧心" }
            ]
        },
        {
            "id": "art",
            "name": "文艺 · 唯美",
            "emoji": "🌸",
            "badge": 8,
            "items": [
                { "symbol": "(´▽｀)ノ♪", "desc": "哼歌" },
                { "symbol": "(´• ω •`)", "desc": "岁月静好" },
                { "symbol": "(￣ε￣)", "desc": "闭眼享受" },
                { "symbol": "(˘ω˘)", "desc": "安详入睡" },
                { "symbol": "( ˘ ³˘)♥", "desc": "飞吻" },
                { "symbol": "(♡˙︶˙♡)", "desc": "恋爱少女" },
                { "symbol": "(◡‿◡✿)", "desc": "端庄优雅笑" },
                { "symbol": "(✿´‿`✿)", "desc": "花容月貌" }
            ]
        },
        {
            "id": "cyber",
            "name": "机械 · 科幻",
            "emoji": "🤖",
            "badge": 8,
            "items": [
                { "symbol": "[O_O]", "desc": "机器人懵逼" },
                { "symbol": "[T_T]", "desc": "机器人哭泣" },
                { "symbol": "(>.<)", "desc": "信号不良" },
                { "symbol": "(；一_一)", "desc": "监控凝视" },
                { "symbol": "{⊙_⊙}", "desc": "雷达锁定" },
                { "symbol": "(°0°)", "desc": "系统崩溃" },
                { "symbol": "(▀̿Ĺ̯▀̿ ̿)", "desc": "黑客墨镜" },
                { "symbol": "[¬º-°]¬", "desc": "机器人耸肩" }
            ]
        },
        {
            "id": "eyevariant",
            "name": "眼睛变体",
            "emoji": "👁️",
            "badge": 10,
            "items": [
                { "symbol": "(◉‿◉)", "desc": "圆瞪大眼" },
                { "symbol": "(◔‿◔)", "desc": "挑眉暗示" },
                { "symbol": "(ಠ‿ಠ)", "desc": "眯眼嘲讽" },
                { "symbol": "(✧‿✧)", "desc": "星星眼闪光" },
                { "symbol": "(⇀‸↼)", "desc": "死鱼眼" },
                { "symbol": "(⌣_⌣)", "desc": "安详佛系" },
                { "symbol": "(˘‿˘)", "desc": "满足微笑" },
                { "symbol": "(♥‿♥)", "desc": "爱心眼花痴" },
                { "symbol": "(◕‿◕)", "desc": "大眼睛无辜" },
                { "symbol": "(❁‿❁)", "desc": "睫毛星星眼" }
            ]
        },
        {
            "id": "mouthvariant",
            "name": "嘴变体",
            "emoji": "👄",
            "badge": 8,
            "items": [
                { "symbol": "(°ᴗ°)", "desc": "开心到飞起" },
                { "symbol": "(°◡°)", "desc": "温和微笑" },
                { "symbol": "(°皿°)", "desc": "愤怒咬牙" },
                { "symbol": "(°∀°)", "desc": "傻笑呆萌" },
                { "symbol": "(°ᗜ°)", "desc": "咧嘴笑" },
                { "symbol": "(°͈́⌣°͈̀)", "desc": "眯眼抿嘴笑" },
                { "symbol": "(°◠°)", "desc": "期待好奇" },
                { "symbol": "(°̥̥̥̥̥̥̥̥ω°̥̥̥̥̥̥̥̥ )", "desc": "超委屈大哭" }
            ]
        },

        // ========== 场景 / 日常 ==========
        {
            "id": "heart",
            "name": "比心 · 爱心",
            "emoji": "❤️",
            "badge": 12,
            "items": [
                { "symbol": "(♥ω♥*)", "desc": "心动比心" },
                { "symbol": "(♡‿♡)", "desc": "爱心眼" },
                { "symbol": "(づ￣ ³￣)づ", "desc": "亲一口" },
                { "symbol": "(｡♥‿♥｡)", "desc": "含情脉脉" },
                { "symbol": "(◕‿◕)♡", "desc": "比心发射" },
                { "symbol": "(◍•ᴗ•◍)❤", "desc": "软萌比心" },
                { "symbol": "(っ´ω`c)♡", "desc": "蹭蹭贴贴" },
                { "symbol": "(´∀｀)♡", "desc": "开心比心" },
                { "symbol": "(♡˙︶˙♡)", "desc": "恋爱少女" },
                { "symbol": "(˘ ³˘)♥", "desc": "飞吻" },
                { "symbol": "♡(˃͈ દ ˂͈ ༶ )", "desc": "软萌爱心" },
                { "symbol": "(ღ˘⌣˘ღ)", "desc": "满足比心" }
            ]
        },
        {
            "id": "speechless",
            "name": "无语 · 黑人问号",
            "emoji": "😐",
            "badge": 12,
            "items": [
                { "symbol": "(￣ー￣)", "desc": "无语凝视" },
                { "symbol": "(一_一)", "desc": "黑人问号" },
                { "symbol": "(；¬_¬)", "desc": "斜眼无语" },
                { "symbol": "(¯□¯)", "desc": "无语方框" },
                { "symbol": "(－_－)", "desc": "无语睡着" },
                { "symbol": "(￣ヘ￣)", "desc": "不屑无语" },
                { "symbol": "(｀д´)", "desc": "无语" },
                { "symbol": "(・_・)", "desc": "沉默无语" },
                { "symbol": "(￣▽￣;)", "desc": "尴尬无语" },
                { "symbol": "(；一_一)", "desc": "监控无语" },
                { "symbol": "(￣～￣)", "desc": "无语思考" },
                { "symbol": "(´-_ゝ｀)", "desc": "无奈斜眼" }
            ]
        },
        {
            "id": "facepalm",
            "name": "捂脸 · 社死",
            "emoji": "🤦",
            "badge": 10,
            "items": [
                { "symbol": "(/ω＼)", "desc": "捂脸" },
                { "symbol": "(*/ω＼*)", "desc": "害羞捂脸" },
                { "symbol": "(〃▽〃)", "desc": "羞红捂脸" },
                { "symbol": "(⁄ ⁄•⁄ω⁄•⁄ ⁄)", "desc": "扭捏社死" },
                { "symbol": "(つ﹏⊂)", "desc": "捂脸哭" },
                { "symbol": "(－‸ლ)", "desc": "扶额" },
                { "symbol": "(￣▽￣*)ゞ", "desc": "尴尬敬礼" },
                { "symbol": "(;;;*_*)", "desc": "社死冒汗" },
                { "symbol": "(*/▽＼*)", "desc": "羞羞捂脸" },
                { "symbol": "(´-﹏-｀)", "desc": "无奈捂脸" }
            ]
        },
        {
            "id": "thumbsup",
            "name": "点赞 · 认可",
            "emoji": "👍",
            "badge": 10,
            "items": [
                { "symbol": "(＾▽＾)b", "desc": "点赞" },
                { "symbol": "( •̀ ω •́ )✧", "desc": "认可闪光" },
                { "symbol": "d(´∀｀)", "desc": "大拇指" },
                { "symbol": "(๑•̀ㅂ•́)و✧", "desc": "加油点赞" },
                { "symbol": "(￣▽￣)b", "desc": "满意点赞" },
                { "symbol": "(＾ω＾)b", "desc": "开心点赞" },
                { "symbol": "(´∀｀)b", "desc": "好评" },
                { "symbol": "(๑˃̵ᴗ˂̵)و", "desc": "握拳认可" },
                { "symbol": "(★ω★)b", "desc": "闪耀点赞" },
                { "symbol": "(｀・ω・´)b", "desc": "自信点赞" }
            ]
        },
        {
            "id": "bye",
            "name": "拜拜 · 挥手",
            "emoji": "👋",
            "badge": 10,
            "items": [
                { "symbol": "(￣▽￣)ノ", "desc": "拜拜" },
                { "symbol": "(＾ω＾)ノ", "desc": "挥手再见" },
                { "symbol": "(´∀｀)ノ", "desc": "哈喽/再见" },
                { "symbol": "ヾ(￣▽￣)", "desc": "挥手" },
                { "symbol": "(＾▽＾)ノ", "desc": "开心挥手" },
                { "symbol": "(￣ー￣)ノ", "desc": "冷静再见" },
                { "symbol": "(・∀・)ノ", "desc": "傻乐挥手" },
                { "symbol": "(´▽｀)ノ", "desc": "温柔挥手" },
                { "symbol": "ヾ(＾∇＾)", "desc": "开心拍手" },
                { "symbol": "(ノ´∀｀)ノ", "desc": "热情挥手" }
            ]
        },
        {
            "id": "wait",
            "name": "等等 · 稍等",
            "emoji": "⏳",
            "badge": 8,
            "items": [
                { "symbol": "(´･_･)", "desc": "稍等" },
                { "symbol": "(・_・) ...", "desc": "思考中" },
                { "symbol": "(￣～￣)", "desc": "等一下" },
                { "symbol": "(´-ω-｀)", "desc": "等等哦" },
                { "symbol": "(・_・;)", "desc": "稍等冒汗" },
                { "symbol": "(￣▽￣)ゞ", "desc": "收到稍等" },
                { "symbol": "(´･ω･`) ...", "desc": "等我一下" },
                { "symbol": "(・∀・)ノ彡", "desc": "马上好" }
            ]
        },
        {
            "id": "chill",
            "name": "佛系 · 淡定",
            "emoji": "🧘",
            "badge": 8,
            "items": [
                { "symbol": "(￣▽￣)", "desc": "淡定微笑" },
                { "symbol": "(・∀・)", "desc": "佛系" },
                { "symbol": "( ˘ω˘ )", "desc": "安详" },
                { "symbol": "(￣ω￣)", "desc": "满足淡定" },
                { "symbol": "(・_・)", "desc": "平静" },
                { "symbol": "(´∀｀)", "desc": "随缘" },
                { "symbol": "( ˘▽˘ )", "desc": "悠闲" },
                { "symbol": "(￣ー￣)", "desc": "淡定凝视" }
            ]
        },
        {
            "id": "spectate",
            "name": "吃瓜 · 围观",
            "emoji": "🍿",
            "badge": 8,
            "items": [
                { "symbol": "(´∀｀)σ", "desc": "吃瓜看戏" },
                { "symbol": "( ⌒▽⌒)", "desc": "微笑围观" },
                { "symbol": "( ͡° ͜ʖ ͡°)", "desc": "坏笑围观" },
                { "symbol": "(￣▽￣)σ", "desc": "指着看戏" },
                { "symbol": "(・∀・)σ", "desc": "指点江山" },
                { "symbol": "(´ー｀)σ", "desc": "冷静吃瓜" },
                { "symbol": "( ﾟ∀ﾟ)σ", "desc": "兴奋围观" },
                { "symbol": "(¬‿¬)σ", "desc": "斜眼吃瓜" }
            ]
        },
        {
            "id": "call",
            "name": "打call · 应援",
            "emoji": "📣",
            "badge": 8,
            "items": [
                { "symbol": "(๑•̀ㅂ•́)و✧", "desc": "加油打call" },
                { "symbol": "٩(˃̶͈̀௰˂̶͈́)و", "desc": "双手应援" },
                { "symbol": "(ง •̀_•́)ง", "desc": "斗志满满" },
                { "symbol": "٩(◕‿◕｡)۶", "desc": "手舞足蹈" },
                { "symbol": "(ﾉ´ヮ)ﾉ*:･ﾟ✧", "desc": "疯狂打call" },
                { "symbol": "(≧∇≦)/", "desc": "开心应援" },
                { "symbol": "ヽ(>∀<☆)ノ", "desc": "星星眼应援" },
                { "symbol": "(★ω★)/", "desc": "闪耀打call" }
            ]
        },
        {
            "id": "daily",
            "name": "日常 · 礼貌",
            "emoji": "📋",
            "badge": 16,
            "items": [
                { "symbol": "(´▽`)ﾉ おはよ", "desc": "早安" },
                { "symbol": "(￣ρ￣)..zzZZ", "desc": "晚安" },
                { "symbol": "(人´∀｀)ｱﾘｶﾞﾄ", "desc": "谢谢" },
                { "symbol": "(｡•́︿•̀｡) ごめん", "desc": "对不起" },
                { "symbol": "(｀・ω・´)ゞ", "desc": "收到" },
                { "symbol": "(´﹃｀)", "desc": "饿死了" },
                { "symbol": "(。-ω-)zzz", "desc": "困死了" },
                { "symbol": "σ(´∀｀*)", "desc": "开心冲鸭" },
                { "symbol": "m(_ _)m", "desc": "拜托了" },
                { "symbol": "(＾▽＾)", "desc": "你好" },
                { "symbol": "(´∀｀)ノ", "desc": "哈喽" },
                { "symbol": "(￣ー￣)ノ", "desc": "再见" },
                { "symbol": "(＾ω＾)ノ", "desc": "拜拜啦" },
                { "symbol": "(・ω・)ゝ", "desc": "收到" },
                { "symbol": "(ﾉ´∀｀)ﾉ", "desc": "太感谢了" },
                { "symbol": "(´-﹏-)", "desc": "我错了" }
            ]
        },
        {
            "id": "office",
            "name": "职场 · 打工人",
            "emoji": "💼",
            "badge": 10,
            "items": [
                { "symbol": "(´Д )`", "desc": "又加班了" },
                { "symbol": "(￣▽￣)\"", "desc": "礼貌而不失尴尬" },
                { "symbol": "(´・ω・)ﾉ", "desc": "好的马上做" },
                { "symbol": "(；´∀｀)", "desc": "假装很忙" },
                { "symbol": "(´Д )ﾉ ﾊｲﾊｲ`", "desc": "敷衍三连" },
                { "symbol": "(　・ω・)＝≡", "desc": "疯狂码代码" },
                { "symbol": "（＞﹏＜）bug", "desc": "又是BUG" },
                { "symbol": "( ﾟДﾟ)ﾉ⌒", "desc": "老板来了快切屏" },
                { "symbol": "（´∀｀）提交", "desc": "终于跑通了" },
                { "symbol": "( ´Д`)y━･~~", "desc": "摸鱼喝茶" }
            ]
        },
        {
            "id": "gamer",
            "name": "游戏 · 电竞",
            "emoji": "🎮",
            "badge": 6,
            "items": [
                { "symbol": "(｀д´)ノ⌒", "desc": "狂按键盘" },
                { "symbol": "(╯°□°)╯(⚙)", "desc": "怒砸手柄" },
                { "symbol": "(>_>)。。", "desc": "蹲草丛" },
                { "symbol": "(・ω・)ノ✧", "desc": "开团了" },
                { "symbol": "(ﾟ∀ﾟ)つ", "desc": "秀操作" },
                { "symbol": "(°ω°)／", "desc": "吃鸡成功" }
            ]
        },
        {
            "id": "eating",
            "name": "干饭 · 馋",
            "emoji": "🍜",
            "badge": 8,
            "items": [
                { "symbol": "(￣﹃￣)", "desc": "流口水" },
                { "symbol": "( ˘▽˘)っ♨", "desc": "吹热气" },
                { "symbol": "～(￣▽￣～)~", "desc": "甩开腮帮子吃" },
                { "symbol": "(。≧≦。)", "desc": "光盘行动" },
                { "symbol": "( ゜-゜)つロ 乾杯", "desc": "干杯" },
                { "symbol": "(￣︿￣)~", "desc": "吸溜面条" },
                { "symbol": "( ･᷄ὢ･᷅ )", "desc": "还想再来一碗" },
                { "symbol": "(ﾉ´ヮ)ﾉ干", "desc": "大口干饭" }
            ]
        },
        {
            "id": "dancing",
            "name": "舞动 · 蹦迪",
            "emoji": "🕺",
            "badge": 6,
            "items": [
                { "symbol": "(•_•)ノ⌐■-■ (•_•)", "desc": "摇摆舞步" },
                { "symbol": "ヽ(・∀・)ノ", "desc": "挥手蹦迪" },
                { "symbol": "(~‾▿‾)~", "desc": "左右摇摆" },
                { "symbol": "ヽ(°▽°)ノ", "desc": "旋转跳跃" },
                { "symbol": "(≧▽≦)ノ", "desc": "蹦跳庆祝" },
                { "symbol": "(☞^o^)☞", "desc": "扭胯热舞" }
            ]
        },
        {
            "id": "music",
            "name": "音乐 · 耳机党",
            "emoji": "🎧",
            "badge": 6,
            "items": [
                { "symbol": "┏(￣▽￣)♪", "desc": "带上耳机" },
                { "symbol": "(￣ε￣)♫", "desc": "闭眼沉浸" },
                { "symbol": "♪(´▽｀)ノ", "desc": "跟着哼唱" },
                { "symbol": "(°∀°)♬", "desc": "节奏上头" },
                { "symbol": "♩♪♫♬", "desc": "音符飘过" },
                { "symbol": "(・ω・)ノ~♪", "desc": "单曲循环" }
            ]
        },
        {
            "id": "exercising",
            "name": "运动 · 健身",
            "emoji": "🏋️",
            "badge": 5,
            "items": [
                { "symbol": "(ง •̀ω•́)ง", "desc": "撸铁" },
                { "symbol": "₍ᐢ•⌄•ᐢ₎", "desc": "深蹲蹲" },
                { "symbol": "(ノ￣д￣)ノ", "desc": "跑不动了" },
                { "symbol": "٩(＾◡＾)۶", "desc": "晨跑打卡" },
                { "symbol": "( •̀ᴗ•́ )و⚡", "desc": "肌肉充电" }
            ]
        },
        {
            "id": "hiking",
            "name": "旅行 · 打卡",
            "emoji": "🧳",
            "badge": 5,
            "items": [
                { "symbol": "(ノ°▽°)ノ⌒", "desc": "说走就走" },
                { "symbol": "(￣▽￣)ノ✈", "desc": "起飞啦" },
                { "symbol": "＼(^ω^)／", "desc": "景点打卡" },
                { "symbol": "(´▽`)ノ♪", "desc": "自拍一张" },
                { "symbol": "(￣ε￣)⌒", "desc": "看日出日落" }
            ]
        },
        {
            "id": "reading",
            "name": "读书 · 学习",
            "emoji": "📚",
            "badge": 5,
            "items": [
                { "symbol": "( ´•ᴗ•` )📖", "desc": "认真看书" },
                { "symbol": "(｀・ω・´)✏", "desc": "奋笔疾书" },
                { "symbol": "(・_・;)📚", "desc": "书太多看不完" },
                { "symbol": "(；゜Д゜)⚡", "desc": "考前突击" },
                { "symbol": "（´･ω･`）✓", "desc": "划重点" }
            ]
        },
        {
            "id": "petting",
            "name": "撸猫 · 吸宠",
            "emoji": "😺",
            "badge": 6,
            "items": [
                { "symbol": "(^ω^ )🐾", "desc": "撸猫猫" },
                { "symbol": "=^..^=ฅ", "desc": "猫爪挠挠" },
                { "symbol": "( ・ω・)ノ🐶", "desc": "逗狗子" },
                { "symbol": "(≧▽≦)🐹", "desc": "吸仓鼠" },
                { "symbol": "(´｡• ᵕ •｡`)🦜", "desc": "逗鸟玩" },
                { "symbol": "°Д°🐢", "desc": "看乌龟爬" }
            ]
        },
        {
            "id": "weather",
            "name": "天气 · 四季",
            "emoji": "🌦️",
            "badge": 6,
            "items": [
                { "symbol": "╰(°▽°)╯🌧", "desc": "淋雨了" },
                { "symbol": "(；-_-)☀", "desc": "晒化了" },
                { "symbol": "(。・_・。)❄", "desc": "冻成狗" },
                { "symbol": "( ˘▽˘)🍃", "desc": "秋风凉凉" },
                { "symbol": "(♡´艸`♡)🌸", "desc": "春意盎然" },
                { "symbol": "( ￣▽￣)☁", "desc": "云淡风轻" }
            ]
        },
        {
            "id": "celebrate",
            "name": "恭喜 · 庆祝",
            "emoji": "🎊",
            "badge": 5,
            "items": [
                { "symbol": "ヽ(´∀`*)ノ🎊", "desc": "拉响礼炮" },
                { "symbol": "(ﾉ>ω<)ﾉ🎂", "desc": "生日祝福" },
                { "symbol": "(ﾉ◕ヮ◕)ﾉ🎁", "desc": "拆礼物" },
                { "symbol": "(*´∀｀)ノ🎉", "desc": "中奖啦" },
                { "symbol": "٩( ˃̶͈̀ω˂̶͈́ )۶🎆", "desc": "烟花庆祝" }
            ]
        },
        {
            "id": "detective",
            "name": "侦探 · 推理",
            "emoji": "🔎",
            "badge": 4,
            "items": [
                { "symbol": "(￣︿￣)v", "desc": "握拳推理" },
                { "symbol": "(￣へ￣)？", "desc": "线索在哪" },
                { "symbol": "(・_・；)ゞ", "desc": "仔细勘察" },
                { "symbol": "(；￣ー￣)✧", "desc": "破案了" }
            ]
        },
        {
            "id": "obscure",
            "name": "冷门魔性",
            "emoji": "🎁",
            "badge": 6,
            "items": [
                { "symbol": "(；¬_¬)", "desc": "斜眼偷瞄" },
                { "symbol": "(´ཀ」 ∠)_`", "desc": "哭到躺平" },
                { "symbol": "(；′⌒)`", "desc": "啜泣" },
                { "symbol": "(´°̥̥̥̥̥̥̥̥ω°̥̥̥̥̥̥̥̥｀)", "desc": "世界崩塌式哭泣" },
                { "symbol": "(◑‿◐)", "desc": "阴阳眼" },
                { "symbol": "(´◔ ‸◔')", "desc": "怀疑人生" }
            ]
        }
    ],

    features: [
        {
            "icon": "📋",
            "iconClass": "feat-blue",
            "title": "一键复制",
            "desc": "点击任意颜文字 即可复制到剪贴板"
        },
        {
            "icon": "🔍",
            "iconClass": "feat-green",
            "title": "分类清晰",
            "desc": "57 类精心整理 快速找到想要的表情"
        },
        {
            "icon": "⭐",
            "iconClass": "feat-purple",
            "title": "持续更新",
            "desc": "更多颜文字持续收录中 欢迎收藏本站"
        },
        {
            "icon": "❤️",
            "iconClass": "feat-orange",
            "title": "轻松使用",
            "desc": "简洁界面，无需学习 让表达更有趣"
        }
    ],

    footer: '颜文字图鉴 · 让表达更有趣'
};