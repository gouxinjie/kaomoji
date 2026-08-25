/**
 * 颜文字图鉴 · 数据源
 * 24 大类、约 100+ 个颜文字
 * 通过 window.KAOMOJI_DATA 暴露给页面
 */
window.KAOMOJI_DATA = {
    // 头部信息
    meta: {
        title: '颜文字图鉴',
        icon: '(⊙_⊙)',
        subtitle: '从嘲讽到撒娇，从极简到沙雕 · 点击颜文字即可复制',
        totalLabel: '点击 复制',
        totalCount: 24
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
