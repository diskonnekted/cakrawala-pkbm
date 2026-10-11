$src = "I:\pkbm"
$dst = "I:\pkbm\deploy\pkbm.tar"
if (Test-Path $dst) { Remove-Item $dst -Force }
tar -c -f $dst -C $src --exclude=node_modules --exclude=.next --exclude=.git --exclude=deploy --exclude=resources --exclude=dev.log --exclude=dev.err --exclude=transparent_logo.py --exclude=package-lock.json .
Write-Host ("tarball: " + (Get-Item $dst).Length + " bytes")
