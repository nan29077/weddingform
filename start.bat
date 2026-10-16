@echo off
setlocal
title Weddingform Preview (3046)
cd /d "%~dp0"
if errorlevel 1 (
  echo Could not open the Weddingform project folder.
  pause
  exit /b 1
)

powershell.exe -NoProfile -Command "$ProgressPreference = 'SilentlyContinue'; try { $response = Invoke-WebRequest -Uri 'http://localhost:3046' -UseBasicParsing -TimeoutSec 2; if ($response.StatusCode -eq 200) { exit 0 } } catch {} ; exit 1" >nul 2>nul
if not errorlevel 1 (
  echo Preview is already running at http://localhost:3046
  start "" "http://localhost:3046" >nul 2>nul
  if errorlevel 1 echo Open http://localhost:3046 in your browser.
  echo.
  echo Press any key to close this window. The existing preview will keep running.
  pause >nul
  exit /b 0
)

where npm >nul 2>nul
if errorlevel 1 (
  echo npm was not found. Install Node.js and try again.
  pause
  exit /b 1
)

if not exist "node_modules\next" (
  echo Installing dependencies...
  call npm install
  if errorlevel 1 (
    echo Dependency installation failed.
    pause
    exit /b 1
  )
)

echo Starting Weddingform preview at http://localhost:3046
start "" /min powershell.exe -NoProfile -WindowStyle Hidden -ExecutionPolicy Bypass -File "%~dp0scripts\open-preview.ps1"
call npm run dev
set "serverExit=%ERRORLEVEL%"
echo.
echo Preview server stopped with exit code %serverExit%.
echo Press any key to close this window.
pause >nul
exit /b %serverExit%
