<!--

  White panel for Modal Window

-->

<script lang="ts">
  export let rounded = false;
  export let size: 'sm' | 'md' | 'lg' = 'md';
</script>

<div class={`ModalDialog ModalDialog-${size}`} style={`border-radius: ${rounded ? 'var(--border-radius-modal)' : '0'}`}>
  <slot />
</div>

<style lang="scss">
  .ModalDialog {
    background-color: white;
    padding: 2rem;
    width: 640px;
    max-width: 100%;
    position: relative;
    margin: 4rem auto;
    z-index: var(--zindex-modal);
    box-shadow: 0 0 200px rgba(0, 0, 0, 0.1);
    &.ModalDialog-sm {
      width: 480px;
    }
    &.ModalDialog-lg {
      width: 800px;
    }
  }
</style>
