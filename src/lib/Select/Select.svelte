<!--
  Select
-->

<script lang="ts">

  import type { ISelectItem, ISelectProps } from './Select.types';
  import { ArrowDownSLineArrows } from 'svelte-remix';

  import {
    CommandRoot,
    CommandList,
    CommandGroup,
    CommandItem,
    CommandInput,
    Menu,
    TextInputBlock,
    type TextInputInstance
  } from '@lib';

  let {
    options,
    value = $bindable(),
    placeholder,
    disabled,
    fullWidthMenu,
    minWidthMenu,
    menuGap,
    menuMaxHeight
  }: ISelectProps = $props();

  let currentTitle = $derived<string>(value?.title || '');
  let menuWrapperElementHover = $state<HTMLDivElement | null>(null);
  let isMenuVisible = $state<boolean>(false);
  let menuHoverElement = $state<HTMLDivElement | null>(null);
  let menu = $state<HTMLDivElement | null>(null);
  let contentHeight = $derived( menu?.getBoundingClientRect().height || 0);
  let textInputBlock: TextInputInstance;

  const showHoverMenu = () => (isMenuVisible = true);
  const hideHoverMenu = () => (isMenuVisible = false);

  const mouseEnterHandler = () => {
    if (!isMenuVisible) {
      showHoverMenu();
    }
  };

  const updateValue = (newValue: ISelectItem) => {
    value = newValue;
  }

  const handleItemClick = (item: ISelectItem) => {
    updateValue({
      title: item.title,
      value: item.value
    });
    textInputBlock.focus();
    hideHoverMenu();
  }

  const handleCommandInputKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Tab") {
      textInputBlock.focus();
      hideHoverMenu();
    } else if (e.key === 'Escape') {
      if (isMenuVisible) {
        textInputBlock.focus();
        hideHoverMenu();
      }
    }
  }

  const handleControlKeyDown = (e: KeyboardEvent) => {
    if ((e.key === "Enter" || e.key === "Escape") && !isMenuVisible) {
      showHoverMenu();
    }
  }

  const handleControlClick = () => {
    if (!isMenuVisible) {
      showHoverMenu();
    }
  }

  const handleClear = () => {
    hideHoverMenu();
    value = null;
  }


</script>

<div class={`dropdown-toggler ${isMenuVisible ? "dropdown-toggler-hover" : ""}`}
   bind:this={menuWrapperElementHover}
>

  <TextInputBlock
    {disabled}
    readonly
    onFocus={mouseEnterHandler}
    onKeyDown={handleControlKeyDown}
    onClick={handleControlClick}
    onClear={handleClear}
    pseudoFocus={isMenuVisible}

    variant="contained"
    size="lg"
    placeholder={placeholder}
    clearValue
    bind:value={currentTitle}
    bind:this={textInputBlock}
  >
    {#snippet suffix()}
      <ArrowDownSLineArrows size="1em" onclick={handleControlClick} />
    {/snippet}
  </TextInputBlock>

  <Menu
    bind:menuElement={menuHoverElement}
    appearanceOnHover={false}
    isVisible={isMenuVisible}
    hideMenu={hideHoverMenu}
    parentElement={menuWrapperElementHover}
    minWidth={minWidthMenu}
    fullWidth={fullWidthMenu}
    {contentHeight}
    {menuGap}
    maxHeight={menuMaxHeight}
  >
    <div class="menu" bind:this={menu}>
      <CommandRoot maxHeight={menuMaxHeight}>
        <CommandInput onKeyDown={handleCommandInputKeyDown} autoFocus={true} visible={true} placeholder={placeholder} ></CommandInput>
        <CommandList>
          {#each options as option (option.heading)}
            <CommandGroup heading={option.heading}>
              {#each option.items as item (item.value)}
                <CommandItem onClick={ () => handleItemClick(item) }>{item.title}</CommandItem>
              {/each}
            </CommandGroup>
          {/each}
        </CommandList>

      </CommandRoot>
    </div>
  </Menu>

</div>


<style lang="scss">
  .dropdown-toggler {
    color: var(--color-gray-600);
    transition: color 0.3s ease-in-out;
    padding: 0;
    margin: 0 0 1rem;
    display: flex;
    width: 100%;
    position: relative;

    &:hover {
      color: var(--color-gray-900);
    }

    &.dropdown-toggler-hover {
      color: var(--color-gray-900);
    }
  }
</style>
