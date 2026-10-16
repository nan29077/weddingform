@echo off
setlocal
cd /d "%~dp0"

powershell.exe -NoProfile -Command "$ProgressPreference = 'SilentlyContinue'; try { $response = Invoke-WebRequest -Uri 'http://localhost:3046' -UseBasicParsing -TimeoutSec 2; if ($response.StatusCode -eq 200) { exit 0 } } catch {} ; exit 1" >nul 2>nul
if not errorlevel 1 (
  echo Preview is already running at http://localhost:3046
  start "" "http://localhost:3046" >nul 2>nul
  if errorlevel 1 echo Open http://localhost:3046 in your browser.
  exit /b 0
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

if errorlevel 1 (
  echo Preview server could not start. Check whether port 3046 is already in use.
  pause
  exit /b 1
)
