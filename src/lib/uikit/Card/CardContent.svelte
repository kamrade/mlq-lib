<script lang="ts">
  import type {Snippet} from "svelte";

  let { children }: { children: Snippet } = $props();
</script>

<div class="CardContent">
  {@render children()}
</div>

<style lang="scss">

  .CardContent {
    padding: 0 1.5rem;
    display: flex;
    flex-direction: column;
    gap: .5rem;
  }

</style>
