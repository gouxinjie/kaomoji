@echo off
rem 一键推送到 GitHub 和 Gitee 两个远程仓库
chcp 65001 >nul
cd /d "%~dp0"
echo ============================================
echo   一键推送: GitHub + Gitee
echo ============================================
echo.

echo [1/2] 推送到 GitHub...
git push github master
if errorlevel 1 (
    echo [错误] GitHub 推送失败！
    echo.
) else (
    echo [成功] GitHub 推送完成
)
echo.

echo [2/2] 推送到 Gitee...
git push gitee master
if errorlevel 1 (
    echo [错误] Gitee 推送失败！
    echo.
) else (
    echo [成功] Gitee 推送完成
)
echo.

echo ============================================
echo 全部完成
echo ============================================
pause >nul 2>&1
exit /b 0
