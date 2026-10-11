# Run a local .sh script on the remote server via plink.
# Base64-encodes the script and decodes on the remote side to avoid stdin BOM/encoding issues.
param(
  [Parameter(Mandatory)][string]$ScriptPath,
  [int]$TimeoutSec = 600
)
$plink = "I:\Program Files\PuTTY\plink.exe"
$text = [System.IO.File]::ReadAllText($ScriptPath)
# strip BOM if present
if ($text.Length -gt 0 -and $text[0] -eq [char]0xFEFF) { $text = $text.Substring(1) }
$b64 = [System.Convert]::ToBase64String([System.Text.Encoding]::UTF8.GetBytes($text))
# remote command: base64 -d | bash
$remote = "echo $b64 | base64 -d | bash"
$argstr = "-batch -ssh -P 64001 -l rapidnet-cakrawala -pw DiXCDPjVeHvY15dCyETg 103.255.133.227 `"$remote`""
$psi = New-Object System.Diagnostics.ProcessStartInfo
$psi.FileName = $plink
$psi.Arguments = $argstr
$psi.RedirectStandardOutput = $true
$psi.RedirectStandardError = $true
$psi.UseShellExecute = $false
$proc = New-Object System.Diagnostics.Process
$proc.StartInfo = $psi
$proc.Start() | Out-Null
$stdout = $proc.StandardOutput.ReadToEnd()
$stderr = $proc.StandardError.ReadToEnd()
$proc.WaitForExit($TimeoutSec) | Out-Null
Write-Host "=== STDOUT ==="
Write-Host $stdout
Write-Host "=== STDERR ==="
Write-Host $stderr
Write-Host "=== EXIT: $($proc.ExitCode) ==="
