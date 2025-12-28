
Add-Type -AssemblyName System.Drawing

$rootPath = "F:\portfil"
$maxSize = 2000000 # 2MB

Write-Host "Searching for images larger than 2MB in $rootPath..."
$files = Get-ChildItem -Path $rootPath -Recurse -Include *.jpg,*.jpeg,*.png

foreach ($file in $files) {
    if ($file.Length -gt $maxSize) {
        $sizeMB = [math]::Round($file.Length / 1MB, 2)
        Write-Host "Processing $($file.Name) ($sizeMB MB)..."

        try {
            # Load original image
            $stream = [System.IO.File]::OpenRead($file.FullName)
            $img = [System.Drawing.Image]::FromStream($stream)
            $stream.Close()

            # Resize if too large (max width 1600px)
            $maxWidth = 1600
            $newWidth = $img.Width
            $newHeight = $img.Height
            
            if ($img.Width -gt $maxWidth) {
                $scale = $maxWidth / $img.Width
                $newWidth = $maxWidth
                $newHeight = [int]($img.Height * $scale)
            }

            $newImg = new-object System.Drawing.Bitmap($newWidth, $newHeight)
            $graph = [System.Drawing.Graphics]::FromImage($newImg)
            $graph.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
            $graph.DrawImage($img, 0, 0, $newWidth, $newHeight)
            
            $img.Dispose()
            
            # Save options
            $tempFile = $file.FullName + ".tmp"
            
            if ($file.Extension -match "\.png") {
                # For PNG, just resize (re-saving often compresses a bit too)
                $newImg.Save($tempFile, [System.Drawing.Imaging.ImageFormat]::Png)
            } else {
                # For JPG, compress to 65% quality
                $codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq "image/jpeg" }
                $myp = [System.Drawing.Imaging.Encoder]::Quality
                $myps = New-Object System.Drawing.Imaging.EncoderParameters(1)
                $myps.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter($myp, [long]65)
                $newImg.Save($tempFile, $codec, $myps)
            }
            
            $newImg.Dispose()
            $graph.Dispose()

            # Compare sizes
            $newSize = (Get-Item $tempFile).Length
            if ($newSize -lt $file.Length) {
                Remove-Item $file.FullName
                Move-Item $tempFile $file.FullName -Force
                $saved = [math]::Round(($file.Length - $newSize) / 1MB, 2)
                Write-Host "  > Compressed. Saved $saved MB."
            } else {
                Write-Host "  > Skipped (New file was larger or same)."
                Remove-Item $tempFile
            }
        }
        catch {
            Write-Host "  > Error: $_"
            if (Test-Path $tempFile) { Remove-Item $tempFile }
        }
    }
}

Write-Host "Compression complete."
