<script lang="ts">
  import { getContext } from "svelte";
  import { ArrowDownSLineArrows, ArrowUpSLineArrows } from 'svelte-remix';
  import type {IAccordionTriggerProps, IAccordionItemContext, IAccordionContext} from './Accordion.types';

  let { children }: IAccordionTriggerProps = $props();

  const itemState = getContext<IAccordionItemContext>('accordion-item-context');
  const accordionState = getContext<IAccordionContext>('accordion-context');
  let isOpen = $state(false);

  itemState?.isOpen?.subscribe((val: boolean) => isOpen = val);

  const handleClick = () => {
    if (isOpen) {
      accordionState?.close?.();
      isOpen = false;
    } else {
      accordionState?.open?.(itemState.value);
      isOpen = true;
    }
  }

</script>

<div class="AccordionTrigger">
  <button class="AccordionTriggerButton" onclick={handleClick}>
    <span>
      {@render children()}
    </span>
    {#if isOpen }
      <ArrowUpSLineArrows size="1em"/>
    {:else}
      <ArrowDownSLineArrows size="1em"/>
    {/if}
  </button>
</div>

<style lang="scss">
  .AccordionTriggerButton {
    padding: .5em 0;
    display: flex;
    width: 100%;
    justify-content: space-between;
    transition: all .3s ease-in-out;
    align-items: center;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
</style>
