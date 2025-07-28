<script lang="ts">
  import type { ICommandItemProps } from './Command.types';

  let { disabled, children } : ICommandItemProps = $props();
</script>

<div class={`CommandItem ${disabled ? 'disabled' : ''}`} role="option" data-command-item data-selected>
  {@render children()}
</div>

<style lang="scss">
  .CommandItem {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: var(--padding-y) var(--padding-x);
    gap: var(--inner-gap);
    cursor: pointer;
    border-radius: var(--item-border-radius);
    transition: background .3s ease-in-out;

    &.disabled {
      opacity: var(--opacity-item-disabled);
      cursor: not-allowed;
    }

    &:not(.disabled):hover {
      background: var(--item-hover)
    }
  }
</style>