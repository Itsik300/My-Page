param(
  [string]$Message = "Update site"
)

$ErrorActionPreference = "Stop"

function Step($Text) {
  Write-Host ""
  Write-Host "== $Text ==" -ForegroundColor Cyan
}

$repo = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location -LiteralPath $repo

Step "Checking repository"
git status --short --branch

Step "Fetching GitHub changes"
git fetch origin main

$local = git rev-parse main
$remote = git rev-parse origin/main
if ($local -ne $remote) {
  Step "Updating local files from GitHub"
  git pull --rebase origin main
}

$changes = git status --porcelain
if ($changes) {
  Step "Saving local changes"
  git add -A
  git commit -m $Message

  Step "Sending changes to GitHub"
  git push origin main
} else {
  Write-Host ""
  Write-Host "No local changes to send." -ForegroundColor Yellow
}

Step "Updating published site"
git push origin main:gh-pages

Step "Done"
Write-Host "Site: https://itsik300.github.io/My-Page/" -ForegroundColor Green
Write-Host ""
Write-Host "Press Enter to close this window..."
[void][Console]::ReadLine()
