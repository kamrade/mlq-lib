#!/bin/bash

if [ -z "$1" ]; then
  echo "Error. Wrong name. Try something different"
  exit 1
fi

TARGET_DIR="./src/lib/$1"

mkdir -p "$TARGET_DIR"
cd "$TARGET_DIR"

touch "$1.svelte"
touch "$1.types.ts"

echo '<script lang="ts">' >> "$1.svelte"
echo '' >> "$1.svelte"
echo '</script>' >> "$1.svelte"
echo '' >> "$1.svelte"
echo "<div class="$1">" >> "$1.svelte"
echo '' >> "$1.svelte"
echo '</div>' >> "$1.svelte"
echo '' >> "$1.svelte"
echo '<style lang="scss">' >> "$1.svelte"
echo '' >> "$1.svelte"
echo '</style>' >> "$1.svelte"

echo "export interface $1 {" >> "$1.types.ts"
echo '' >> "$1.types.ts"
echo '}' >> "$1.types.ts"

