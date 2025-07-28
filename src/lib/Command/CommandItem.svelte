<script lang="ts">
  import { getContext, onMount } from 'svelte';
  import { derived } from 'svelte/store';
  import type { Writable } from 'svelte/store';
  import type { ICommandItemProps } from './Command.types';
  let { disabled, children } : ICommandItemProps = $props();

  // контекст где хранится массив элементов Items
  const items = getContext<Writable<HTMLElement[]>>('command-items');
  // Контекст, котороый передает текущий выбранный элемент
  const activeIndex = getContext<Writable<number>>('active-index');
  let el: HTMLElement;
  let myIndex = -2;

  onMount(() => {
    items.update(list => {
      const newArr = [...list, el];
      myIndex = newArr.indexOf(el)
      return newArr;
    });
    return () => {
      items.update(list => list.filter(i => i !== el));
    }
  })

  const isActive = derived(activeIndex, $i => $i === myIndex);

  function handleClick() {
    activeIndex.set(myIndex);
  }
</script>

<div 
  bind:this={el}
  onclick={handleClick}
  onkeydown={() => console.log("keydown")}
  class={`CommandItem ${disabled ? 'disabled' : ''}`} 
  class:active={$isActive}
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

    &.active {
      background: coral;
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