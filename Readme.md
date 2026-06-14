# Cat Extension

A simple Chrome extension that adds two fun cats to every webpage:
- A walking cat that moves from left to right.
- A sleeping cat fixed in the bottom-left corner.

## Preview

Meow Meoww

![Walking cat preview](walking-cat.gif)



![Sleeping cat preview](sleeping-cat.gif)

## Project Files

- `manifest.json` - Extension configuration (Manifest V3).
- `content.js` - Injects and animates the cat GIFs.
- `walking-cat.gif` - Walking animation.
- `sleeping-cat.gif` - Corner sleeping cat.
- `icon.png` - Extension icon.

## How To Load The Extension

1. Open Chrome and go to `chrome://extensions/`.
2. Turn on **Developer mode** (top-right).
3. Click **Load unpacked**.
4. Select this folder: `CatWalkingExt`.
5. Open or refresh any webpage.

## How To Use

1. After loading, browse to any website.
2. The walking cat appears near the bottom and continuously moves across the screen.
3. The sleeping cat stays in the bottom-left corner.

No extra setup is required after loading.

## Notes

- This extension runs on all URLs (`<all_urls>`).
- GIF files are exposed through `web_accessible_resources` in `manifest.json`.
