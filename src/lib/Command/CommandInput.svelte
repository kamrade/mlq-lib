<script lang="ts">
  import { TextInputBlock } from '@lib';
  import { Search2LineSystem } from 'svelte-remix';
  import { getContext } from 'svelte';
  import { type Writable } from 'svelte/store';

  const { searchQuery } = getContext<{ searchQuery: Writable<string> }>('command-items');

  let value = $state('');

  function onInput(e: Event) {
    searchQuery.set(value.toLowerCase().trim());
  }
</script>


<div class="CommandInput">  
  <TextInputBlock size='lg' placeholder="Text Input with snippets" variant="text" onKeyUp={onInput} bind:value type="text">
    {#snippet prefix()}
      <Search2LineSystem size="1em"/>
    {/snippet}
  </TextInputBlock>
</div>


<style lang="scss">
  .CommandInput {
    --border-color: var(--color-gray-300);
  }

  .CommandInput {
    border-bottom: 1px solid var(--border-color);
  }
</style>