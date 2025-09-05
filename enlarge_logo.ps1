# PowerShell script to enlarge logo
Add-Type -AssemblyName System.Drawing

$inputPath = "public\logo.png"
$outputPath = "public\logo_enlarged.png"
$scaleFactor = 10.0  # Change this to enlarge more (2.0 = double size, 3.0 = triple size, etc.)

try {
    # Load the original image
    $originalImage = [System.Drawing.Image]::FromFile((Resolve-Path $inputPath).Path)
    
    # Calculate new dimensions
    $newWidth = [int]($originalImage.Width * $scaleFactor)
    $newHeight = [int]($originalImage.Height * $scaleFactor)
    
    # Create new bitmap with larger size
    $enlargedImage = New-Object System.Drawing.Bitmap($newWidth, $newHeight)
    $graphics = [System.Drawing.Graphics]::FromImage($enlargedImage)
    
    # Set high quality settings
    $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    
    # Draw the enlarged image
    $graphics.DrawImage($originalImage, 0, 0, $newWidth, $newHeight)
    
    # Save the enlarged image
    $enlargedImage.Save((Resolve-Path .).Path + "\$outputPath", [System.Drawing.Imaging.ImageFormat]::Png)
    
    Write-Host "Logo enlarged successfully!" -ForegroundColor Green
    Write-Host "Original size: $($originalImage.Width)x$($originalImage.Height)" -ForegroundColor Yellow
    Write-Host "New size: ${newWidth}x${newHeight}" -ForegroundColor Yellow
    Write-Host "Saved as: $outputPath" -ForegroundColor Yellow
    
    # Clean up
    $graphics.Dispose()
    $enlargedImage.Dispose()
    $originalImage.Dispose()
}
catch {
    Write-Error "Failed to enlarge logo: $_"
}
