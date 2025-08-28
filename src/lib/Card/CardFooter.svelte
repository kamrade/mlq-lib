<script lang="ts">
  import type { Snippet } from "svelte";

  let { children }: { children: Snippet } = $props();
</script>

<div class="CardFooter">
  {@render children()}
</div>

<style lang="scss">

  .CardFooter {
    padding: 0 1.5rem;
    display: flex;
    flex-direction: column;
    gap: .5rem;
  }

</style>
