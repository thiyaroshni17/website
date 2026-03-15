from PIL import Image
import os

def remove_background(input_path, output_path, threshold=220):
    if not os.path.exists(input_path):
        print(f"Error: {input_path} not found.")
        return

    img = Image.open(input_path).convert("RGBA")
    datas = img.getdata()

    new_data = []
    # Use the top-left pixel as a hint for the background color
    bg_hint = datas[0]
    
    for item in datas:
        # Check if the pixel is close to white (common for these assets)
        # or close to the background hint
        if (item[0] > threshold and item[1] > threshold and item[2] > threshold) or \
           (abs(item[0] - bg_hint[0]) < 20 and abs(item[1] - bg_hint[1]) < 20 and abs(item[2] - bg_hint[2]) < 20):
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append(item)

    img.putdata(new_data)
    img.save(output_path, "PNG")
    print(f"Saved cutout to {output_path}")

if __name__ == "__main__":
    input_file = r"c:\Users\User\Desktop\website\frontend\public\biometric_final.png"
    output_file = r"c:\Users\User\Desktop\website\frontend\public\biometric_cutout.png"
    remove_background(input_file, output_file)
