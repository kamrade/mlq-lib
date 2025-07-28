<script lang="ts">
  import type { ICommandRootProps } from './Command.types';
  let { classNames, children }: ICommandRootProps = $props();
</script>

<div class={`CommandRoot ${classNames}`}>
  {@render children()}
</div>

<style lang="scss">

  .CommandRoot {
    // Root
    --border-color: var(--color-gray-300);
    --outter-padding: 4px;
    --border-radius: 12px;
    --font-size: 1em;

    // Item, Group
    --padding-y: 7px;
    --padding-x: 12px;
    --inner-gap: 7px;
    --item-hover: var(--color-gray-300);
    --item-border-radius: 8px;
    --opacity-item-disabled: 0.6;

    // Group
    --group-heading-color: var(--color-gray-600);
    --group-padding-y: 4px;
    --group-padding-x: 0;
  }

  .CommandRoot {
    padding: var(--outter-padding);
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
    font-size: var(--font-size);
  }
</style>