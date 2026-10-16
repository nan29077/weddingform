$previewUrl = 'http://localhost:3046'
$ProgressPreference = 'SilentlyContinue'

for ($attempt = 0; $attempt -lt 60; $attempt++) {
  try {
    $response = Invoke-WebRequest -Uri $previewUrl -UseBasicParsing -TimeoutSec 2
    if ($response.StatusCode -eq 200) {
      Start-Process $previewUrl
      exit 0
    }
  } catch {
    Start-Sleep -Milliseconds 500
  }
}

exit 1
