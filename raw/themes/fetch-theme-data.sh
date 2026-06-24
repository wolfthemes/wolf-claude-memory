#!/usr/bin/env bash
# Run this locally (not in Claude Code) to populate raw/themes/ with theme data.
# Usage: bash raw/themes/fetch-theme-data.sh
# Requires: curl, jq

set -uo pipefail

SLUGS=(
  decibel spectacle loud phase swingster
  kayo effigy beatit overable
  bronze snakepit
  herion soundkraft
  notescape speaker tune zample
  reinar glytch gainlab
  omnity vonzot
  sable nu yor retine mediafoundry clix
  morvan prequelle alceste slikk seijaku
  deadlift nordkapp covenant unimate hares tattoopress eightpulse elsass aurenza
  poize
  megahertz
  milu staaw superflick
)

META_BASE="https://changelog.wolfthemes.cloud"
IMAGES_BASE="https://preview.wolfthemes.store"
OUT_DIR="$(dirname "$0")"

# Number of preview thumbnails to download per theme (first N from General section)
MAX_THUMBS=5

for slug in "${SLUGS[@]}"; do
  dir="$OUT_DIR/$slug"
  mkdir -p "$dir/thumbs"

  echo "→ $slug"

  # theme_meta.json
  curl -sf "$META_BASE/$slug/theme_meta.json" -o "$dir/theme_meta.json" \
    && echo "  ✓ theme_meta.json" \
    || echo "  ✗ theme_meta.json (skipped)"

  # image list
  if curl -sf "$IMAGES_BASE/$slug/?wolf-theme-images=$slug" -o "$dir/images.json"; then
    echo "  ✓ images.json"

    # Download first N thumbnails from General section for visual review by Claude
    if command -v jq &>/dev/null; then
      urls=$(jq -r '.sections.General[].url' "$dir/images.json" 2>/dev/null | grep -v '^//' | grep -v '\.svg$' | head -"$MAX_THUMBS" || true)
      i=1
      while IFS= read -r url; do
        [[ -z "$url" ]] && continue
        ext="${url##*.}"
        outfile="$dir/thumbs/$(printf '%02d' $i).${ext%%\?*}"
        curl -sf "$url" -o "$outfile" && echo "  ✓ thumb $i" || echo "  ✗ thumb $i (skipped)"
        ((i++)) || true
      done <<< "$urls"
    fi
  else
    echo "  ✗ images.json (skipped)"
  fi
done

echo ""
echo "Done. Commit the raw/themes/ directory to the repo."
echo "Note: thumbs/ folders let Claude visually inspect images when creating content."
