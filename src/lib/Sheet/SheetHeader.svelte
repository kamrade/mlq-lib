<script lang="ts">
  import type {ISheetHeaderProps} from "@lib/Sheet/Sheet.types";

  let { children }: ISheetHeaderProps = $props();
</script>

<div class="SheetHeader">
  {@render children()}
</div>

<style lang="scss">

  .SheetHeader {
    padding: 1.5rem;
  }

</style>
