/**
 * 颜文字图鉴 · 渲染与交互逻辑
 * 数据来源：window.KAOMOJI_DATA （见 data.js）
 */

(function () {
    'use strict';

    const DATA = window.KAOMOJI_DATA;
    if (!DATA) {
        console.error('[kaomoji] 未找到数据源 window.KAOMOJI_DATA，请先引入 data.js');
        return;
    }

    const COLLAPSE_THRESHOLD = 5; // 超过 5 条显示「查看更多」
    const COPY_ICON_SVG = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 1H4a2 2 0 0 0-2 2v14h2V3h12V1zm3 4H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm0 16H8V7h11v14z"/></svg>';

    /* ---------------- 工具 ---------------- */
    function escapeHtml(str) {
        if (str == null) return '';
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }
    function escapeAttr(str) {
        return escapeHtml(str);
    }

    /* ---------------- 头部 ---------------- */
    function renderHeader() {
        const header = document.getElementById('site-header');
        if (!header) return;
        const m = DATA.meta;
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

    /* ---------------- 卡片网格 ---------------- */
    function renderGrid() {
        const grid = document.getElementById('grid');
        if (!grid) return;
        grid.innerHTML = DATA.categories.map(cat => renderCard(cat)).join('');
    }

    function renderCard(cat) {
        const isArt = cat.id === 'ascii';
        const itemsHtml = cat.items.map(item => renderItem(item, isArt)).join('');
        const needCollapse = cat.items.length > COLLAPSE_THRESHOLD;
        const listClass = needCollapse ? 'emoji-list collapsed' : 'emoji-list';
        const moreHtml = needCollapse
            ? `<div class="more-link" data-target="list-${cat.id}">查看更多 <span class="arrow">⌄</span></div>`
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

    function renderItem(item, isArt) {
        if (isArt) {
            return `
                <li class="emoji-item art-block-wrap">
                    <div class="art-block" data-text="${escapeAttr(item.symbol)}">
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
            <li class="emoji-item" data-text="${escapeAttr(item.symbol)}">
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
        wrap.innerHTML = DATA.features.map(f => `
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
        f.innerHTML = `© ${new Date().getFullYear()} ${escapeHtml(DATA.footer)}<span class="heart">💗</span>`;
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
                link.innerHTML = '查看更多 <span class="arrow">⌄</span>';
            } else {
                list.classList.remove('collapsed');
                list.classList.add('expanded');
                link.classList.add('expanded');
                link.innerHTML = '收起 <span class="arrow">⌄</span>';
            }
        });
    }

    /* ---------------- 启动 ---------------- */
    function init() {
        renderHeader();
        renderGrid();
        renderFeatures();
        renderFooter();
        setupCopy();
        setupMore();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
