<script lang="ts">
  import { } from '@lib';
  import Portal from '@lib/Portal/Portal.svelte';
  import type { ISheetProps } from './Sheet.types';

  let { children, isOpen }: ISheetProps = $props();
</script>

<Portal>
  <div class={`Sheet ${isOpen ? 'Sheet-open' : ''}`}>
    {@render children()}
  </div>
</Portal>

<style lang="scss">
  .Sheet {
    position: fixed;
    z-index: var(--zindex-modal);
    top: 0;
    right: 0;
    height: 100vh;
    background: white;
    width: 400px;
    border-left: 1px solid var(--color-gray-400);
    box-shadow: 0 0 20px rgba(0,0,0,0.1);
    transform: translateX(110%);
    opacity: 0;
    transition: all .3s ease-in-out;

    &.Sheet-open {
      transform: translateX(0);
      opacity: 1;
    }
  }
</style>
