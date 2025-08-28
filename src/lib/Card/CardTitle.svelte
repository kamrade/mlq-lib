<script lang="ts">
  import type {Snippet} from "svelte";

  let { children }: { children: Snippet } = $props();
</script>

<div class="CardTitle">
  {@render children()}
</div>

<style lang="scss">

  .CardTitle {
    font-size: 1rem;
    font-weight: 600;
  }
</style>
