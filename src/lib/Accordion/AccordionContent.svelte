<script lang="ts">
  import { type Snippet, getContext } from "svelte";
  import type {Writable} from "svelte/store";

  let { children }: { children: Snippet } = $props();

  const { isOpen } = getContext<{ isOpen: Writable<boolean>, value: string }>('accordion-item-context');

</script>

{#if $isOpen}
  <div class="AccordionContent">
    {@render children()}
  </div>
{/if}

<style lang="scss">
  .AccordionContent {
    margin-bottom: 1em;
  }
</style>
