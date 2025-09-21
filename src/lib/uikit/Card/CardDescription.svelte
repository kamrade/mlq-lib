<script lang="ts">
  import type {Snippet} from "svelte";

  let { children }: { children: Snippet } = $props();
</script>

<div class="CardDescription">
  {@render children()}
</div>

<style lang="scss">

  .CardDescription {
    font-size: 0.75em;
    color: var(--color-gray-600);
  }
</style>
