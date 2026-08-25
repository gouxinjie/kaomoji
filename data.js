/**
 * 颜文字图鉴 · 数据源
 * 74 大类、约 100+ 个颜文字
 * 通过 window.KAOMOJI_DATA 暴露给页面
 */
window.KAOMOJI_DATA = {
    // 头部信息
    meta: {
        title: '颜文字图鉴',
        icon: '(⊙_⊙)',
        subtitle: '从嘲讽到撒娇，从极简到沙雕 · 点击颜文字即可复制',
        totalLabel: '点击 复制',
        totalCount: 74
    },

    // 14 大分类
    categories: [
        {
            id: 'shock',
            name: '震惊 · 瞪大眼',
            emoji: '😳',
            badge: 6,
            items: [
                { symbol: '(⊙ˍ⊙)', desc: '轻微震惊' },
                { symbol: '(☉_☉)', desc: '呆滞凝视' },
                { symbol: '(⊙ｏ⊙)', desc: '大惊失色' },
                { symbol: '(O_O)', desc: '普通惊吓' },
                { symbol: '(°ロ°)', desc: '惊掉下巴' },
                { symbol: '(；⊙д⊙)', desc: '巨大冲击' },
                { symbol: '(°△°|||)', desc: '原地石化' },
                { symbol: '(꒪⌓꒪)', desc: '瞳孔地震' }
            ]
        },
        {
            id: 'mock',
            name: '嘲讽 · 阴阳',
            emoji: '😏',
            badge: 8,
            items: [
                { symbol: '(￣_,￣)', desc: '就这？斜眼蔑视' },
                { symbol: '(¬_¬)', desc: '我信你个鬼' },
                { symbol: '(￣▽￣)ノ', desc: '拜拜了您嘞' },
                { symbol: '(＾▽＾)b', desc: '点赞 · 讽刺版' },
                { symbol: '(￣ー￣)', desc: '面无表情冷笑' },
                { symbol: '(凸⊙▽⊙)凸', desc: '国际友好手势' },
                { symbol: '(ಠ_ಠ)', desc: '死亡凝视' },
                { symbol: '(⌐■_■)', desc: '墨镜装酷' },
                { symbol: 'ψ(._. )>', desc: '暗中观察' },
                { symbol: '(；￣Д￣)', desc: '气到无语' }
            ]
        },
        {
            id: 'coquetry',
            name: '撒娇 · 腻歪',
            emoji: '🥺',
            badge: 9,
            items: [
                { symbol: '(｡♥‿♥｡)', desc: '含情脉脉' },
                { symbol: '(◕‿◕)♡', desc: '比心发射' },
                { symbol: '(づ｡◕‿‿◕｡)づ', desc: '要抱抱' },
                { symbol: '(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧', desc: '撒花转圈' },
                { symbol: '(￣ω￣;)', desc: '吐舌求原谅' },
                { symbol: '(๑˃̵ᴗ˂̵)و', desc: '握拳加油' },
                { symbol: '(✧ω✧)', desc: '星星眼求求' },
                { symbol: '(˶‾᷄ ⁻̫ ‾᷅˵)', desc: '害羞脸红' },
                { symbol: '(◍•ᴗ•◍)❤', desc: '比心发射' },
                { symbol: '(っ´ω`c)♡', desc: '蹭蹭贴贴' }
            ]
        },
        {
            id: 'cry',
            name: '哭泣 · 委屈',
            emoji: '😭',
            badge: 10,
            items: [
                { symbol: '(；﹏；)', desc: '两行清泪' },
                { symbol: '(｡•́︿•̀｡)', desc: '撅嘴含泪' },
                { symbol: '(つ﹏⊂)', desc: '捂住脸哭' },
                { symbol: '(ﾉД`)', desc: '经典大哭' },
                { symbol: '(╥﹏╥)', desc: '委屈到变形' },
                { symbol: '(༎ຶД༎ຶ)', desc: '暴风哭泣' },
                { symbol: '_(´ཀ`」 ∠)_', desc: '哭到倒地' },
                { symbol: '(;´༎ຶД༎ຶ`)', desc: '终极泪崩' },
                { symbol: '(•́ㅂ•̀)و', desc: '抽泣无力' },
                { symbol: '(•̥́_•̀)', desc: '心碎ing' }
            ]
        },
        {
            id: 'minimal',
            name: '极简 · 线条',
            emoji: '✏️',
            badge: 8,
            items: [
                { symbol: '·_·', desc: '佛系无感' },
                { symbol: '-_-', desc: '无语睡着' },
                { symbol: '^_^', desc: '标准微笑' },
                { symbol: '>_<', desc: '抓狂害羞' },
                { symbol: '0_0', desc: '呆住' },
                { symbol: '@_@', desc: '头晕眼花' },
                { symbol: '~_~', desc: '困倦失望' },
                { symbol: '$_$', desc: '见钱眼开' },
                { symbol: '=_=', desc: '生无可恋' },
                { symbol: '-w-', desc: '眯眯眼' }
            ]
        },
        {
            id: 'action',
            name: '狂野 · 动作',
            emoji: '🤸',
            badge: 7,
            items: [
                { symbol: '(╯°□°)╯︵ ┻━┻', desc: '掀桌经典' },
                { symbol: '┬─┬ ノ( ゜-゜ノ)', desc: '扶桌乖乖' },
                { symbol: '_(:3 」∠)_', desc: '躺平摆烂' },
                { symbol: '/( .□.)\\', desc: '抱头蹲墙角' },
                { symbol: '(￣^￣)ゞ', desc: '敬礼乖巧' },
                { symbol: '(゜-゜)つロ', desc: '干杯' },
                { symbol: '( ͡° ͜ʖ ͡°)✧', desc: '计划通' },
                { symbol: 'ε=ε=(~￣▽￣)~', desc: '狂奔逃跑' }
            ]
        },
        {
            id: 'animal',
            name: '动物 · 拟态',
            emoji: '🐱',
            badge: 8,
            items: [
                { symbol: '=^.^=', desc: '猫猫脸' },
                { symbol: '=；ω；=', desc: '泪目猫猫' },
                { symbol: '(=｀ェ´=)', desc: '不爽猫' },
                { symbol: '(U・ω・U)', desc: '小熊仓鼠' },
                { symbol: '(´･ω･`)', desc: '小狐狸' },
                { symbol: '(◕ᴥ◕)', desc: '熊本熊脸' },
                { symbol: '~(=^‥^)ノ', desc: '猫爪招呼' },
                { symbol: '(￣(00)￣)', desc: '猪猪脸' },
                { symbol: 'ᶻ ᶻ ᶻ', desc: '猫猫睡觉' },
                { symbol: '🐶ᵔᴥᵔ', desc: '汪汪撒娇' }
            ]
        },
        {
            id: 'cyber',
            name: '机械 · 科幻',
            emoji: '🤖',
            badge: 7,
            items: [
                { symbol: '[O_O]', desc: '机器人懵逼' },
                { symbol: '[T_T]', desc: '机器人哭泣' },
                { symbol: '(>.<)', desc: '信号不良' },
                { symbol: '(；一_一)', desc: '监控凝视' },
                { symbol: '{⊙_⊙}', desc: '雷达锁定' },
                { symbol: '(°0°)', desc: '系统崩溃' },
                { symbol: '(▀̿Ĺ̯▀̿ ̿)', desc: '黑客墨镜' },
                { symbol: '[¬º-°]¬', desc: '机器人耸肩' }
            ]
        },
        {
            id: 'green',
            name: '绿茶 · 白莲',
            emoji: '🍵',
            badge: 7,
            items: [
                { symbol: '(￣▽￣)~*', desc: '甩头发 · 人家不懂' },
                { symbol: '(◕‿◕✿)', desc: '带小花 · 为你好' },
                { symbol: '(✿◠‿◠)', desc: '纯洁无辜' },
                { symbol: '(｡◕‿◕｡)', desc: '好单纯好不做作' },
                { symbol: '(´▽`ʃ♡)ƪ', desc: '人家最爱你了' },
                { symbol: '(。・＿・。)ﾉ', desc: '弱小可怜无助' },
                { symbol: '(╭☞´ิ∀´ิ)╭☞', desc: '你品，你细品' },
                { symbol: '(◡ᴗ◡✿)', desc: '温柔端庄' }
            ]
        },
        {
            id: 'funny',
            name: '沙雕 · 破防',
            emoji: '💩',
            badge: 8,
            items: [
                { symbol: '(ﾟ∀ﾟ)', desc: '傻了' },
                { symbol: '(ﾟДﾟ)', desc: '惊了' },
                { symbol: '(ﾟ⊿ﾟ)', desc: '懵了' },
                { symbol: '(|||ﾟДﾟ)', desc: '彻底凉了' },
                { symbol: '(´∀｀)σ', desc: '吃瓜看戏' },
                { symbol: '(^q^)', desc: '猥琐笑/流鼻血' },
                { symbol: '(°ཀ°)', desc: '吐了/恶心' },
                { symbol: '(╬ﾟдﾟ)', desc: '青筋暴起' },
                { symbol: '(>_<)b', desc: '疯狂打call' },
                { symbol: '(°▽°)/', desc: '兴高采烈' }
            ]
        },
        {
            id: 'art',
            name: '文艺 · 唯美',
            emoji: '🌸',
            badge: 7,
            items: [
                { symbol: '(´▽｀)ノ♪', desc: '哼歌' },
                { symbol: '(´• ω •`)', desc: '岁月静好' },
                { symbol: '(￣ε￣)', desc: '闭眼享受' },
                { symbol: '(˘ω˘)', desc: '安详入睡' },
                { symbol: '( ˘ ³˘)♥', desc: '飞吻' },
                { symbol: '(♡˙︶˙♡)', desc: '恋爱少女' },
                { symbol: '(◡‿◡✿)', desc: '端庄优雅笑' },
                { symbol: '(✿´‿`✿)', desc: '花容月貌' }
            ]
        },
        {
            id: 'crash',
            name: '宕机 · 发疯',
            emoji: '🌀',
            badge: 8,
            items: [
                { symbol: '(°▽°)', desc: '表面平静' },
                { symbol: '(°⌓°)', desc: '灵魂出窍' },
                { symbol: '(°ロ°)', desc: '瞳孔地震' },
                { symbol: '(ﾟ〇ﾟ)', desc: '当场去世' },
                { symbol: '(;ﾟ∇ﾟ)', desc: '智商掉线' },
                { symbol: '(◉◞౪◟◉)', desc: '变态痴汉' },
                { symbol: "(ʘᗩʘ')", desc: '惊到变形' },
                { symbol: '(｀∀´)Ψ', desc: '邪魅一笑' },
                { symbol: '(╯︵╰)', desc: '委屈叹气' },
                { symbol: '(；′⌒`)', desc: '眉头一皱' }
            ]
        },
        {
            id: 'daily',
            name: '日常 · 短组合',
            emoji: '📋',
            badge: 8,
            items: [
                { symbol: '(´▽`)ﾉ おはよ', desc: '早安' },
                { symbol: '(￣ρ￣)..zzZZ', desc: '晚安' },
                { symbol: '(人´∀｀)ｱﾘｶﾞﾄ', desc: '谢谢' },
                { symbol: '(｡•́︿•̀｡) ごめん', desc: '对不起' },
                { symbol: '(๑•̀ㅂ•́)و✧', desc: '加油' },
                { symbol: '(｀・ω・´)ゞ', desc: '收到' },
                { symbol: '(´﹃｀)', desc: '饿死了' },
                { symbol: '(。-ω-)zzz', desc: '困死了' },
                { symbol: 'σ(´∀｀*)', desc: '开心冲鸭' },
                { symbol: 'm(_ _)m', desc: '拜托了' }
            ]
        },
        {
            id: 'dumb',
            name: '经典呆萌 · 惊讶',
            emoji: '😲',
            badge: 8,
            items: [
                { symbol: '(⊙_⊙)', desc: '瞪大眼' },
                { symbol: '(⊙o⊙)', desc: '圆眼惊讶' },
                { symbol: '(๑•́ ₃ •̀๑)', desc: '呆萌眨眼' },
                { symbol: '(｡ŏ_ŏ)', desc: '呆滞盯' },
                { symbol: '(・_・;)', desc: '尴尬冒汗' },
                { symbol: '(゜o゜;', desc: '惊讶结巴' },
                { symbol: '(°ロ°)', desc: '惊掉下巴' },
                { symbol: '(・∀・)', desc: '呆呆的' }
            ]
        },
        {
            id: 'cute',
            name: '可爱 · 卖萌',
            emoji: '🥰',
            badge: 8,
            items: [
                { symbol: '(๑•̀ㅂ•́)و✧', desc: '握拳加油' },
                { symbol: '(づ｡◕‿‿◕｡)づ', desc: '要抱抱' },
                { symbol: '(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧', desc: '撒花转圈' },
                { symbol: '(｡♥‿♥｡)', desc: '含情脉脉' },
                { symbol: '(◕‿◕✿)', desc: '带花微笑' },
                { symbol: '(ᵔᴥᵔ)', desc: '憨憨呆萌' },
                { symbol: '(✿◠‿◠)', desc: '纯洁无辜' },
                { symbol: '(๑˃̵ᴗ˂̵)و', desc: '可爱应援' }
            ]
        },
        {
            id: 'awkward',
            name: '无语 · 尴尬',
            emoji: '🤦',
            badge: 8,
            items: [
                { symbol: '¯\\_(ツ)_/¯', desc: '耸肩无奈' },
                { symbol: '(¬_¬)', desc: '白眼' },
                { symbol: '(－‸ლ)', desc: '扶额无语' },
                { symbol: '(눈_눈)', desc: '死鱼眼' },
                { symbol: '(￣ヘ￣)', desc: '不屑扭头' },
                { symbol: '(；￣Д￣)', desc: '满头黑线' },
                { symbol: '(╮°□°）╭', desc: '摊手无奈' }
            ]
        },
        {
            id: 'angry',
            name: '生气 · 傲娇',
            emoji: '😠',
            badge: 8,
            items: [
                { symbol: '(╬ Ò ‸ Ó)', desc: '气鼓鼓' },
                { symbol: '(╯°□°）╯︵ ┻━┻', desc: '掀桌' },
                { symbol: '(ノಠ益ಠ)ノ', desc: '暴怒掀桌' },
                { symbol: '(｀Д´)', desc: '生气叉腰' },
                { symbol: '(ﾒ ﾟ皿ﾟ)ﾒ', desc: '磨牙怒视' },
                { symbol: '(๑•̀д•́๑)', desc: '气到跳脚' }
            ]
        },
        {
            id: 'happy',
            name: '开心 · 兴奋',
            emoji: '🎉',
            badge: 6,
            items: [
                { symbol: '＼(≧▽≦)／', desc: '欢呼雀跃' },
                { symbol: '(ﾉ´ヮ)ﾉ*: ･ﾟ`', desc: '疯狂打call' },
                { symbol: '٩(◕‿◕｡)۶', desc: '手舞足蹈' },
                { symbol: '(≧∇≦)/', desc: '开心挥手' },
                { symbol: 'ヽ(>∀<☆)ノ', desc: '星星眼开心' },
                { symbol: '(★ω★)/', desc: '闪耀兴奋' }
            ]
        },
        {
            id: 'supercute',
            name: '超级可爱系',
            emoji: '💗',
            badge: 15,
            items: [
                { symbol: '(๑•̀ㅂ•́)و✧', desc: '握拳应援' },
                { symbol: '(づ｡◕‿‿◕｡)づ', desc: '要抱抱' },
                { symbol: '(｡♥‿♥｡)', desc: '含情脉脉' },
                { symbol: '(◕‿◕✿)', desc: '带花微笑' },
                { symbol: '(✿◠‿◠)', desc: '纯洁无辜' },
                { symbol: '(ᵔᴥᵔ)', desc: '憨憨呆萌' },
                { symbol: '(๑˃̵ᴗ˂̵)و', desc: '可爱应援' },
                { symbol: '(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧', desc: '撒花转圈' },
                { symbol: '(๑>◡<๑)', desc: '开心眯眼' },
                { symbol: '(๑¯∀¯๑)', desc: '得意可爱' },
                { symbol: '(๑•ᴗ•๑)', desc: '软萌微笑' },
                { symbol: '(๑´ㅂ๑)`', desc: '嘟嘴卖萌' },
                { symbol: '(๑•́ ₃ •̀๑)', desc: '委屈巴巴' },
                { symbol: '(｡･ω･｡)', desc: '乖乖可爱' },
                { symbol: '(๑•̀ω•́๑)', desc: '元气满满' }
            ]
        },
        {
            id: 'crazy',
            name: '沙雕 · 搞怪系',
            emoji: '🤪',
            badge: 18,
            items: [
                { symbol: '( ͡° ͜ʖ ͡°)', desc: '经典坏笑' },
                { symbol: '(¬‿¬)', desc: '狡黠奸笑' },
                { symbol: '(☞ﾟヮﾟ)☞', desc: '指点迷津' },
                { symbol: '(•_•) ( •_•)>⌐■-■ (⌐■_■)', desc: '墨镜三段' },
                { symbol: '¯\\_(ツ)_/¯', desc: '耸肩无奈' },
                { symbol: '(╯°□°)╯︵ ┻━┻', desc: '掀桌' },
                { symbol: '┬─┬ノ( º _ ºノ)', desc: '扶桌' },
                { symbol: '(ノಠ益ಠ)ノ彡┻━┻', desc: '暴怒掀桌' },
                { symbol: '(￣▽￣)ノ', desc: '挥手拜拜' },
                { symbol: '(｀・ω・´)', desc: '得意叉腰' },
                { symbol: '( ͡°ω ͡°)', desc: '坏笑暧昧' },
                { symbol: '(ʘ‿ʘ)', desc: '瞪眼惊讶' },
                { symbol: '(¬_¬)', desc: '白眼' },
                { symbol: '(눈_눈)', desc: '死鱼眼' },
                { symbol: '(；￣Д￣)', desc: '满头黑线' },
                { symbol: '(╮°□°)╭', desc: '摊手无奈' },
                { symbol: '(๑•̀д•́๑)', desc: '炸毛' },
                { symbol: '(╬ Ò ‸ Ó)', desc: '气鼓鼓' },
                { symbol: '(ﾒﾟ皿ﾟ)ﾒ', desc: '磨牙怒视' }
            ]
        },
        {
            id: 'cutemix',
            name: '可爱 + 沙雕混合',
            emoji: '🍭',
            badge: 14,
            items: [
                { symbol: '(๑˘︶˘๑)', desc: '可爱满足' },
                { symbol: '(๑•́ ₃ •̀๑)ﾉﾞ', desc: '挥手可爱' },
                { symbol: '(๑>؂<๑)', desc: '开心雀跃' },
                { symbol: '(๑´ڡ๑)`', desc: '偷吃' },
                { symbol: '(๑•́∀•̀๑)', desc: '软萌得意' },
                { symbol: '(๑‾̀◡‾́๑)', desc: '眯眼偷笑' },
                { symbol: '(๑•̀ㅂ•́)و', desc: '举旗加油' },
                { symbol: '(๑˃̶͈̀ロ˂̶͈́)و', desc: '疯狂打call' },
                { symbol: '(๑˘͈ ᵕ ˘͈๑)', desc: '害羞可爱' },
                { symbol: '(๑´ㅂ๑)♡`', desc: '嘟嘴比心' },
                { symbol: '(๑•́ ₃ •̀๑)', desc: '一脸问号' },
                { symbol: '(๑¯◡¯๑) ♪', desc: '哼歌开心' },
                { symbol: '(๑•̀ω•́)ノ', desc: '挥手元气' },
                { symbol: '(๑˃̵ᴗ˂̵)و ̑̑', desc: '双举应援' }
            ]
        },
        {
            id: 'sob',
            name: '超委屈 · 哭哭',
            emoji: '🥺',
            badge: 15,
            items: [
                { symbol: '(๑•́ ₃ •̀๑)', desc: '委屈巴巴' },
                { symbol: '(｡•́︿•̀｡)', desc: '撅嘴含泪' },
                { symbol: '(๑•́ω•̀๑)', desc: '含泪委屈' },
                { symbol: '(；д；)', desc: '泪光闪闪' },
                { symbol: '(ㄒoㄒ)', desc: '大哭' },
                { symbol: '(T_T)', desc: '泪流满面' },
                { symbol: '(இωஇ)', desc: '暴风哭泣' },
                { symbol: '(｡ŏ_ŏ)', desc: '泪眼汪汪' },
                { symbol: '(๑´•.̫ • ๑)`', desc: '撇嘴可怜' },
                { symbol: '(๑>_<๑)', desc: '纠结皱眉' },
                { symbol: '(๑•́︵•̀๑)', desc: '难过脸' },
                { symbol: '( ˃̣̣̥ω˂̣̣̥ )', desc: '哇哇大哭' },
                { symbol: '(๑˘̩̩̩̩̩̩́˘̩̩̩̩̩̩̀๑)', desc: '憋屈抽泣' },
                { symbol: '(｡•́ - •̀｡)', desc: '隐忍含泪' },
                { symbol: '(๑•́ ₃ •̀๑)ﾉﾞ', desc: '挥手委屈' }
            ]
        },
        {
            id: 'proud',
            name: '超得意 · 骄傲',
            emoji: '😎',
            badge: 15,
            items: [
                { symbol: '(๑•̀ㅂ•́)و✧', desc: '挥拳得意' },
                { symbol: '(￣▽￣)ノ', desc: '得意挥手' },
                { symbol: '(｀・ω・´)', desc: '自信叉腰' },
                { symbol: '(๑˃̵ᴗ˂̵)و', desc: '骄傲应援' },
                { symbol: '(★ω★)/', desc: '闪耀挥手' },
                { symbol: '(๑¯∀¯๑)', desc: '得意可爱' },
                { symbol: '(๑´ڡ๑)`', desc: '偷着乐' },
                { symbol: '(๑•̀ω•́๑)', desc: '神气满满' },
                { symbol: '(๑>◡<๑)', desc: '骄傲眯眼' },
                { symbol: '(๑˘︶˘๑)', desc: '满足得意' },
                { symbol: '(๑‾̀◡‾́๑)', desc: '眯眼炫耀' },
                { symbol: '(๑˃̶͈̀ロ˂̶͈́)و', desc: '激情打call' },
                { symbol: '(｀∀´)Ψ', desc: '邪魅得意' },
                { symbol: '(￣ω￣)', desc: '享受满足' },
                { symbol: '(๑•̀д•́๑)و', desc: '霸气挥拳' }
            ]
        },
        {
            id: 'speechless',
            name: '超无语 · 尴尬',
            emoji: '😶',
            badge: 15,
            items: [
                { symbol: '(¬_¬)', desc: '白眼' },
                { symbol: '(눈_눈)', desc: '死鱼眼' },
                { symbol: '(；￣Д￣)', desc: '满头黑线' },
                { symbol: '(╮°□°)╭', desc: '摊手无奈' },
                { symbol: '(－‸ლ)', desc: '扶额' },
                { symbol: '(￣ヘ￣)', desc: '不屑扭头' },
                { symbol: '(・_・;)', desc: '冒汗尴尬' },
                { symbol: '(゜o゜;', desc: '惊讶结巴' },
                { symbol: '(°ロ°)', desc: '惊掉下巴' },
                { symbol: '(⊙_⊙)', desc: '呆滞' },
                { symbol: '(；一_一)', desc: '生无可恋' },
                { symbol: '(¬‿¬)', desc: '狡黠' },
                { symbol: '(｀д´)', desc: '无语' },
                { symbol: '(；￣ェ￣)', desc: '尴尬冒汗' },
                { symbol: '(ㆆ_ㆆ)', desc: '黑线呆滞' }
            ]
        },
        {
            id: 'supersoft',
            name: '超可爱 · 软萌',
            emoji: '🐰',
            badge: 10,
            items: [
                { symbol: '(๑´∀๑)`', desc: '软萌可爱' },
                { symbol: '(๑˘͈ ᵕ ˘͈๑)', desc: '害羞可爱' },
                { symbol: '(´∀｀)♡', desc: '开心比心' },
                { symbol: '(๑•́₃•̀๑)', desc: '歪头可爱' },
                { symbol: '(｡•́‿•̀｡)', desc: '微笑软萌' },
                { symbol: '(๑˃́ꇴ˂̀๑)', desc: '欢喜雀跃' },
                { symbol: '(๑¯◡¯๑)', desc: '眯眼可爱' },
                { symbol: '(´｡• ᵕ •｡)`', desc: '抿嘴软萌' },
                { symbol: '(๑˘̩̩̩̩̩̩́˘̩̩̩̩̩̩̀๑)', desc: '嘟嘴可爱' },
                { symbol: '(๑ᵔ◡ᵔ๑)', desc: '眯眼满足' }
            ]
        },
        {
            id: 'tsundere',
            name: '得意 · 傲娇',
            emoji: '😼',
            badge: 10,
            items: [
                { symbol: '(￣ε(#￣)', desc: '傲娇哼' },
                { symbol: '(｀ε´)', desc: '傲娇噘嘴' },
                { symbol: '(¬‿¬ )', desc: '狡黠傲娇' },
                { symbol: '(๑˃̵ᴗ˂̵)و ✧', desc: '得意挥拳' },
                { symbol: '(★≧▽≦)', desc: '闪耀得意' },
                { symbol: '(๑•̀ㅂ•́)√', desc: '帅酷确认' },
                { symbol: '(｀∀´)Ψ', desc: '邪魅傲娇' },
                { symbol: '(￣▽￣)ゞ', desc: '得意敬礼' },
                { symbol: '(๑¯∀¯๑)ノ', desc: '得意挥手' },
                { symbol: '(๑˃̶͈̀ロ˂̶͈́)و', desc: '激情打call' }
            ]
        },
        {
            id: 'poor',
            name: '委屈 · 可怜',
            emoji: '🥀',
            badge: 10,
            items: [
                { symbol: '(´；ω；｀)', desc: '伤心大哭' },
                { symbol: '(｡•́︿•̀｡)', desc: '撅嘴含泪' },
                { symbol: '(๑•́︵•̀๑)', desc: '难过脸' },
                { symbol: '(˃̣̣̥ω˂̣̣̥)', desc: '哇哇哭' },
                { symbol: '(இ﹏இ)', desc: '泪眼婆娑' },
                { symbol: '(´;︵; )`', desc: '委屈撇嘴' },
                { symbol: '(๑ˊᯅˋ๑)', desc: '哭哭脸' },
                { symbol: '(｡ŏ﹏ŏ)', desc: '可怜巴巴' },
                { symbol: '(；ω；)', desc: '泪目' },
                { symbol: '(´-﹏-)`', desc: '无奈可怜' }
            ]
        },
        {
            id: 'embarrassed',
            name: '无语 · 尴尬',
            emoji: '🙃',
            badge: 10,
            items: [
                { symbol: '(；一_一)', desc: '生无可恋' },
                { symbol: '(￣ヘ￣)', desc: '不屑扭头' },
                { symbol: '(¬_¬)`', desc: '翻白眼' },
                { symbol: '(ㆆᴗㆆ)', desc: '黑线无语' },
                { symbol: '(；°Д°)', desc: '震惊尴尬' },
                { symbol: '(・へ・)', desc: '噘嘴无奈' },
                { symbol: '(；￣Д￣)', desc: '满头黑线' },
                { symbol: '(⊙ˍ⊙)', desc: '呆滞' },
                { symbol: '(；´Д)`', desc: '张大嘴尴尬' },
                { symbol: '(；ﾟдﾟ)', desc: '目瞪口呆' }
            ]
        },
        {
            id: 'weird',
            name: '沙雕 · 搞怪',
            emoji: '🤡',
            badge: 10,
            items: [
                { symbol: '( ͡° ͜ʖ ͡°)✧', desc: '坏笑眨眼' },
                { symbol: '(☞ﾟ∀ﾟ)☞', desc: '指点搞怪' },
                { symbol: '(ノ°ο°)ノ', desc: '疯狂摇晃' },
                { symbol: '(╬◣д◢)', desc: '愤怒搞怪' },
                { symbol: '(｀⌒´メ)', desc: '撇嘴嫌弃' },
                { symbol: '(・∀・)ノ', desc: '挥手傻乐' },
                { symbol: '(　ﾟдﾟ)', desc: '目瞪口呆' },
                { symbol: '(´▽｀)ノ', desc: '开心挥手' },
                { symbol: '( ͡~ ͜ʖ ͡°)', desc: '眯眼坏笑' },
                { symbol: '( ˙o˙ )', desc: '呆萌转圈' }
            ]
        },
        {
            id: 'action2',
            name: '特殊动作',
            emoji: '🎬',
            badge: 8,
            items: [
                { symbol: '(づ￣ ³￣)づ', desc: '亲一口' },
                { symbol: '(つ≧▽≦)つ', desc: '抱抱' },
                { symbol: '(ﾉ´ヮ)ﾉ*: ･ﾟ`', desc: '撒花' },
                { symbol: '(⌒▽⌒)☆', desc: '星星眼' },
                { symbol: '(╯‵□′)╯︵┻━┻', desc: '掀桌' },
                { symbol: '┬─┬ ノ( º _ ºノ)', desc: '扶桌' },
                { symbol: '( •_•)>⌐■-■', desc: '戴墨镜' },
                { symbol: '(⌐■_■)', desc: '戴好墨镜' }
            ]
        },
        {
            id: 'sleepy',
            name: '睡觉 · 困困',
            emoji: '😴',
            badge: 10,
            items: [
                { symbol: '(∪､∪)', desc: '眯眼困' },
                { symbol: '(｡sleepy｡)', desc: '睡眼惺忪' },
                { symbol: '(－_－) zzZ', desc: '犯困' },
                { symbol: '(￣ρ￣)..zzZ', desc: '打盹' },
                { symbol: '(´-ω-｀)', desc: '困困' },
                { symbol: '(｡-_-｡)', desc: '眼皮打架' },
                { symbol: '(∪.∪ )...zzz', desc: '昏昏欲睡' },
                { symbol: '(－ω－) zz', desc: '打瞌睡' },
                { symbol: '(｡´-ω-｀｡)', desc: '软绵绵困' },
                { symbol: '(￣o￣) zzZ', desc: '睡熟了' }
            ]
        },
        {
            id: 'hungry',
            name: '吃饭 · 馋',
            emoji: '🍜',
            badge: 10,
            items: [
                { symbol: '(๑´ڡ๑)`', desc: '馋嘴' },
                { symbol: '(￣﹃￣)', desc: '流口水' },
                { symbol: '(๑˃́ꇴ˂̀๑)', desc: '想吃眼' },
                { symbol: '(´∀｀)♡ 好吃', desc: '好吃' },
                { symbol: '(๑¯◡¯๑)', desc: '开心吃' },
                { symbol: '( ˘▽˘)っ♨', desc: '吹热气' },
                { symbol: '(๑˘̩̩̩̩̩̩́˘̩̩̩̩̩̩̀๑) 想吃', desc: '想吃' },
                { symbol: '(￣ω￣)', desc: '吃饱满足' },
                { symbol: '(๑•́₃•̀๑) 饿', desc: '饿' },
                { symbol: '(´▽｀)ノ♪ 真香', desc: '真香' }
            ]
        },
        {
            id: 'shy',
            name: '害羞 · 脸红',
            emoji: '😊',
            badge: 10,
            items: [
                { symbol: '(〃ω〃)', desc: '羞羞' },
                { symbol: '(´,,•ω•,,)♡', desc: '脸红心跳' },
                { symbol: '(*/ω＼*)', desc: '捂脸害羞' },
                { symbol: '(〃∇〃)', desc: '羞红了' },
                { symbol: '(´∀｀*)', desc: '害羞笑' },
                { symbol: '(๑˘͈ ᵕ ˘͈๑)', desc: '害羞可爱' },
                { symbol: '(⁄ ⁄•⁄ω⁄•⁄ ⁄)', desc: '扭捏害羞' },
                { symbol: '(｡•́‿•̀｡)', desc: '腼腆' },
                { symbol: '(๑´ㅂ๑)`', desc: '嘟嘴羞' },
                { symbol: '(≧◡≦)', desc: '害羞眯眼' }
            ]
        },
        {
            id: 'cheer',
            name: '加油 · 努力',
            emoji: '💪',
            badge: 10,
            items: [
                { symbol: '(๑•̀ㅂ•́)و✧', desc: '挥拳加油' },
                { symbol: '(ง •̀_•́)ง', desc: '斗志满满' },
                { symbol: '(๑˃̵ᴗ˂̵)و', desc: '握拳努力' },
                { symbol: '(•̀ᴗ•́)و', desc: '振作' },
                { symbol: '(๑•̀д•́๑)و', desc: '使劲加油' },
                { symbol: '(ง°∀°)ง', desc: '干劲十足' },
                { symbol: '(๑˃̶͈̀ロ˂̶͈́)و', desc: '激情冲' },
                { symbol: '(•̀ω•́ )✧', desc: '闪耀努力' },
                { symbol: '(๑¯∀¯๑)ノ', desc: '自信挥手' },
                { symbol: '(｀・ω・´)ゞ', desc: '敬礼认真' }
            ]
        },
        {
            id: 'giveup',
            name: '无奈 · 摆烂',
            emoji: '🛋️',
            badge: 10,
            items: [
                { symbol: '¯\\_(ツ)_/¯', desc: '耸肩摆烂' },
                { symbol: '(╮°□°)╭', desc: '摊手' },
                { symbol: '(－‸ლ)', desc: '扶额' },
                { symbol: '(￣ヘ￣)', desc: '无所谓' },
                { symbol: '(；一_一)', desc: '生无可恋' },
                { symbol: '(´-﹏-)`', desc: '无奈' },
                { symbol: '(´；ω；｀)', desc: '崩溃' },
                { symbol: '(｡ŏ_ŏ)', desc: '木然' },
                { symbol: '(；°Д°)', desc: '傻眼' },
                { symbol: '(・へ・)', desc: '噘嘴无奈' }
            ]
        },
        {
            id: 'furious',
            name: '生气 · 炸毛',
            emoji: '😤',
            badge: 10,
            items: [
                { symbol: '(╬ Ò ‸ Ó)', desc: '气鼓鼓' },
                { symbol: '(ﾒﾟ皿ﾟ)ﾒ', desc: '磨牙怒视' },
                { symbol: '(๑•̀д•́๑)', desc: '炸毛' },
                { symbol: '(｀⌒´メ)', desc: '撇嘴恼火' },
                { symbol: '(╬◣д◢)', desc: '愤怒' },
                { symbol: '(＃｀д´)ﾉ', desc: '暴怒' },
                { symbol: '(｀ε´)', desc: '气哼哼' },
                { symbol: '(￣^￣)', desc: '不爽' },
                { symbol: '(｀д´)', desc: '恼火' },
                { symbol: '(ノಠ益ಠ)ノ', desc: '怒掀桌' }
            ]
        },
        {
            id: 'heart',
            name: '比心 · 喜欢',
            emoji: '💖',
            badge: 10,
            items: [
                { symbol: '(´∀｀)♡', desc: '开心比心' },
                { symbol: '(｡♥‿♥｡)', desc: '含情脉脉' },
                { symbol: '(♡˙︶˙♡)', desc: '爱意满满' },
                { symbol: '(´,,•ω•,,)♡', desc: '心动' },
                { symbol: '(๑˘͈ ᵕ ˘͈๑)♡', desc: '害羞比心' },
                { symbol: '(✿◠‿◠)', desc: '温柔喜欢' },
                { symbol: '(◕‿◕✿)', desc: '带花喜欢' },
                { symbol: '(ᵔᴥᵔ)', desc: '憨憨喜欢' },
                { symbol: '(づ￣ ³￣)づ', desc: '亲亲' },
                { symbol: '(つ≧▽≦)つ', desc: '拥抱' }
            ]
        },
        {
            id: 'think',
            name: '思考 · 疑惑',
            emoji: '🤔',
            badge: 10,
            items: [
                { symbol: '(・_・?)', desc: '疑惑' },
                { symbol: '(？o？)', desc: '满脑问号' },
                { symbol: '(゜-゜)', desc: '歪头想' },
                { symbol: '(・∀・？)', desc: '不解' },
                { symbol: '(｡ŏ_ŏ)', desc: '思考中' },
                { symbol: '(⊙_⊙)?', desc: '震惊疑惑' },
                { symbol: '(；一_一)?', desc: '无语疑惑' },
                { symbol: '(´･_･)`', desc: '纠结' },
                { symbol: '(・へ・)?', desc: '不解歪头' },
                { symbol: '(￣ー￣)?', desc: '深思' }
            ]
        },
        {
            id: 'cool',
            name: '超酷',
            emoji: '😎',
            badge: 30,
            items: [
                { symbol: '(⌐■_■)', desc: '墨镜装酷' },
                { symbol: '(•_•) ( •_•)>⌐■-■ (⌐■_■)', desc: '墨镜三段' },
                { symbol: '(￣ー￣)', desc: '面无表情' },
                { symbol: '(｀⌒´)', desc: '酷酷撇嘴' },
                { symbol: '(¬‿¬)', desc: '狡黠酷' },
                { symbol: '( ͡° ͜ʖ ͡°)', desc: '经典坏笑' },
                { symbol: '(｀∀´)Ψ', desc: '邪魅酷' },
                { symbol: '(★ω★)', desc: '闪耀酷' },
                { symbol: '(￣ε(#￣)', desc: '傲娇酷' },
                { symbol: '(๑˃̵ᴗ˂̵)و', desc: '酷酷挥手' },
                { symbol: '(｀・ω・´)', desc: '自信酷' },
                { symbol: '(￣▽￣)ノ', desc: '酷酷拜拜' },
                { symbol: '(•̀ᴗ•́)و', desc: '酷酷加油' },
                { symbol: '(✧ω✧)', desc: '酷酷眨眼' },
                { symbol: '(｀ε´)', desc: '酷酷哼哼' },
                { symbol: '(￣ー￣)ゞ', desc: '冷酷敬礼' },
                { symbol: '(｀∀´)ノ', desc: '酷酷挥手' },
                { symbol: '(¬_¬ )', desc: '酷酷白眼' },
                { symbol: '( ͡° ͜ʖ ͡°)つ', desc: '坏笑递物' },
                { symbol: '(✧≖ ͜ʖ≖)', desc: '眯眼酷' },
                { symbol: '(｀⌒´メ)', desc: '酷酷撇嘴' },
                { symbol: '(￣ε￣)', desc: '闭眼享受' },
                { symbol: '(•̀ω•́)✧', desc: '闪耀酷' },
                { symbol: '(★ᴗ★)', desc: '星星眼酷' },
                { symbol: '(｀・ω・´)ノ', desc: '自信挥手' },
                { symbol: '(￣ω￣)ﾉ', desc: '惬意挥手' },
                { symbol: '(¬‿¬)つ', desc: '狡黠递物' },
                { symbol: '( ͡~ ͜ʖ ͡°)', desc: '眯眼坏笑' },
                { symbol: '(｀ε´)ノ', desc: '傲娇挥手' },
                { symbol: '(✧ω✧)ノ', desc: '酷炫挥手' }
            ]
        },
        {
            id: 'dumb2',
            name: '超傻',
            emoji: '🤤',
            badge: 30,
            items: [
                { symbol: '(⊙_⊙)', desc: '呆滞' },
                { symbol: '(゜o゜;', desc: '傻眼' },
                { symbol: '(°ロ°)', desc: '惊呆' },
                { symbol: '(・_・;)', desc: '冒汗尴尬' },
                { symbol: '(；一_一)', desc: '生无可恋' },
                { symbol: '(´･_･)`', desc: '呆懵' },
                { symbol: '(｡ŏ_ŏ)', desc: '傻乎乎' },
                { symbol: '(⊙ˍ⊙)', desc: '发呆' },
                { symbol: '(；°Д°)', desc: '傻住' },
                { symbol: '(￣o￣)', desc: '呆脸' },
                { symbol: '(・へ・)', desc: '懵懵' },
                { symbol: '(；ﾟдﾟ)', desc: '目瞪口呆' },
                { symbol: '(´-﹏-)`', desc: '无奈傻' },
                { symbol: '(；ω；)', desc: '傻哭' },
                { symbol: '(｡•́ - •̀｡)', desc: '傻傻的' },
                { symbol: '(⊙o⊙)', desc: '圆眼呆' },
                { symbol: '(・∀・；)', desc: '冒汗呆' },
                { symbol: '(´⊙ω⊙)`', desc: '囧傻' },
                { symbol: '(；゜o゜)', desc: '惊呆' },
                { symbol: '(゜Д゜；)', desc: '石傻' },
                { symbol: '(´･ω･)`', desc: '懵圈' },
                { symbol: '(｡´-ω-｀｡)', desc: '迷迷糊糊' },
                { symbol: '(⊙﹏⊙)', desc: '呆瓜' },
                { symbol: '(；´Д)`', desc: '张大嘴傻' },
                { symbol: '(￣△￣)', desc: '傻愣' },
                { symbol: '(・_・。)', desc: '呆若木鸡' },
                { symbol: '(；￣ー￣)', desc: '一脸懵' },
                { symbol: '(´；д；)`', desc: '傻哭' },
                { symbol: '(゜-゜；)', desc: '迷惑傻' },
                { symbol: '(；・_・)', desc: '茫然' }
            ]
        },
        {
            id: 'gentle',
            name: '超温柔',
            emoji: '🕊️',
            badge: 30,
            items: [
                { symbol: '(｡♥‿♥｡)', desc: '含情脉脉' },
                { symbol: '(´∀｀)♡', desc: '温柔比心' },
                { symbol: '(๑˘͈ ᵕ ˘͈๑)', desc: '温柔可爱' },
                { symbol: '(✿◠‿◠)', desc: '温柔微笑' },
                { symbol: '(◕‿◕✿)', desc: '带花温柔' },
                { symbol: '(ᵔᴥᵔ)', desc: '憨憨温柔' },
                { symbol: '(´｡• ᵕ •｡)`', desc: '抿嘴温柔' },
                { symbol: '(๑´ㅂ๑)`', desc: '嘟嘴温柔' },
                { symbol: '(｡･ω･｡)', desc: '乖乖温柔' },
                { symbol: '(♡˙︶˙♡)', desc: '温柔爱意' },
                { symbol: '(づ￣ ³￣)づ', desc: '温柔亲亲' },
                { symbol: '(つ≧▽≦)つ', desc: '温柔抱抱' },
                { symbol: '(´,,•ω•,,)♡', desc: '温柔心动' },
                { symbol: '(๑•ᴗ•๑)', desc: '温柔软萌' },
                { symbol: '(˘͈ ᵕ ˘͈๑)', desc: '温柔羞羞' },
                { symbol: '(´∀｀*)', desc: '温柔浅笑' },
                { symbol: '(๑˘︶˘๑)', desc: '温柔满足' },
                { symbol: '(｡•́‿•̀｡)', desc: '温柔微笑' },
                { symbol: '(˘͈ ᵕ ˘͈ )', desc: '眉眼弯弯' },
                { symbol: '(´,,•ω•,,)', desc: '温柔呢喃' },
                { symbol: '(๑ᵔ◡ᵔ๑)', desc: '温柔眯眼' },
                { symbol: '(✿´ ꒳  )`', desc: '捧花温柔' },
                { symbol: '(´∇｀)', desc: '温柔宠溺' },
                { symbol: '(๑´ڡ๑)`', desc: '温柔馋嘴' },
                { symbol: '(｡◕‿◕｡)', desc: '纯真温柔' },
                { symbol: '(♡ω♡)', desc: '爱心温柔' },
                { symbol: '(´｡•ω•｡)`', desc: '软糯温柔' },
                { symbol: '(๑˃́ꇴ˂̀๑)', desc: '欢喜温柔' },
                { symbol: '(ˊᗜˋ*)', desc: '甜甜温柔' },
                { symbol: '(´• ω •)`', desc: '轻软温柔' }
            ]
        },
        {
            id: 'exaggerate',
            name: '超夸张',
            emoji: '😱',
            badge: 30,
            items: [
                { symbol: '(╯°□°)╯︵ ┻━┻', desc: '暴怒掀桌' },
                { symbol: '(ノಠ益ಠ)ノ彡┻━┻', desc: '狂怒掀桌' },
                { symbol: '(╬ Ò ‸ Ó)', desc: '气炸' },
                { symbol: '(ﾒﾟ皿ﾟ)ﾒ', desc: '怒到磨牙' },
                { symbol: '(＃｀д´)ﾉ', desc: '暴走' },
                { symbol: '(╬◣д◢)', desc: '怒目圆睁' },
                { symbol: '(；д；)', desc: '泪崩' },
                { symbol: '(இ﹏இ)', desc: '嚎啕大哭' },
                { symbol: '(ㄒoㄒ)', desc: '大哭' },
                { symbol: '(T_T)', desc: '泪流满面' },
                { symbol: '(´；ω；｀)', desc: '伤心欲绝' },
                { symbol: '(ﾉ´ヮ)ﾉ*: ･ﾟ✧`', desc: '疯狂撒花' },
                { symbol: '(★≧▽≦)', desc: '闪耀狂喜' },
                { symbol: '(๑˃̶͈̀ロ˂̶͈́)و', desc: '激情澎湃' },
                { symbol: '( ͡° ͜ʖ ͡°)✧', desc: '坏笑搞怪' },
                { symbol: '(ノ°ο°)ノ', desc: '疯狂摇晃' },
                { symbol: '(＃°Д°)', desc: '大惊失色' },
                { symbol: '(；ﾟДﾟ)', desc: '目瞪口呆' },
                { symbol: '(இдஇ)', desc: '泪流成河' },
                { symbol: '(；д；)ノ', desc: '挥手痛哭' },
                { symbol: '(╯‵□′)╯', desc: '怒摔' },
                { symbol: '(╬ﾟдﾟ)', desc: '怒到极致' },
                { symbol: '(｀д´)ﾉ', desc: '暴怒挥手' },
                { symbol: '(；°ロ°)', desc: '惊到张大嘴' },
                { symbol: '(☆▽☆)', desc: '星星眼爆' },
                { symbol: '(≧∇≦)/', desc: '狂喜挥手' },
                { symbol: '(ﾉ≧∀≦)ﾉ', desc: '疯狂欢呼' },
                { symbol: '(★≧∀≦★)', desc: '闪耀狂喜' },
                { symbol: '(；∀；)', desc: '感动痛哭' },
                { symbol: '(ﾟдﾟ)！', desc: '震惊尖叫' }
            ]
        },
        {
            id: 'lazy',
            name: '超懒 · 躺平',
            emoji: '🦥',
            badge: 10,
            items: [
                { symbol: '(－_－)', desc: '懒得动' },
                { symbol: '(￣ρ￣)', desc: '瘫着' },
                { symbol: '(´-ω-｀)', desc: '犯困懒' },
                { symbol: '(∪､∪)', desc: '眯眼躺' },
                { symbol: '(｡-_-｡)', desc: '眼皮沉重' },
                { symbol: '(－ω－) zzZ', desc: '睡意来袭' },
                { symbol: '(￣o￣) ..zz', desc: '昏昏欲睡' },
                { symbol: '(´,_ゝ｀)', desc: '慵懒眯眼' },
                { symbol: '(；一_一)', desc: '生无可恋' },
                { symbol: '(￣ー￣) 不想动', desc: '不想动' }
            ]
        },
        {
            id: 'craving',
            name: '超馋 · 想吃',
            emoji: '🍕',
            badge: 10,
            items: [
                { symbol: '(￣﹃￣)', desc: '流口水' },
                { symbol: '(๑´ڡ๑)`', desc: '馋嘴' },
                { symbol: '(´∀｀) 好香', desc: '好香' },
                { symbol: '(๑˃́ꇴ˂̀๑)', desc: '想吃眼' },
                { symbol: '( ˘▽˘)っ♨', desc: '吹热气' },
                { symbol: '(๑¯◡¯๑) 真香', desc: '真香' },
                { symbol: '(￣ω￣) 饿了', desc: '饿了' },
                { symbol: '(๑•́₃•̀๑) 想吃', desc: '想吃' },
                { symbol: '(´▽｀)ノ♪', desc: '开心开吃' },
                { symbol: '(๑˘̩̩̩̩̩̩́˘̩̩̩̩̩̩̀๑)', desc: '馋馋的' }
            ]
        },
        {
            id: 'obedient',
            name: '超乖 · 听话',
            emoji: '🐑',
            badge: 10,
            items: [
                { symbol: '(๑•ᴗ•๑)', desc: '乖乖软萌' },
                { symbol: '(｡･ω･｡)', desc: '乖巧' },
                { symbol: '(´∀｀*)', desc: '听话微笑' },
                { symbol: '(๑´ㅂ๑)`', desc: '嘟嘴乖巧' },
                { symbol: '(˘͈ ᵕ ˘͈๑)', desc: '温顺乖巧' },
                { symbol: '(๑ᵔ◡ᵔ๑)', desc: '乖乖眯眼' },
                { symbol: '(｡◕‿◕｡)', desc: '纯真听话' },
                { symbol: '(´• ω •)`', desc: '轻软听话' },
                { symbol: '(๑˘︶˘๑)', desc: '满足听话' },
                { symbol: '(✿◠‿◠)', desc: '乖巧带花' }
            ]
        },
        {
            id: 'naughty',
            name: '超坏 · 调皮',
            emoji: '😜',
            badge: 10,
            items: [
                { symbol: '( ͡° ͜ʖ ͡°)', desc: '坏笑' },
                { symbol: '(¬‿¬)', desc: '狡黠' },
                { symbol: '(｀∀´)Ψ', desc: '调皮邪魅' },
                { symbol: '(☞ﾟ∀ﾟ)☞', desc: '指点搞怪' },
                { symbol: '( ͡~ ͜ʖ ͡°)', desc: '眯眼坏笑' },
                { symbol: '(✧≖ ͜ʖ≖)', desc: '狡诈眯眼' },
                { symbol: '(￣ε(#￣)', desc: '傲娇调皮' },
                { symbol: '(｀ε´)', desc: '哼哼调皮' },
                { symbol: '(¬_¬)', desc: '白眼调皮' },
                { symbol: '( ͡°ω ͡°)', desc: '暧昧坏笑' }
            ]
        },
        {
            id: 'nervous',
            name: '超慌 · 紧张',
            emoji: '😰',
            badge: 10,
            items: [
                { symbol: '(；゜o゜)', desc: '惊慌' },
                { symbol: '(゜Д゜；)', desc: '惊呆' },
                { symbol: '(；°Д°)', desc: '吓到' },
                { symbol: '(´⊙ω⊙)`', desc: '慌张' },
                { symbol: '(；ﾟдﾟ)', desc: '目瞪口呆' },
                { symbol: '(；一_一)', desc: '紧张冒汗' },
                { symbol: '(´；д；)`', desc: '慌到哭' },
                { symbol: '(；ω；)', desc: '紧张泪目' },
                { symbol: '(｡ŏ_ŏ)', desc: '慌慌张张' },
                { symbol: '(；´Д)`', desc: '张大嘴慌' }
            ]
        },
        {
            id: 'satisfied',
            name: '超满足 · 幸福',
            emoji: '😍',
            badge: 10,
            items: [
                { symbol: '(´∀｀)♡', desc: '幸福比心' },
                { symbol: '(๑˘͈ ᵕ ˘͈๑)', desc: '幸福满足' },
                { symbol: '(｡♥‿♥｡)', desc: '满心欢喜' },
                { symbol: '(♡˙︶˙♡)', desc: '甜蜜幸福' },
                { symbol: '(´｡• ᵕ •｡)`', desc: '幸福抿嘴' },
                { symbol: '(๑´ڡ๑)`', desc: '满足馋嘴' },
                { symbol: '(ˊᗜˋ*)', desc: '甜甜幸福' },
                { symbol: '(´∇｀)', desc: '幸福宠溺' },
                { symbol: '(๑˘︶˘๑)', desc: '满足开心' },
                { symbol: '(´,,•ω•,,)♡', desc: '幸福心动' }
            ]
        },
        {
            id: 'petrified',
            name: '超震惊 · 石化',
            emoji: '🧊',
            badge: 10,
            items: [
                { symbol: '(⊙_⊙)', desc: '石化' },
                { symbol: '(°ロ°)', desc: '惊掉下巴' },
                { symbol: '(゜o゜;', desc: '傻眼' },
                { symbol: '(；°ロ°)', desc: '惊到张嘴' },
                { symbol: '(＃°Д°)', desc: '大惊' },
                { symbol: '(；ﾟДﾟ)', desc: '震惊' },
                { symbol: '(இдஇ)', desc: '震惊泪目' },
                { symbol: '(´⊙ω⊙)`', desc: '呆滞石化' },
                { symbol: '(・_・;)', desc: '冒汗石化' },
                { symbol: '(⊙ˍ⊙)', desc: '石化了' }
            ]
        },
        {
            id: 'sleepy2',
            name: '超困 · 想睡',
            emoji: '🥱',
            badge: 10,
            items: [
                { symbol: '(－_－) zzZ', desc: '困到眯眼' },
                { symbol: '(￣ρ￣)..zz', desc: '眼皮打架' },
                { symbol: '(´-ω-｀)', desc: '哈欠连天' },
                { symbol: '(∪､∪)', desc: '困困眯眼' },
                { symbol: '(｡-_-｡)', desc: '昏昏欲睡' },
                { symbol: '(－ω－) 好困', desc: '好困' },
                { symbol: '(￣o￣) zzZ', desc: '睡意沉沉' },
                { symbol: '(´,_ゝ｀)', desc: '困到瘫' },
                { symbol: '(；一_一) 撑不住了', desc: '撑不住了' },
                { symbol: '(｡´-ω-｀｡)', desc: '软绵绵困' }
            ]
        },
        {
            id: 'tsundere2',
            name: '超傲娇',
            emoji: '🐱',
            badge: 10,
            items: [
                { symbol: '(￣^￣)', desc: '傲娇哼' },
                { symbol: '(｀ε´)', desc: '傲娇噘嘴' },
                { symbol: '(￣ε(#￣)', desc: '傲娇脸' },
                { symbol: '(¬_¬)', desc: '傲娇白眼' },
                { symbol: '(｀д´)', desc: '傲娇恼' },
                { symbol: '(￣ー￣)', desc: '面无表情' },
                { symbol: '(´-ω-｀)', desc: '傲娇困' },
                { symbol: '(；一_一)', desc: '傲娇无语' },
                { symbol: '(￣ヘ￣)', desc: '傲娇扭头' },
                { symbol: '(｀⌒´)', desc: '傲娇撇嘴' }
            ]
        },
        {
            id: 'expect',
            name: '超期待 · 期待ing',
            emoji: '✨',
            badge: 10,
            items: [
                { symbol: '(★ω★)', desc: '星光期待' },
                { symbol: '(✧ω✧)', desc: '闪闪期待' },
                { symbol: '(☆▽☆)', desc: '星星眼' },
                { symbol: '(≧∇≦)/', desc: '欢呼期待' },
                { symbol: '(ﾉ≧∀≦)ﾉ', desc: '狂喜期待' },
                { symbol: '(๑˃̶͈̀ロ˂̶͈́)و', desc: '激情期待' },
                { symbol: '(´∀｀) 好期待', desc: '好期待' },
                { symbol: '(๑¯∀¯๑)', desc: '得意期待' },
                { symbol: '(★≧▽≦)', desc: '闪耀期待' },
                { symbol: '(⌒▽⌒)☆', desc: '星星期待' }
            ]
        },
        {
            id: 'giveup2',
            name: '超无奈 · 摆烂中',
            emoji: '🥀',
            badge: 10,
            items: [
                { symbol: '¯\\_(ツ)_/¯', desc: '耸肩摆烂' },
                { symbol: '(╮°□°)╭', desc: '摊手' },
                { symbol: '(－‸ლ)', desc: '扶额' },
                { symbol: '(￣ヘ￣)', desc: '无所谓' },
                { symbol: '(；一_一)', desc: '生无可恋' },
                { symbol: '(´-﹏-)`', desc: '无奈' },
                { symbol: '(・へ・)', desc: '噘嘴无奈' },
                { symbol: '(´；ω；｀)', desc: '崩溃' },
                { symbol: '(｡ŏ_ŏ)', desc: '木然' },
                { symbol: '(；°Д°)', desc: '傻眼' }
            ]
        },
        {
            id: 'clingy',
            name: '超粘人 · 求关注',
            emoji: '🫶',
            badge: 10,
            items: [
                { symbol: '(づ￣ ³￣)づ', desc: '要亲亲' },
                { symbol: '(つ≧▽≦)つ', desc: '要抱抱' },
                { symbol: '(｡♥‿♥｡)', desc: '含情脉脉' },
                { symbol: '(´∀｀)♡', desc: '开心比心' },
                { symbol: '(๑•́ ₃ •̀๑) 看我', desc: '看我' },
                { symbol: '(ﾉ´ヮ)ﾉ*: ･ﾟ`', desc: '撒花求关注' },
                { symbol: '(๑˘͈ ᵕ ˘͈๑)', desc: '粘人可爱' },
                { symbol: '(´,,•ω•,,)♡', desc: '心动粘人' },
                { symbol: '(つ´∀｀)つ', desc: '抱紧紧' },
                { symbol: '(｡•́︿•̀｡) 理我', desc: '理我' }
            ]
        },
        {
            id: 'drama',
            name: '超戏精 · 夸张演技',
            emoji: '🎭',
            badge: 10,
            items: [
                { symbol: '(╯°□°)╯︵ ┻━┻', desc: '暴怒掀桌' },
                { symbol: '(ノಠ益ಠ)ノ彡┻━┻', desc: '狂怒掀桌' },
                { symbol: '(；д；)', desc: '泪崩' },
                { symbol: '(இ﹏இ)', desc: '嚎啕大哭' },
                { symbol: '(＃°Д°)', desc: '大惊' },
                { symbol: '(；ﾟДﾟ)', desc: '震惊' },
                { symbol: '(╬ Ò ‸ Ó)', desc: '气炸' },
                { symbol: '(ﾒﾟ皿ﾟ)ﾒ', desc: '怒到磨牙' },
                { symbol: '(ﾉ°ο°)ノ', desc: '疯狂摇晃' },
                { symbol: '(；∀；)', desc: '感动痛哭' }
            ]
        },
        {
            id: 'calm',
            name: '超淡定 · 面无表情',
            emoji: '🧘',
            badge: 10,
            items: [
                { symbol: '(￣ー￣)', desc: '面无表情' },
                { symbol: '(－_－)', desc: '无感' },
                { symbol: '(・_・)', desc: '平淡' },
                { symbol: '(´-_ゝ｀)', desc: '淡定眯眼' },
                { symbol: '(￣ω￣)', desc: '无所谓' },
                { symbol: '(；一_一)', desc: '淡看一切' },
                { symbol: '(´･_･)`', desc: '淡定皱眉' },
                { symbol: '(・へ・)', desc: '淡定噘嘴' },
                { symbol: '(￣ρ￣)', desc: '淡定瘫' },
                { symbol: '(´-ω-｀)', desc: '淡定困' }
            ]
        },
        {
            id: 'socialanxiety',
            name: '超社恐 · 想消失',
            emoji: '🫥',
            badge: 10,
            items: [
                { symbol: '(´；ω；｀)', desc: '社恐想哭' },
                { symbol: '(；一_一)', desc: '不敢直视' },
                { symbol: '(｡ŏ_ŏ)', desc: '躲闪' },
                { symbol: '(´-﹏-)`', desc: '想溜走' },
                { symbol: '(；°Д°)', desc: '紧张到呆' },
                { symbol: '(・へ・)', desc: '沉默' },
                { symbol: '(´･_･)`', desc: '低头纠结' },
                { symbol: '(；ω；)', desc: '想哭' },
                { symbol: '(๑•́ ₃ •̀๑) 别看我', desc: '别看我' },
                { symbol: '(；´Д)`', desc: '张大嘴尴尬' }
            ]
        },
        {
            id: 'socialbutterfly',
            name: '超社牛 · 谁都敢聊',
            emoji: '🗣️',
            badge: 10,
            items: [
                { symbol: '(☞ﾟ∀ﾟ)☞', desc: '指点开聊' },
                { symbol: '(｀・ω・´)', desc: '自信搭话' },
                { symbol: '(★ω★)/', desc: '热情挥手' },
                { symbol: '(๑•̀ㅂ•́)و✧', desc: '活力开聊' },
                { symbol: '(￣▽￣)ノ', desc: '自来熟' },
                { symbol: '(ﾉ´ヮ)ﾉ*: ･ﾟ`', desc: '撒花开聊' },
                { symbol: '(•̀ᴗ•́)و', desc: '健谈' },
                { symbol: '(✧ω✧)', desc: '星星眼搭话' },
                { symbol: '(｀∀´)Ψ', desc: '社交达人' },
                { symbol: '(๑˃̵ᴗ˂̵)و', desc: '热情互动' }
            ]
        },
        {
            id: 'hesitate',
            name: '超纠结 · 选择困难',
            emoji: '🤔',
            badge: 10,
            items: [
                { symbol: '(・_・?)', desc: '纠结' },
                { symbol: '(？o？)', desc: '满脑问号' },
                { symbol: '(´･_･)`', desc: '皱眉纠结' },
                { symbol: '(；一_一)?', desc: '无语纠结' },
                { symbol: '(⊙_⊙)?', desc: '震惊纠结' },
                { symbol: '(・へ・)?', desc: '歪头纠结' },
                { symbol: '(｡ŏ_ŏ)?', desc: '犯难' },
                { symbol: '(；°Д°)?', desc: '彻底纠结' },
                { symbol: '(´-﹏-) 选哪个`', desc: '选哪个' },
                { symbol: '(・∀・？)', desc: '选择困难' }
            ]
        },
        {
            id: 'touched',
            name: '超感动 · 想哭',
            emoji: '🥹',
            badge: 10,
            items: [
                { symbol: '(´；ω；｀)', desc: '感动落泪' },
                { symbol: '(；д；)', desc: '泪目' },
                { symbol: '(இ﹏இ)', desc: '感动哭' },
                { symbol: '(T_T)', desc: '泪流满面' },
                { symbol: '(´∀｀)♡', desc: '感动比心' },
                { symbol: '(｡♥‿♥｡)', desc: '满心感动' },
                { symbol: '(๑˘͈ ᵕ ˘͈๑)', desc: '感动害羞' },
                { symbol: '(；∀；)', desc: '感动爆哭' },
                { symbol: '(´｡• ᵕ •｡)`', desc: '感动抿嘴' },
                { symbol: '(ˊᗜˋ*) 好感动', desc: '好感动' }
            ]
        },
        {
            id: 'perfunctory',
            name: '超敷衍 · 随便吧',
            emoji: '🙄',
            badge: 10,
            items: [
                { symbol: '¯\\_(ツ)_/¯', desc: '随便啦' },
                { symbol: '(￣ー￣)', desc: '敷衍脸' },
                { symbol: '(－_－)', desc: '无所谓' },
                { symbol: '(・_・)', desc: '平淡' },
                { symbol: '(´-_ゝ｀)', desc: '爱答不理' },
                { symbol: '(；一_一)', desc: '敷衍无语' },
                { symbol: '(￣ω￣)', desc: '都行' },
                { symbol: '(・へ・)', desc: '随便吧' },
                { symbol: '(´･_･)`', desc: '不耐烦' },
                { symbol: '(￣ρ￣) 都行', desc: '都行' }
            ]
        },
        {
            id: 'focused',
            name: '超认真 · 专注中',
            emoji: '🎯',
            badge: 10,
            items: [
                { symbol: '(｀・ω・´)', desc: '认真' },
                { symbol: '(•̀ᴗ•́)', desc: '专注' },
                { symbol: '(๑•̀ㅂ•́)', desc: '认真努力' },
                { symbol: '(￣ー￣)', desc: '严肃专注' },
                { symbol: '(´-_ゝ｀)', desc: '专注眯眼' },
                { symbol: '(・∀・)', desc: '投入' },
                { symbol: '(｀д´)', desc: '认真较劲' },
                { symbol: '(¬_¬)', desc: '认真盯' },
                { symbol: '(๑˃̵ᴗ˂̵)', desc: '认真加油' },
                { symbol: '(•̀ω•́)', desc: '专注状态' }
            ]
        },
        {
            id: 'excited',
            name: '超兴奋 · 嗨起来',
            emoji: '🎉',
            badge: 10,
            items: [
                { symbol: '(ﾉ´ヮ)ﾉ*: ･ﾟ✧`', desc: '疯狂撒花' },
                { symbol: '(≧∇≦)/', desc: '欢呼' },
                { symbol: '(★≧▽≦)', desc: '闪耀狂喜' },
                { symbol: '(๑˃̶͈̀ロ˂̶͈́)و', desc: '激情澎湃' },
                { symbol: '(☆▽☆)', desc: '星星眼爆' },
                { symbol: '(ﾉ≧∀≦)ﾉ', desc: '疯狂欢呼' },
                { symbol: '(✧ω✧)', desc: '闪亮兴奋' },
                { symbol: '(★ω★)/', desc: '星光挥手' },
                { symbol: '(⌒▽⌒)☆', desc: '星星期待' },
                { symbol: '(๑¯∀¯๑)ノ', desc: '得意挥手' }
            ]
        },
        {
            id: 'slacking',
            name: '超摸鱼 · 划水中',
            emoji: '🐟',
            badge: 10,
            items: [
                { symbol: '(－_－)', desc: '摸鱼脸' },
                { symbol: '(￣ρ￣)', desc: '瘫着划水' },
                { symbol: '(´-ω-｀)', desc: '悠哉摸鱼' },
                { symbol: '(；一_一)', desc: '假装发呆' },
                { symbol: '(￣ー￣) 假装在忙', desc: '假装在忙' },
                { symbol: '(・_・)', desc: '划水中' },
                { symbol: '(´,_ゝ｀)', desc: '慵懒摸鱼' },
                { symbol: '(￣ω￣)', desc: '悠闲' },
                { symbol: '(－ω－)', desc: '走神' },
                { symbol: '(｡-_-｡) 没人发现吧', desc: '没人发现吧' }
            ]
        },
        {
            id: 'ruminate',
            name: '超内耗 · 自我攻击',
            emoji: '🌀',
            badge: 10,
            items: [
                { symbol: '(´；ω；｀)', desc: '内耗想哭' },
                { symbol: '(；д；)', desc: '自责泪目' },
                { symbol: '(´-﹏-)`', desc: '自我怀疑' },
                { symbol: '(๑•́ ₃ •̀๑)', desc: '委屈内耗' },
                { symbol: '(｡•́︿•̀｡)', desc: '难受' },
                { symbol: '(；一_一)', desc: '自我否定' },
                { symbol: '(´･_･)`', desc: '反复纠结' },
                { symbol: '(இ﹏இ)', desc: '内耗爆哭' },
                { symbol: '(；ω；)', desc: '焦虑' },
                { symbol: '(´；д；) 我是不是很差`', desc: '我是不是很差' }
            ]
        },
        {
            id: 'fullgiveup',
            name: '超摆烂 · 彻底躺平',
            emoji: '🛏️',
            badge: 10,
            items: [
                { symbol: '¯\\_(ツ)_/¯', desc: '彻底摆烂' },
                { symbol: '(╮°□°)╭', desc: '躺平摊手' },
                { symbol: '(－‸ლ)', desc: '放弃扶额' },
                { symbol: '(￣ヘ￣)', desc: '不想管' },
                { symbol: '(；一_一) 算了', desc: '算了' },
                { symbol: '(´-﹏-)`', desc: '无奈躺平' },
                { symbol: '(・へ・)', desc: '随它吧' },
                { symbol: '(￣ρ￣)', desc: '彻底瘫' },
                { symbol: '(－_－)', desc: '佛系' },
                { symbol: '(´,_ゝ｀) 不干了', desc: '不干了' }
            ]
        },
        {
            id: 'fakework',
            name: '超装忙 · 表演式努力',
            emoji: '💼',
            badge: 10,
            items: [
                { symbol: '(｀・ω・´)', desc: '装认真' },
                { symbol: '(•̀ᴗ•́)و', desc: '表演努力' },
                { symbol: '(๑•̀ㅂ•́)', desc: '假装专注' },
                { symbol: '(￣ー￣)', desc: '装严肃' },
                { symbol: '(´-_ゝ｀) 我很忙', desc: '我很忙' },
                { symbol: '(・∀・)', desc: '装投入' },
                { symbol: '(｀д´)', desc: '假装较劲' },
                { symbol: '(¬_¬)', desc: '装认真盯' },
                { symbol: '(๑˃̵ᴗ˂̵)و', desc: '表演奋斗' },
                { symbol: '(•̀ω•́) 认真工作中', desc: '认真工作中' }
            ]
        },
        {
            id: 'breakdown',
            name: '超破防 · 瞬间崩溃',
            emoji: '💥',
            badge: 10,
            items: [
                { symbol: '(；д；)', desc: '瞬间泪崩' },
                { symbol: '(இ﹏இ)', desc: '崩溃大哭' },
                { symbol: '(T_T)', desc: '破防泪流' },
                { symbol: '(´；ω；｀)', desc: '心态崩了' },
                { symbol: '(；∀；)', desc: '崩溃爆哭' },
                { symbol: '(＃°Д°)', desc: '大惊崩溃' },
                { symbol: '(；ﾟДﾟ)', desc: '瞬间呆滞' },
                { symbol: '(╯°□°)╯︵ ┻━┻', desc: '崩溃掀桌' },
                { symbol: '(ノಠ益ಠ)ノ', desc: '狂怒破防' },
                { symbol: '(；°ロ°) 心态崩了', desc: '心态崩了' }
            ]
        },
        {
            id: 'neutral',
            name: '超端水 · 谁都不得罪',
            emoji: '⚖️',
            badge: 10,
            items: [
                { symbol: '(￣▽￣)ノ', desc: '和稀泥' },
                { symbol: '(・∀・)', desc: '都行都行' },
                { symbol: '(´∀｀)', desc: '无所谓' },
                { symbol: '(；一_一)', desc: '不表态' },
                { symbol: '(￣ー￣)', desc: '中立脸' },
                { symbol: '(・_・)', desc: '两边都行' },
                { symbol: '(´-_ゝ｀)', desc: '不站队' },
                { symbol: '(；°Д°) 都对', desc: '都对' },
                { symbol: '(・へ・)', desc: '都听你的' },
                { symbol: '(￣ω￣) 都可以', desc: '都可以' }
            ]
        },
        {
            id: 'stubborn',
            name: '超嘴硬 · 死不承认',
            emoji: '😤',
            badge: 10,
            items: [
                { symbol: '(￣^￣)', desc: '嘴硬哼' },
                { symbol: '(｀ε´)', desc: '死鸭子嘴硬' },
                { symbol: '(¬_¬)', desc: '死不承认' },
                { symbol: '(｀д´)', desc: '嘴硬恼' },
                { symbol: '(￣ー￣)', desc: '硬撑' },
                { symbol: '(´-ω-｀)', desc: '嘴硬装没事' },
                { symbol: '(；一_一) 才没有', desc: '才没有' },
                { symbol: '(￣ヘ￣)', desc: '死不松口' },
                { symbol: '(｀⌒´)', desc: '倔强撇嘴' },
                { symbol: '(¬‿¬) 我才不在乎', desc: '我才不在乎' }
            ]
        }
    ],

    // 底部 4 个特性卡
    features: [
        {
            icon: '📋',
            iconClass: 'feat-blue',
            title: '一键复制',
            desc: '点击任意颜文字 即可复制到剪贴板'
        },
        {
            icon: '🔍',
            iconClass: 'feat-green',
            title: '分类清晰',
            desc: '14 类精心整理 快速找到想要的表情'
        },
        {
            icon: '⭐',
            iconClass: 'feat-purple',
            title: '持续更新',
            desc: '更多颜文字持续收录中 欢迎收藏本站'
        },
        {
            icon: '❤️',
            iconClass: 'feat-orange',
            title: '轻松使用',
            desc: '简洁界面，无需学习 让表达更有趣'
        }
    ],

    // 页脚
    footer: '颜文字图鉴 · 让表达更有趣'
};
