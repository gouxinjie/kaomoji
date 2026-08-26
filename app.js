/**
 * 颜文字图鉴 · 渲染与交互逻辑
 * 数据来源：window.KAOMOJI_DATA （见 data.js）
 */

(function () {
    'use strict';

    // 两个独立数据源：颜文字（data.js）与 Emoji 图标（icons.js）
    const KAOMOJI = window.KAOMOJI_DATA;
    const ICONS = window.KAOMOJI_ICONS;
    if (!KAOMOJI) {
        console.error('[kaomoji] 未找到数据源 window.KAOMOJI_DATA，请先引入 data.js');
        return;
    }
    if (!ICONS) {
        console.error('[kaomoji] 未找到数据源 window.KAOMOJI_ICONS，请先引入 icons.js');
        return;
    }

    // 当前激活的 Tab：'kaomoji'（颜文字）| 'icons'（图标）
    let activeTab = 'kaomoji';

    // 返回当前 Tab 对应的数据源
    function currentData() {
        return activeTab === 'icons' ? ICONS : KAOMOJI;
    }

    const COLLAPSE_THRESHOLD = 5; // 超过 5 条显示「查看更多」
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
    function renderHeader() {
        const header = document.getElementById('site-header');
        if (!header) return;
        const m = currentData().meta;
        header.innerHTML = `
            <div class="header-left">
                <div class="brand">
                    <span class="brand-icon">${escapeHtml(m.icon)}</span>
                    <span class="brand-title">${escapeHtml(m.title)}</span>
                </div>
                <div class="subhead">+ ${escapeHtml(m.subtitle)}</div>
            </div>
            <div class="header-info">
                <span class="info-icon">i</span>
                <span>${escapeHtml(m.totalLabel)}</span>
                <span class="divider">|</span>
                <span>共 ${m.totalCount} 类</span>
            </div>
        `;
    }

    /* ---------------- 状态 ---------------- */
    let activeCategories = new Set(['all']); // 当前筛选的分类 id 集合（多选）
    let searchKeyword = '';                  // 当前搜索关键词

    /* ---------------- Tab 切换 ---------------- */
    function renderTabs() {
        const wrap = document.getElementById('tabs');
        if (!wrap) return;
        const tabs = [
            { id: 'kaomoji', label: '颜文字', icon: '📝', panel: 'grid' },
            { id: 'icons', label: '图标', icon: '😊', panel: 'grid' }
        ];
        wrap.innerHTML = tabs.map(t => `
            <button type="button" class="tab-btn ${activeTab === t.id ? 'active' : ''}"
                role="tab" aria-selected="${activeTab === t.id}"
                aria-controls="${t.panel}"
                data-tab="${t.id}">
                <span class="tab-icon">${escapeHtml(t.icon)}</span>
                <span>${escapeHtml(t.label)}</span>
            </button>
        `).join('');
        wrap.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', function () {
                const id = this.getAttribute('data-tab');
                if (id === activeTab) return;
                activeTab = id;
                // 切换 Tab 时重置筛选与搜索，并同步搜索框提示文案
                activeCategories = new Set(['all']);
                searchKeyword = '';
                const input = document.getElementById('search-input');
                if (input) { input.value = ''; input.placeholder = searchPlaceholder(); }
                const clear = document.getElementById('search-clear');
                if (clear) clear.hidden = true;
                // 全量刷新视图
                renderHeader();
                renderSidebar();
                renderGrid();
                renderTabs();
            });
        });
    }

    // 返回当前 Tab 的搜索框提示文案
    function searchPlaceholder() {
        return activeTab === 'icons' ? '搜索 Emoji 图标' : '搜索颜文字';
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
    function renderSearch() {
        const wrap = document.getElementById('search-bar');
        if (!wrap) return;
        wrap.innerHTML = `
            <div class="search-box">
                <svg class="search-icon" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 1 0-.7.7l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0A4.5 4.5 0 1 1 14 9.5 4.5 4.5 0 0 1 9.5 14z"/>
                </svg>
                <input type="text" id="search-input" class="search-input"
                    placeholder="${searchPlaceholder()}"
                    aria-label="${searchPlaceholder()}" autocomplete="off">
                <button type="button" class="search-clear" id="search-clear" aria-label="清除搜索" hidden>✕</button>
            </div>
        `;
        const input = wrap.querySelector('#search-input');
        const clear = wrap.querySelector('#search-clear');
        // 输入防抖：避免每次按键都全量重渲染网格
        let debounceTimer = null;
        input.addEventListener('input', function () {
            searchKeyword = this.value;
            clear.hidden = !this.value;
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(renderGrid, 200);
        });
        clear.addEventListener('click', function () {
            input.value = '';
            searchKeyword = '';
            this.hidden = true;
            input.focus();
            renderGrid();
        });
    }

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
                    <p>没有找到匹配的颜文字</p>
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
        const itemsHtml = cat.items.map(item => renderItem(item, isArt, isIcon)).join('');
        const needCollapse = cat.items.length > COLLAPSE_THRESHOLD;
        const listClass = needCollapse ? 'emoji-list collapsed' : 'emoji-list';
        const moreHtml = needCollapse
            ? `<div class="more-link" data-target="list-${cat.id}">查看更多 <span class="arrow">▾</span></div>`
            : '';

        return `
            <div class="card c-${cat.id} ${isArt ? 'art-card' : ''}">
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
        f.innerHTML = `© ${new Date().getFullYear()} ${escapeHtml(currentData().footer || KAOMOJI.footer)}<span class="heart">💗</span>`;
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
        renderHeader();
        renderTabs();
        renderSearch();
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
