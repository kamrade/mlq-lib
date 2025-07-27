<script lang="ts">
  import type { ICommandProps } from './Command.types';
  let { children }: ICommandProps = $props();
</script>

<div class="CommandRoot">
  {@render children()}
</div>

<style lang="scss">

  .CommandRoot {
    --border-color: var(--color-gray-300);
    --outter-padding: 4px;
    --border-radius: 8px;
  }

  .CommandRoot {
    padding: var(--outter-padding);
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
  }
</style>