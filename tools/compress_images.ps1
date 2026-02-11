Add-Type -AssemblyName System.Drawing
function Compress-Image {
    param(
        [string]$ImagePath,
        [int]$Quality = 75
    )
    try {
        $img = [System.Drawing.Image]::FromFile($ImagePath)
        $encoder = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.FormatDescription -eq "JPEG" }
        $encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
        $encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, $Quality)
        
        $tempPath = $ImagePath + ".compressed.jpg"
        $img.Save($tempPath, $encoder, $encoderParams)
        $img.Dispose()
        
        $oldSize = (Get-Item $ImagePath).Length
        $newSize = (Get-Item $tempPath).Length
        
        if ($newSize -lt $oldSize) {
            Remove-Item $ImagePath -Force
            Rename-Item -Path $tempPath -NewName ([System.IO.Path]::GetFileName($ImagePath)) -Force
            Write-Host "Comprimido: $([System.IO.Path]::GetFileName($ImagePath)) ($([math]::Round($oldSize/1MB, 2)) MB -> $([math]::Round($newSize/1MB, 2)) MB)"
        } else {
            Remove-Item $tempPath -Force
            Write-Host "No se comprimió (ya era pequeño): $([System.IO.Path]::GetFileName($ImagePath))"
        }
    } catch {
        Write-Error "Error procesando $ImagePath : $_"
    }
}

$imageDir = "public/images/galeria"
$files = Get-ChildItem "$imageDir/*.jpg" | Where-Object { $_.Length -gt 1MB }
foreach ($file in $files) {
    Compress-Image -ImagePath $file.FullName -Quality 75
}
