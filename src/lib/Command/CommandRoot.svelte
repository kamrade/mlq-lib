<script lang="ts">
  import { setContext } from 'svelte';
  import { writable, get } from 'svelte/store';
  import type { ICommandRootProps, CommandItemEntry, ICommandItems } from './Command.types';

  let { classNames, children }: ICommandRootProps = $props();

  let rootEl: HTMLDivElement;
  const items = writable<CommandItemEntry[]>([]);
  let visibleItems = $state<CommandItemEntry[]>([]);
  const activeItemId = writable<symbol>();
  const searchQuery = writable('');
  setContext<ICommandItems>('command-items', {
    items,          // список всех зарегистрированных children CommandItem
    activeItemId,   // ID текущего выбранного
    searchQuery     // строка поиска
  });

  $effect(() => {
    visibleItems = $items.filter(i => {
      const text = i.el.textContent?.toLowerCase() || '';
      return text.includes($searchQuery);
    });
  });

  function handleKeydown(e: KeyboardEvent) {

    if (!visibleItems.length) return;

    const index = visibleItems.findIndex(i => i.id === get(activeItemId));
    const currentIndex = index === -1 ? 0 : index;

    const findNext = (start: number) => {
      for (let i = start + 1; i < visibleItems.length; i++) {
        if (!visibleItems[i].disabled) return i;
      }
      return currentIndex;
    };

    const findPrev = (start: number) => {
      for (let i = start - 1; i >= 0; i--) {
        if (!visibleItems[i].disabled) return i;
      }
      return currentIndex;
    };

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const next = findNext(currentIndex);
      activeItemId.set(visibleItems[next].id);

    }

    if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prev = findPrev(currentIndex);
      activeItemId.set(visibleItems[prev].id);
    }
  }
  
</script>

<div class={`CommandRoot ${classNames}`} bind:this={rootEl} tabindex="0" onkeydown={handleKeydown} role="listbox">
  {@render children()}
</div>

<style lang="scss">

  .CommandRoot {
    // Root
    --border-color: var(--color-gray-300);
    --border-color-focus: var(--color-gray-400);
    --outter-padding: 4px;
    --border-radius: 12px;
    --font-size: 1em;

    // Item, Group
    --padding-y: 7px;
    --padding-x: 12px;
    --inner-gap: 7px;
    --item-hover: var(--color-gray-200);
    --item-active: var(--color-gray-300);
    --item-border-radius: 8px;
    --opacity-item-disabled: 0.6;

    // Group
    --group-heading-color: var(--color-gray-600);
    --group-padding-y: 4px;
    --group-padding-x: 0;
  }

  .CommandRoot {
    padding: var(--outter-padding);
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
    font-size: var(--font-size);

    &:focus-visible, &:focus-within {
      outline: 2px solid var(--border-color-focus);
      outline-offset: 2px;
      border-radius: 0.375rem;
    }
  }

  
</style>