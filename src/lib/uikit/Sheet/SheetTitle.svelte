<script lang="ts">
  import type { ISheetTitleProps } from './Sheet.types';
  let { children } : ISheetTitleProps = $props();
</script>

<h2 class="SheetTitle">
  {@render children()}
</h2>

<style lang="scss">
  .SheetTitle {
    font-size: var(--text-xl);
    font-weight: var(--font-weight-semibold);
  }
</style>
