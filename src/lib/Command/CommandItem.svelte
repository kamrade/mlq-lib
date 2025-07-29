<script lang="ts">
  import { getContext, onMount, onDestroy } from 'svelte';
  import { derived, get, type Writable } from 'svelte/store';
  import type { ICommandItemProps, CommandItemEntry } from './Command.types';
  import { addItemSorted } from './Command.utils';


  let { disabled, children } : ICommandItemProps = $props();

  const { items, activeItemId, searchQuery }: {
    items: Writable<CommandItemEntry[]>;
    activeItemId: Writable<symbol>;
    searchQuery: Writable<string>;
  } = getContext('command-items');

  // const { searchQuery } = getContext('command-items');

  let textContent = $state('');
  let shouldShow = $state(false);

  $effect(() => {
    textContent = el?.textContent?.toLowerCase().trim() || '';
    shouldShow = !$searchQuery || textContent.includes($searchQuery);
  })

  let el: HTMLElement;
  const id = Symbol();

  onMount(() => {
    items.update(list => addItemSorted(list, { el, id, disabled: !!disabled }));
  });

  onDestroy(() => {
    items.update(list => list.filter(item => item.id !== id));
  });

  // Реактивный индекс
  const myIndex = derived(items, $items =>
    $items.findIndex(item => item.id === id)
  );

  const isActive = derived(activeItemId, $id => $id === id);

  function handleClick() {
    if (disabled) return;
    activeItemId.set(id);
  }

  $effect(() => {
    if ($isActive) {
      el.scrollIntoView({ block: 'nearest' });
    }
  });

  
  
</script>

<div 
  bind:this={el}
  onclick={handleClick}
  onkeydown={() => {
    return 0;
  }}
  class={`CommandItem ${disabled ? 'disabled' : ''}`} 
  class:active={$isActive}
  class:hidden={!shouldShow}
  role="option" 
  tabindex="0"
  aria-selected={$isActive}
  data-command-item 
  data-selected
>
  {@render children()}
</div>

<style lang="scss">
  .CommandItem {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: var(--padding-y) var(--padding-x);
    gap: var(--inner-gap);
    cursor: pointer;
    border-radius: var(--item-border-radius);
    transition: background .3s ease-in-out;

    &.hidden {
      display: none;
    }

    &:focus-visible, &:focus-within {
      outline: none;
    }

    &.active {
      background: var(--item-active);
      &:hover {
        background: var(--item-active);
      }
    }

    &.disabled {
      opacity: var(--opacity-item-disabled);
      cursor: not-allowed;
    }

    &:not(.disabled):hover {
      background: var(--item-hover)
    }
  }
</style>