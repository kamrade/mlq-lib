<script lang="ts">
  import { TextInputBlock } from '@lib';
  import { Search2LineSystem } from 'svelte-remix';
  import type { CommandItemEntry } from './Command.types';
  import { getContext } from 'svelte';
  import { get, type Writable } from 'svelte/store';

  const { items, activeIndex } : {
    items: Writable<CommandItemEntry[]>;
    activeIndex: Writable<number>;
  } = getContext('command-items');

  function onKeydown(e: KeyboardEvent) {
    const $items = get(items);
    const $index = get(activeIndex);

    if (!$items.length) return;

    const findNext = (start: number) => {
      for (let i = start + 1; i < $items.length; i++) {
        if (!$items[i].disabled) return i;
      }
      return $index; // fallback
    };

    const findPrev = (start: number) => {
      for (let i = start - 1; i >= 0; i--) {
        if (!$items[i].disabled) return i;
      }
      return $index; // fallback
    };

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      // const next = Math.min($index + 1, $items.length - 1);
      const next = $index === -1 ? 0 : findNext($index);
      activeIndex.set(next);
    }

    if (e.key === 'ArrowUp') {
      e.preventDefault();
      // const prev = Math.max($index - 1, 0);
      const prev = findPrev($index);
      activeIndex.set(prev);
    }
  }
</script>


<div class="CommandInput">
  
  <TextInputBlock onKeyDown={onKeydown} size='lg' placeholder="Text Input with snippets" variant="text" >
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