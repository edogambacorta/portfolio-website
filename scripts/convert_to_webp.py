import os
import sys
from PIL import Image
from pathlib import Path

def convert_to_webp(source_dir, quality=80):
    """
    Converts all PNG images in the source directory to WebP format.
    
    Args:
        source_dir (str): Path to the directory containing PNG images.
        quality (int): Quality of the output WebP images (0-100).
    """
    source_path = Path(source_dir)
    
    if not source_path.exists():
        print(f"Error: Directory '{source_dir}' does not exist.")
        return

    png_files = list(source_path.glob('**/*.png'))
    
    if not png_files:
        print(f"No PNG files found in '{source_dir}'.")
        return

    print(f"Found {len(png_files)} PNG files in '{source_dir}'. Starting conversion...")

    converted_count = 0
    skipped_count = 0
    error_count = 0

    for png_file in png_files:
        webp_file = png_file.with_suffix('.webp')
        
        if webp_file.exists():
            print(f"Skipping {png_file.name} (WebP already exists)")
            skipped_count += 1
            continue

        try:
            with Image.open(png_file) as img:
                print(f"Converting {png_file.name}...")
                # Convert to RGB if image is RGBA to ensure compatibility if needed, 
                # but WebP supports transparency, so we can keep RGBA.
                img.save(webp_file, 'WEBP', quality=quality)
                converted_count += 1
        except Exception as e:
            print(f"Error converting {png_file.name}: {e}")
            error_count += 1

    print("\nConversion Summary:")
    print(f"Total PNGs found: {len(png_files)}")
    print(f"Converted: {converted_count}")
    print(f"Skipped: {skipped_count}")
    print(f"Errors: {error_count}")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python3 convert_to_webp.py <directory_path> [quality]")
        print("Example: python3 convert_to_webp.py ./public/images 80")
        sys.exit(1)

    directory = sys.argv[1]
    
    # Optional quality argument
    quality_val = 80
    if len(sys.argv) > 2:
        try:
            quality_val = int(sys.argv[2])
        except ValueError:
            print("Invalid quality value. Using default 80.")

    convert_to_webp(directory, quality_val)
