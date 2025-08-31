#!/bin/bash

if [ -z "$1" ]; then
  echo "Error. Wrong name. Try something different"
  exit 1
fi

TARGET_DIR="/Users/denismichailov/projects/@kamrade/mlqlib/src/lib/$1"
SHOWCASE_DIR="/Users/denismichailov/projects/@kamrade/mlqlib/src/routes/showcase/$1"

mkdir -p "$TARGET_DIR"
cd "$TARGET_DIR"

touch "$1.svelte"
touch "$1.types.ts"
touch "index.ts"

echo "<script lang='ts'>" >> "$1.svelte"
echo "" >> "$1.svelte"
echo "</script>" >> "$1.svelte"
echo "" >> "$1.svelte"
echo "<div class='$1'>" >> "$1.svelte"
echo "" >> "$1.svelte"
echo "</div>" >> "$1.svelte"
echo "" >> "$1.svelte"
echo "<style lang='scss'>" >> "$1.svelte"
echo "" >> "$1.svelte"
echo "</style>" >> "$1.svelte"

echo "export interface $1 {" >> "$1.types.ts"
echo "" >> "$1.types.ts"
echo "}" >> "$1.types.ts"

echo "export { default as $1 } from './$1.svelte'" >> "index.ts"

mkdir -p "$SHOWCASE_DIR"
cd "$SHOWCASE_DIR"

touch "+page.svelte"
echo "<script lang='ts'>" >> "+page.svelte"
echo "import { PageTitle, Divider } from '@lib';" >> "+page.svelte"
echo "</script>" >> "+page.svelte"
echo "<PageTitle>$1</PageTitle>" >> "+page.svelte"
echo "<Divider/>" >> "+page.svelte"
echo "" >> "+page.svelte"
echo "<div class='mb-3' >" >> "+page.svelte"
echo "" >> "+page.svelte"
echo "</div>" >> "+page.svelte"
