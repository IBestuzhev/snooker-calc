function global:deactivate ([switch]$NonDestructive) {
    if (Test-Path function:_OLD_VIRTUAL_PROMPT) {
        copy-item function:_OLD_VIRTUAL_PROMPT function:prompt
        remove-item function:_OLD_VIRTUAL_PROMPT
    }
    if (Test-Path env:_OLD_VIRTUAL_PATH) {
        copy-item env:_OLD_VIRTUAL_PATH env:PATH
        remove-item env:_OLD_VIRTUAL_PATH
    }
    # Remove-Item alias:npm -ErrorAction Ignore
    # Remove-Item alias:npx -ErrorAction Ignore
    # Remove-Item alias:node -ErrorAction Ignore
    if (!$NonDestructive) {
        remove-item function:deactivate
    }
}

deactivate -nondestructive
# New-Alias npm "W:\snooker\node-v9.3.0-win-x64\npm.cmd" -Scope Global
# New-Alias npx "W:\snooker\node-v9.3.0-win-x64\npx.cmd" -Scope Global
# New-Alias node "W:\snooker\node-v9.3.0-win-x64\node.exe" -Scope Global

function global:_OLD_VIRTUAL_PROMPT {""}
copy-item function:prompt function:_OLD_VIRTUAL_PROMPT
function global:prompt {
    Write-Host -NoNewline -ForegroundColor Green '(snooker) '
    _OLD_VIRTUAL_PROMPT
}
copy-item env:PATH env:_OLD_VIRTUAL_PATH
$env:PATH = "C:\Work\snooker\node-v9.3.0-win-x64\;$env:PATH"