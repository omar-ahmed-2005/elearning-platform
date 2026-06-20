@echo off
echo =========================================
echo   NPM Hell Fixer Script
echo =========================================

echo [1/5] Force-killing running Node.js processes to release EBUSY locks...
taskkill /F /IM node.exe /T >nul 2>&1
echo Node processes terminated (if any were running).

echo.
echo [2/5] Deleting node_modules directory...
IF EXIST "node_modules" (
    rmdir /S /Q "node_modules"
    echo node_modules deleted.
) ELSE (
    echo node_modules not found, skipping.
)

echo.
echo [3/5] Deleting package-lock.json...
IF EXIST "package-lock.json" (
    del /F /Q "package-lock.json"
    echo package-lock.json deleted.
) ELSE (
    echo package-lock.json not found, skipping.
)

echo.
echo [4/5] Clearing NPM cache forcefully...
call npm cache clean --force

echo.
echo [5/5] Running clean npm install with high timeout...
echo (This may take a few minutes. Please wait...)
call npm install --prefer-offline --no-audit --loglevel=verbose

echo.
echo =========================================
echo   Done! 
echo   Try starting your app with: npm start
echo =========================================
pause
