<script lang="ts">
  import type {IMenuItemProps} from './Menu.types';
  let { children, onClick } : IMenuItemProps = $props();
</script>

<div class="MenuItem" onclick={() => onClick?.()} role="listbox" tabindex="-1" onkeydown={() => null}>
  {@render children()}
</div>

<style lang="scss">
  .MenuItem {
    padding: 0.5rem;
    border-radius: 8px;
    cursor: pointer;
    display: block;
    width: 100%;

    &:hover {
      background: var(--color-gray-200);
    }
  }
</style>
