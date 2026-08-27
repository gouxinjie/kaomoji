/**
 * 颜文字图鉴 · 渲染与交互逻辑
 * 数据来源：window.KAOMOJI_DATA （见 kaomoji.js）
 */

(function () {
    'use strict';

    // 六个独立数据源：颜文字（kaomoji.js）、Emoji 图标（icons.js）、特殊符号（symbols.js）、汉字部首（radicals.js）、花字变体（fancy.js）、装饰长串（deco.js）
    const KAOMOJI = window.KAOMOJI_DATA;
    const ICONS = window.KAOMOJI_ICONS;
    const SYMBOLS = window.KAOMOJI_SYMBOLS;
    const RADICALS = window.KAOMOJI_RADICALS;
    const FANCY = window.KAOMOJI_FANCY;
    const DECO = window.KAOMOJI_DECO;
    const DATA_SOURCES = { kaomoji: KAOMOJI, icons: ICONS, symbols: SYMBOLS, radicals: RADICALS, fancy: FANCY, deco: DECO };
    var missing = Object.keys(DATA_SOURCES).filter(function (key) { return !DATA_SOURCES[key]; });
    if (missing.length) {
        console.error('[kaomoji] 未找到数据源：' + missing.join(', ') + '，请先引入对应数据脚本');
        return;
    }

    // 当前激活的 Tab：'kaomoji'（颜文字）| 'icons'（图标）| 'symbols'（特殊符号）| 'radicals'（汉字部首）| 'fancy'（花字变体）| 'deco'（装饰长串）
    let activeTab = 'kaomoji';

    // 返回当前 Tab 对应的数据源
    function currentData() {
        return DATA_SOURCES[activeTab] || KAOMOJI;
    }

    const COLLAPSE_THRESHOLD = 6; // 超过 6 条显示「查看更多」
    const COPY_ICON_SVG = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 1H4a2 2 0 0 0-2 2v14h2V3h12V1zm3 4H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm0 16H8V7h11v14z"/></svg>';

    /* ---------------- 工具 ---------------- */
    // 统一转义工具：覆盖 HTML 与属性上下文（含 " 与 '）
    function escapeHtml(str) {
        if (str == null) return '';
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    /* ---------------- 头部 ---------------- */
    // 各板块统一的"统计四件套"：用于头部 hero 卡片展示
    // 大分类 = 6 个 Tab；子分类 / 精选灵感 = 各数据源 categories / items 实际累加
    const HERO_STATS = [
        { num: '6',  label: '大分类',  desc: '满足不同场景需求',  icon: 'grid',     tone: 'purple' },
        { num: '136',label: '子分类',  desc: '精细分类快速查找',  icon: 'diamond',  tone: 'blue'   },
        { num: '2240+', label: '精选灵感', desc: '持续更新的灵感库', icon: 'bolt',    tone: 'green'  },
        { num: '1 键', label: '一键复制', desc: '快速使用不繁琐',   icon: 'copy',     tone: 'orange' }
    ];

    // 装饰用颜文字 / 表情：固定文案，呼应"键盘打不出的灵感"主题
    const HERO_FLOATS = [
        { text: '(°▽°)/', cls: 'float-2' },
        { text: '✦',       cls: 'float-3' },
        { text: '★',       cls: 'float-4' },
        { text: '✿',       cls: 'float-6' },
        { text: '(ˆ▽ˆ)',  cls: 'float-7' },
        { text: '(⊙▽⊙)',  cls: 'float-8' }
    ];

    // 头部 chip：横排展示站内可寻找的灵感类型，纯展示，不承担 Tab 切换职责
    // tone 字段决定 chip 的配色（与 .hero-chip-{tone} 一一对应）
    const HERO_CHIPS = [
        { text: '颜文字',  emoji: '◕‿◕', tone: 'pink'   },
        { text: '表情符号', emoji: '😊',  tone: 'orange' },
        { text: '箭头符号', emoji: '→',   tone: 'blue'   },
        { text: '序号编号', emoji: '①',   tone: 'indigo' },
        { text: '数学符号', emoji: '√',   tone: 'green'  },
        { text: '货币符号', emoji: '$',   tone: 'lime'   },
        { text: '花字变体', emoji: 'ⓐ',  tone: 'pink' },
        { text: '装饰长串', emoji: '✦',   tone: 'green' },
    ];

    // Tab 切换：渲染到 site-header 内部，与搜索框同行展示
    const HEADER_TABS = [
        { id: 'kaomoji',  label: '颜文字', icon: '(◕‿◕)' },
        { id: 'icons',    label: 'Emoji', icon: '😊' },
        { id: 'symbols',  label: '符号',   icon: '★' },
        { id: 'radicals', label: '部首',   icon: '艹' },
        { id: 'fancy',    label: '花字变体',   icon: 'ⓐ' },
        { id: 'deco',     label: '装饰长串',   icon: '✦' }
    ];

    function renderHeader() {
        const header = document.getElementById('site-header');
        if (!header) return;
        const m = currentData().meta;

        // 标题分段："键盘打不出的" + "灵感"（灵感带紫色波浪下划线）
        const titleLeft = '键盘打不出的';
        const titleAccent = '灵感';

        // 头部顶部：左 brand，右信息胶囊
        const heroTop = `
            <div class="hero-top">
                <div class="brand">
                    <span class="brand-icon">${escapeHtml(m.icon)}</span>
                    <div class="brand-text">
                        <span class="brand-title">${escapeHtml(m.title)}</span>
                        <span class="brand-sub">灵感集合站</span>
                    </div>
                </div>
                <div class="header-hint">
                    <span class="info-icon" aria-hidden="true">i</span>
                    <span>${escapeHtml(m.totalLabel)}，都在这里找到 ✦</span>
                </div>
                <div class="repo-links" aria-label="在代码仓库查看">
                    <a class="repo-link" href="https://github.com/gouxinjie/kaomoji" target="_blank" rel="noopener" title="在 GitHub 上查看" aria-label="GitHub">
                        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.39 1.24-3.23-.12-.3-.54-1.53.12-3.19 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.89.12 3.19.77.84 1.23 1.92 1.23 3.23 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.58A12 12 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z"/></svg>
                    </a>
                </div>
            </div>
        `;

        // 大标题区：左右装饰颜文字 + 主标题（含波浪下划线）
        const heroTitle = `
            <div class="hero-title-wrap">
                <span class="hero-deco hero-deco-left" aria-hidden="true">(◕‿◕)</span>
                <h1 class="hero-title">
                    <span class="hero-title-text">${titleLeft}</span><span class="hero-title-accent">${titleAccent}<span class="wavy-underline" aria-hidden="true"></span></span>
                </h1>
                <span class="hero-deco hero-deco-right" aria-hidden="true">(ˆ▽ˆ)</span>
            </div>
        `;

        // 副描述：分行排版，结尾用 (→_→) 颜文字呼应
        const heroDesc = `
            <p class="hero-desc">
                颜文字、表情符号、特殊符号、汉字部首、花字变体、装饰长串……<span class="hero-desc-br"></span>你想要的灵感（→_→）都在这里
            </p>
        `;

        // 头部 chip 行：纯展示的灵感类型标签
        const heroChips = `
            <div class="hero-chips" aria-label="灵感分类速览">
                ${HERO_CHIPS.map(c => `
                    <span class="hero-chip hero-chip-${c.tone}">
                        <span class="hero-chip-emoji" aria-hidden="true">${escapeHtml(c.emoji)}</span>
                        <span>${escapeHtml(c.text)}</span>
                    </span>
                `).join('')}
            </div>
        `;

        // 搜索 + Tab 切换行：搜索框放左侧，Tab 按钮在右
        const heroSearchRow = `
            <div class="hero-search-row">
                <div class="hero-search-box">
                    <svg class="search-icon" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 1 0-.7.7l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0A4.5 4.5 0 1 1 14 9.5 4.5 4.5 0 0 1 9.5 14z"/>
                    </svg>
                    <input type="text" id="search-input" class="search-input"
                        placeholder="${searchPlaceholder()}"
                        aria-label="${searchPlaceholder()}" autocomplete="off">
                    <button type="button" class="search-clear" id="search-clear" aria-label="清除搜索" hidden>✕</button>
                </div>
                <nav class="tabs" id="tabs" role="tablist" aria-label="内容切换">
                    ${HEADER_TABS.map(t => `
                        <button type="button" class="tab-btn ${activeTab === t.id ? 'active' : ''}"
                            role="tab" aria-selected="${activeTab === t.id}"
                            data-tab="${t.id}">
                            <span class="tab-icon">${escapeHtml(t.icon)}</span>
                            <span>${escapeHtml(t.label)}</span>
                        </button>
                    `).join('')}
                </nav>
            </div>
        `;

        // 数据统计行：4 张大卡片
        const heroStats = `
            <div class="hero-stats">
                ${HERO_STATS.map(s => `
                    <div class="stat-card stat-${s.tone}">
                        <span class="stat-icon stat-icon-${s.icon}" aria-hidden="true">
                            ${statIconSvg(s.icon)}
                        </span>
                        <div class="stat-text">
                            <div class="stat-num">${s.num}</div>
                            <div class="stat-label">${s.label}</div>
                            <div class="stat-desc">${s.desc}</div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;

        // 浮动装饰颜文字
        const heroFloats = HERO_FLOATS.map(f => `
            <span class="hero-float ${f.cls}" aria-hidden="true">${f.text}</span>
        `).join('');

        header.innerHTML = `
            ${heroTop}
            ${heroTitle}
            ${heroDesc}
            ${heroChips}
            ${heroSearchRow}
            ${heroStats}
            ${heroFloats}
        `;

        // 头部内嵌的搜索 / Tab 交互必须在此处挂载，否则会丢事件
        bindHeaderInteractions();
    }

    // 渲染头部内的统计卡片右上角小图标 SVG
    function statIconSvg(kind) {
        switch (kind) {
            case 'grid':
                return '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>';
            case 'diamond':
                return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2 22 12 12 22 2 12 12 2z"/></svg>';
            case 'bolt':
                return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z"/></svg>';
            case 'copy':
            default:
                return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 1H4a2 2 0 0 0-2 2v14h2V3h12V1zm3 4H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm0 16H8V7h11v14z"/></svg>';
        }
    }

    // 头部内交互：搜索框输入/清除、Tab 切换
    function bindHeaderInteractions() {
        const input = document.getElementById('search-input');
        const clear = document.getElementById('search-clear');
        if (input) {
            let debounceTimer = null;
            input.addEventListener('input', function () {
                searchKeyword = this.value;
                if (clear) clear.hidden = !this.value;
                clearTimeout(debounceTimer);
                debounceTimer = setTimeout(renderGrid, 200);
            });
        }
        if (clear && input) {
            clear.addEventListener('click', function () {
                input.value = '';
                searchKeyword = '';
                this.hidden = true;
                input.focus();
                renderGrid();
            });
        }
        const tabs = document.getElementById('tabs');
        if (tabs) {
            tabs.querySelectorAll('.tab-btn').forEach(btn => {
                btn.addEventListener('click', function () {
                    const id = this.getAttribute('data-tab');
                    if (id === activeTab) return;
                    activeTab = id;
                    activeCategories = new Set(['all']);
                    searchKeyword = '';
                    const i = document.getElementById('search-input');
                    if (i) { i.value = ''; i.placeholder = searchPlaceholder(); }
                    const c = document.getElementById('search-clear');
                    if (c) c.hidden = true;
                    renderHeader();
                    renderSidebar();
                    renderGrid();
                });
            });
        }
    }

    /* ---------------- 状态 ---------------- */
    let activeCategories = new Set(['all']); // 当前筛选的分类 id 集合（多选）
    let searchKeyword = '';                  // 当前搜索关键词

    /* ---------------- Tab 切换 ---------------- */
    // Tab 按钮和搜索框现已嵌入到 site-header 中，由 renderHeader() 统一渲染，
    // 交互由 bindHeaderInteractions() 挂载。下面仅保留 placeholder / empty 文案。

    // 返回当前 Tab 的搜索框提示文案
    function searchPlaceholder() {
        if (activeTab === 'icons') return '搜索 Emoji、表情、图标…';
        if (activeTab === 'symbols') return '搜索箭头、爱心、数学符号…';
        if (activeTab === 'radicals') return '搜索汉字部首、偏旁…';
        if (activeTab === 'fancy') return '搜索带圈、带框、花体字母…';
        if (activeTab === 'deco') return '搜索分隔线、长串装饰…';
        return '搜索颜文字、符号、昵称等灵感…';
    }

    // 返回当前 Tab 空结果提示文案
    function emptyMessage() {
        if (activeTab === 'icons') return '没有找到匹配的图标';
        if (activeTab === 'symbols') return '没有找到匹配的符号';
        if (activeTab === 'radicals') return '没有找到匹配的部首';
        if (activeTab === 'fancy') return '没有找到匹配的花字';
        if (activeTab === 'deco') return '没有找到匹配的装饰';
        return '没有找到匹配的颜文字';
    }

    function filteredCategories() {
        const kw = searchKeyword.trim().toLowerCase();
        const allSelected = activeCategories.has('all');
        return currentData().categories.filter(cat => {
            // 分类筛选：多选（all 表示全选）
            if (!allSelected && !activeCategories.has(cat.id)) return false;
            // 关键词筛选：匹配分类名 / 符号 / 描述
            if (!kw) return true;
            if (cat.name.toLowerCase().includes(kw)) return true;
            return cat.items.some(item =>
                String(item.symbol).toLowerCase().includes(kw) ||
                String(item.desc || '').toLowerCase().includes(kw)
            );
        });
    }

    /* ---------------- 搜索框 ---------------- */
    // 搜索框由 renderHeader() 统一渲染到 site-header 内部，事件在 bindHeaderInteractions() 中绑定。

    /* ---------------- 侧边栏筛选（桌面折叠 + 移动端抽屉） ---------------- */
    const mqMobile = window.matchMedia('(max-width: 800px)'); // 缓存，避免重复创建
    let sidebarMask = null;  // 移动端抽屉遮罩
    let maskCloseTimer = null; // 遮罩关闭过渡定时器
    let maskVisible = false;   // 遮罩当前是否处于显示状态

    function isMobile() {
        return mqMobile.matches;
    }

    // 打开移动端抽屉
    function openSidebar() {
        const aside = document.getElementById('sidebar');
        if (!aside || !isMobile()) return;
        clearTimeout(maskCloseTimer);
        if (!sidebarMask) {
            sidebarMask = document.createElement('div');
            sidebarMask.className = 'sidebar-mask';
            sidebarMask.addEventListener('click', closeSidebar);
            document.body.appendChild(sidebarMask);
        }
        maskVisible = true;
        aside.classList.add('drawer-open');
        sidebarMask.classList.add('show');
        document.body.classList.add('no-scroll');
    }

    // 关闭移动端抽屉
    function closeSidebar() {
        const aside = document.getElementById('sidebar');
        if (!aside) return;
        aside.classList.remove('drawer-open');
        document.body.classList.remove('no-scroll');
        if (sidebarMask && maskVisible) {
            maskVisible = false;
            sidebarMask.classList.remove('show');
            // 等过渡结束后移除遮罩节点，避免竞态
            clearTimeout(maskCloseTimer);
            maskCloseTimer = setTimeout(() => {
                if (sidebarMask && !maskVisible) {
                    sidebarMask.remove();
                    sidebarMask = null;
                }
            }, 250);
        }
    }

    function renderSidebar() {
        const aside = document.getElementById('sidebar');
        if (!aside) return;
        const cats = currentData().categories;
        const items = [
            { id: 'all', emoji: '🌐', name: '全部', count: cats.length },
            ...cats.map(cat => ({
                id: cat.id,
                emoji: cat.emoji,
                name: cat.name,
                count: cat.items.length
            }))
        ];
        const isFiltered = !activeCategories.has('all'); // 是否处于具体分类筛选状态
        aside.innerHTML = `
            <div class="sidebar-head">
                <span class="sidebar-title">分类筛选</span>
                <span class="sidebar-hint">可多选</span>
                <button type="button" class="sidebar-clear" id="sidebar-clear"
                    ${isFiltered ? '' : 'hidden'}>清空</button>
            </div>
            <ul class="sidebar-list">
                ${items.map(it => `
                    <li class="sidebar-item ${activeCategories.has(it.id) ? 'active' : ''}"
                        data-id="${escapeHtml(it.id)}" role="button" tabindex="0">
                        <span class="sidebar-emoji">${escapeHtml(it.emoji)}</span>
                        <span class="sidebar-name">${escapeHtml(it.name)}</span>
                        <span class="sidebar-count">${it.count}</span>
                    </li>
                `).join('')}
            </ul>
        `;

        // 更新清空按钮显隐
        const clearBtn = aside.querySelector('#sidebar-clear');
        function updateClearVisibility() {
            if (clearBtn) clearBtn.hidden = activeCategories.has('all');
        }
        if (clearBtn) clearBtn.addEventListener('click', function () {
            activeCategories = new Set(['all']);
            // 全量重渲染以重置所有选中态与清空按钮
            renderSidebar();
            renderGrid();
        });

        // 分类项：只切换 active 状态，避免全量重渲染侧边栏
        aside.querySelectorAll('.sidebar-item').forEach(item => {
            const select = () => {
                const id = item.getAttribute('data-id');
                // 多选逻辑
                if (id === 'all') {
                    activeCategories = new Set(['all']);
                } else {
                    activeCategories.delete('all');
                    if (activeCategories.has(id)) {
                        activeCategories.delete(id);
                        if (activeCategories.size === 0) activeCategories.add('all');
                    } else {
                        activeCategories.add(id);
                    }
                }
                // 更新选中态与清空按钮，仅操作对应 DOM，避免重建整个侧边栏
                const isActive = activeCategories.has(id);
                item.classList.toggle('active', isActive);
                if (id === 'all') {
                    // 点"全部"时取消其它所有选中
                    aside.querySelectorAll('.sidebar-item').forEach(other => {
                        if (other !== item) other.classList.remove('active');
                    });
                } else {
                    // 选具体分类时取消"全部"高亮
                    const allItem = aside.querySelector('.sidebar-item[data-id="all"]');
                    if (allItem) allItem.classList.remove('active');
                }
                updateClearVisibility();
                renderGrid();
            };
            item.addEventListener('click', select);
            item.addEventListener('keydown', e => {
                if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); select(); }
            });
        });
    }

    /* ---------------- 卡片网格 ---------------- */
    function renderGrid() {
        const grid = document.getElementById('grid');
        if (!grid) return;
        const cats = filteredCategories();
        if (cats.length === 0) {
            grid.innerHTML = `
                <div class="empty-result">
                    <span class="empty-icon">(・_・;)</span>
                    <p>${emptyMessage()}</p>
                    <button type="button" class="empty-reset" id="empty-reset">清空筛选</button>
                </div>`;
            const reset = grid.querySelector('#empty-reset');
            if (reset) reset.addEventListener('click', function () {
                activeCategories = new Set(['all']);
                searchKeyword = '';
                const input = document.getElementById('search-input');
                if (input) { input.value = ''; }
                const clear = document.getElementById('search-clear');
                if (clear) { clear.hidden = true; }
                renderSidebar();
                renderGrid();
            });
            return;
        }
        grid.innerHTML = cats.map(cat => renderCard(cat)).join('');
    }

    function renderCard(cat) {
        const isArt = cat.id === 'ascii';
        const isIcon = activeTab === 'icons';
        // 特殊符号/花字用大字号展示；汉字部首用小一点的字号；装饰长串用等宽换行样式
        let sizeClass = '';
        if (activeTab === 'symbols') sizeClass = 'symbol-card';
        else if (activeTab === 'radicals') sizeClass = 'radical-card';
        else if (activeTab === 'fancy') sizeClass = 'fancy-card';
        else if (activeTab === 'deco') sizeClass = 'deco-card';
        const itemsHtml = cat.items.map(item => renderItem(item, isArt, isIcon)).join('');
        const needCollapse = cat.items.length > COLLAPSE_THRESHOLD;
        const listClass = needCollapse ? 'emoji-list collapsed' : 'emoji-list';
        const moreHtml = needCollapse
            ? `<div class="more-link" data-target="list-${cat.id}">查看更多 <span class="arrow">▾</span></div>`
            : '';

        return `
            <div class="card c-${cat.id} ${isArt ? 'art-card' : ''} ${sizeClass}">
                <div class="card-header">
                    <span class="card-emoji">${escapeHtml(cat.emoji)}</span>
                    <span class="card-title">${escapeHtml(cat.name)}</span>
                    <span class="card-badge">${cat.badge}</span>
                </div>
                <ul class="${listClass}" id="list-${cat.id}">${itemsHtml}</ul>
                ${moreHtml}
            </div>
        `;
    }

    function renderItem(item, isArt, isIcon) {
        if (isIcon) {
            return `
                <li class="emoji-item icon-item" data-text="${escapeHtml(item.symbol)}">
                    <div class="icon-main">
                        <span class="icon-glyph">${escapeHtml(item.symbol)}</span>
                        <span class="icon-desc">${escapeHtml(item.desc)}</span>
                    </div>
                    <button class="copy-btn" aria-label="复制">${COPY_ICON_SVG}</button>
                </li>
            `;
        }
        if (activeTab === 'deco') {
            return `
                <li class="emoji-item deco-item" data-text="${escapeHtml(item.symbol)}">
                    <div class="deco-main">
                        <span class="deco-symbol">${escapeHtml(item.symbol)}</span>
                        <span class="deco-desc">${escapeHtml(item.desc)}</span>
                    </div>
                    <button class="copy-btn" aria-label="复制">${COPY_ICON_SVG}</button>
                </li>
            `;
        }
        if (isArt) {
            return `
                <li class="emoji-item art-block-wrap">
                    <div class="art-block" data-text="${escapeHtml(item.symbol)}">
                        <pre class="art-pre">${escapeHtml(item.symbol)}</pre>
                        <div class="art-foot">
                            <span class="art-desc">${escapeHtml(item.desc)}</span>
                            <button class="copy-btn" aria-label="复制">${COPY_ICON_SVG}</button>
                        </div>
                    </div>
                </li>
            `;
        }
        return `
            <li class="emoji-item" data-text="${escapeHtml(item.symbol)}">
                <div class="emoji-left">
                    <span class="emoji-symbol">${escapeHtml(item.symbol)}</span>
                    <span class="emoji-desc">${escapeHtml(item.desc)}</span>
                </div>
                <button class="copy-btn" aria-label="复制">${COPY_ICON_SVG}</button>
            </li>
        `;
    }

    /* ---------------- 底部特性区 ---------------- */
    function renderFeatures() {
        const wrap = document.getElementById('features');
        if (!wrap) return;
        const features = currentData().features || KAOMOJI.features || [];
        wrap.innerHTML = features.map(f => `
            <div class="feature">
                <span class="feature-icon ${f.iconClass}">${escapeHtml(f.icon)}</span>
                <div class="feature-text">
                    <div class="feature-title">${escapeHtml(f.title)}</div>
                    <div class="feature-desc">${escapeHtml(f.desc)}</div>
                </div>
            </div>
        `).join('');
    }

    /* ---------------- 页脚 ---------------- */
    function renderFooter() {
        const f = document.getElementById('footer-note');
        if (!f) return;
        const year = new Date().getFullYear();
        const name = escapeHtml(currentData().footer || KAOMOJI.footer);
        f.innerHTML = `
            <div class="footer-inner">
                <span class="footer-brand">${name}<span class="heart">💗</span></span>
                <span class="footer-sep" aria-hidden="true">·</span>
                <span class="footer-copy">© ${year}</span>
                <a class="footer-link" href="https://github.com/gouxinjie/kaomoji" target="_blank" rel="noopener" title="在 GitHub 上查看源码">
                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.39 1.24-3.23-.12-.3-.54-1.53.12-3.19 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.89.12 3.19.77.84 1.23 1.92 1.23 3.23 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.58A12 12 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z"/></svg>
                    GitHub
                </a>
            </div>
            <p class="footer-note-tip">站内所有内容均为 Unicode 文本字符（非图片），因此能一键复制、在任意支持 Unicode 的文本框里原样粘贴。</p>
        `;
    }

    /* ---------------- 复制逻辑 ---------------- */
    function setupCopy() {
        const toast = document.getElementById('toast');
        let toastTimer = null;

        function showToast(msg) {
            if (!toast) return;
            toast.textContent = msg;
            toast.classList.add('show');
            clearTimeout(toastTimer);
            toastTimer = setTimeout(() => toast.classList.remove('show'), 1500);
        }

        function fallbackCopy(text) {
            const ta = document.createElement('textarea');
            ta.value = text;
            ta.setAttribute('readonly', '');
            ta.style.position = 'fixed';
            ta.style.left = '-9999px';
            ta.style.opacity = '0';
            document.body.appendChild(ta);
            ta.select();
            let ok = false;
            try { ok = document.execCommand('copy'); } catch (e) { /* noop */ }
            document.body.removeChild(ta);
            return ok;
        }

        function flashButton(btn) {
            if (!btn) return;
            btn.classList.add('copied');
            const original = btn.innerHTML;
            btn.innerHTML = '✓';
            setTimeout(() => {
                btn.classList.remove('copied');
                btn.innerHTML = original;
            }, 1100);
        }

        function doCopy(text, btn) {
            function onSuccess() {
                showToast('✅ 已复制到剪贴板');
                flashButton(btn);
            }
            function onFail() {
                showToast('⚠️ 复制失败，请手动选中');
            }
            if (navigator.clipboard && window.isSecureContext) {
                navigator.clipboard.writeText(text).then(onSuccess).catch(() => {
                    if (fallbackCopy(text)) onSuccess();
                    else onFail();
                });
            } else {
                if (fallbackCopy(text)) onSuccess();
                else onFail();
            }
        }

        document.addEventListener('click', function (e) {
            // 1. 点击 .copy-btn
            const btn = e.target.closest('.copy-btn');
            if (btn) {
                e.stopPropagation();
                let text = '';
                const wrap = btn.closest('.emoji-item') || btn.closest('.art-block');
                if (wrap) text = wrap.getAttribute('data-text') || '';
                if (!text) {
                    showToast('⚠️ 未找到内容');
                    return;
                }
                doCopy(text, btn);
                return;
            }
            // 2. 点击整条 item（点符号 / 描述也行）
            const item = e.target.closest('.emoji-item');
            if (item && !item.classList.contains('art-block-wrap')) {
                const text = item.getAttribute('data-text');
                if (text) {
                    const innerBtn = item.querySelector('.copy-btn');
                    doCopy(text, innerBtn);
                }
            }
        });
    }

    /* ---------------- 查看更多 ---------------- */
    function setupMore() {
        document.addEventListener('click', function (e) {
            const link = e.target.closest('.more-link');
            if (!link) return;
            const targetId = link.getAttribute('data-target');
            const list = document.getElementById(targetId);
            if (!list) return;
            const expanded = list.classList.contains('expanded');
            if (expanded) {
                list.classList.remove('expanded');
                list.classList.add('collapsed');
                link.classList.remove('expanded');
                link.innerHTML = '查看更多 <span class="arrow">▾</span>';
            } else {
                list.classList.remove('collapsed');
                list.classList.add('expanded');
                link.classList.add('expanded');
                link.innerHTML = '收起 <span class="arrow">▾</span>';
            }
        });
    }

    /* ---------------- 移动端筛选按钮 & 抽屉 ---------------- */
    function setupMobileFilter() {
        const btn = document.getElementById('mobile-filter-btn');
        if (!btn) return;
        btn.addEventListener('click', openSidebar);
        // 尺寸变化：从移动端切回桌面时清理抽屉状态
        window.addEventListener('resize', function () {
            if (!isMobile()) closeSidebar();
        });
    }

    /* ---------------- 启动 ---------------- */
    function init() {
        // renderHeader() 内部已渲染 Tab 和搜索框，并绑定交互
        renderHeader();
        renderSidebar();
        renderGrid();
        renderFeatures();
        renderFooter();
        setupCopy();
        setupMore();
        setupMobileFilter();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
