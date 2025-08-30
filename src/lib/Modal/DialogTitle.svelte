<script lang="ts">
  import type { IDialogTitleProps } from './Modal.types';
  let { children } : IDialogTitleProps = $props();
</script>

<h2 class="DialogTitle">
  {@render children()}
</h2>

<style lang="scss">
  .DialogTitle {
    font-size: var(--text-xl);
    font-weight: var(--font-weight-medium);
  }
</style>
