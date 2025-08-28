<script lang="ts">
  import type {Snippet} from "svelte";

  let { children, shadowed=false }: { children: Snippet, shadowed?: boolean } = $props();
</script>

<div class={`Card ${shadowed ? 'Card-shadowed' : ''}`}>
  {@render children()}
</div>

<style lang="scss">

  .Card {
    --card-border-color: var(--color-gray-400);
    --card-shadow: 0 0 16px rgba(0,0,0,0.04), 0 0 4px rgba(0,0,0,0.06);
    --card-border-radius: 16px;
  }

  .Card {
    padding: 1.5rem 0;
    border: 1px solid var(--card-border-color);
    border-radius: var(--card-border-radius);
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    &.Card-shadowed {
      box-shadow: var(--card-shadow);
    }
  }
</style>
