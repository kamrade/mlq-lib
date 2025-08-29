<script lang="ts">
  import type { ISheetActionsProps } from './Sheet.types';
  let { children }: ISheetActionsProps = $props();

</script>

<div class="SheetActions">
  {@render children()}
</div>

<style lang="scss">

  .SheetActions {
    padding: .5rem;
    border-bottom: 1px solid var(--color-gray-400);
  }

</style>
