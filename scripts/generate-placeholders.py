#!/usr/bin/env python3
"""
Generate placeholder images for portfolio
Run: python scripts/generate-placeholders.py
"""

import os
import json
from pathlib import Path

try:
    from PIL import Image, ImageDraw, ImageFont
except ImportError:
    print("""
❌ Pillow library not found. Install it:
   pip install pillow

Then run: python scripts/generate-placeholders.py
    """)
    exit(1)

# Define images to create
images_config = [
    {
        "name": "public/media/avatar.jpg",
        "width": 400,
        "height": 400,
        "bg_color": (79, 70, 229),  # Indigo
        "text": "Avatar",
        "font_size": 60,
    },
    {
        "name": "public/media/projects/qr-code-generator.png",
        "width": 600,
        "height": 400,
        "bg_color": (6, 182, 212),  # Cyan
        "text": "QR Code\nGenerator",
        "font_size": 50,
    },
    {
        "name": "public/media/projects/school-management.png",
        "width": 600,
        "height": 400,
        "bg_color": (139, 92, 246),  # Purple
        "text": "School\nManagement",
        "font_size": 50,
    },
    {
        "name": "public/media/projects/task-scheduler.png",
        "width": 600,
        "height": 400,
        "bg_color": (236, 72, 153),  # Pink
        "text": "Task\nScheduler",
        "font_size": 50,
    },
    {
        "name": "public/media/certificates/certificate-1.png",
        "width": 600,
        "height": 400,
        "bg_color": (245, 158, 11),  # Amber
        "text": "Web Development\nCertificate",
        "font_size": 48,
    },
]

# Create images
base_path = Path(__file__).parent.parent

for config in images_config:
    image_path = base_path / config["name"]
    
    # Create directory if needed
    image_path.parent.mkdir(parents=True, exist_ok=True)
    
    # Skip if already exists
    if image_path.exists():
        print(f"⏭️  Skipped existing: {config['name']}")
        continue
    
    # Create image
    image = Image.new("RGB", (config["width"], config["height"]), config["bg_color"])
    draw = ImageDraw.Draw(image)
    
    # Add text
    try:
        # Try to use default font with size
        font = ImageFont.load_default()
    except:
        font = None
    
    # Get text bounding box
    bbox = draw.textbbox((0, 0), config["text"], font=font)
    text_width = bbox[2] - bbox[0]
    text_height = bbox[3] - bbox[1]
    
    # Calculate position (center)
    x = (config["width"] - text_width) // 2
    y = (config["height"] - text_height) // 2
    
    # Draw text
    draw.text((x, y), config["text"], fill=(255, 255, 255), font=font)
    
    # Save image
    image.save(image_path)
    print(f"✅ Generated: {config['name']}")

print("\n✨ All placeholder images created!")
