#!/usr/bin/env bash
# Run this locally (not in Claude Code) to populate raw/themes/ with theme data.
# Usage: bash raw/themes/fetch-theme-data.sh
# Requires: curl, jq

set -euo pipefail

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

for slug in "${SLUGS[@]}"; do
  dir="$OUT_DIR/$slug"
  mkdir -p "$dir"

  echo "→ $slug"

  # theme_meta.json
  curl -sf "$META_BASE/$slug/theme_meta.json" -o "$dir/theme_meta.json" \
    && echo "  ✓ theme_meta.json" \
    || echo "  ✗ theme_meta.json (skipped)"

  # image list
  curl -sf "$IMAGES_BASE/$slug/?wolf-theme-images=$slug" -o "$dir/images.json" \
    && echo "  ✓ images.json" \
    || echo "  ✗ images.json (skipped)"
done

echo ""
echo "Done. Commit the raw/themes/ directory to the repo."
