# 一键启动本地预览服务器（颜文字图鉴）
# 用法：在 PowerShell 中运行  .\start.ps1
# 依赖：本机需安装 Python 或 Node.js

Set-Location -Path $PSScriptRoot

Write-Host "============================================"
Write-Host "  颜文字图鉴 · 本地预览"
Write-Host "============================================"
Write-Host ""

# 优先使用 Python；否则尝试 Node.js
try {
    python --version | Out-Null
    Write-Host "[启动] 使用 Python 启动服务器，端口 8000"
    Write-Host "[访问] http://localhost:8000/"
    Write-Host "[停止] 按 Ctrl+C"
    Write-Host ""
    python -m http.server 8000
    exit 0
} catch { }

try {
    node --version | Out-Null
    Write-Host "[启动] 使用 Node.js 启动服务器，端口 8000"
    Write-Host "[访问] http://localhost:8000/"
    Write-Host "[停止] 按 Ctrl+C"
    Write-Host ""
    node -e "const http=require('http'),fs=require('fs'),path=require('path');const types={'.html':'text/html','.js':'text/javascript','.css':'text/css','.svg':'image/svg+xml','.png':'image/png','.webmanifest':'application/manifest+json'};http.createServer((q,r)=>{let p=decodeURIComponent(q.url.split('?')[0]);if(p==='/')p='/index.html';const f=path.join(process.cwd(),p);fs.readFile(f,(e,d)=>{if(e){r.writeHead(404);r.end('404');return;}r.writeHead(200,{'Content-Type':types[path.extname(f)]||'application/octet-stream'});r.end(d);});}).listen(8000,'0.0.0.0',()=>console.log('Serving on http://localhost:8000/'));"
    exit 0
} catch { }

Write-Host "[错误] 未检测到 Python 或 Node.js，无法启动服务器。" -ForegroundColor Red
Write-Host "请先安装 Python(https://python.org) 或 Node.js(https://nodejs.org)"
Read-Host "按回车退出"
exit 1
