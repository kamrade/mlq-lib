<script lang="ts">
  import type {Snippet} from "svelte";

  let { children }: { children: Snippet } = $props();
</script>

<div class="CardHeader">
  {@render children()}
</div>

<style lang="scss">

  .CardHeader {
    padding: 0 1.5rem;
    display: flex;
    flex-direction: column;
    gap: .125rem;
  }

</style>
