<script lang="ts">
  import { CommandRoot, CommandInput, CommandList, CommandGroup, CommandItem, Menu, ButtonMilk } from '@lib';
  import { groupList } from './data';

  let label = "Выберите город";
	let menuWrapperElementHover: HTMLDivElement;
	let isHoverMenuVisible = false;
	let menuHoverElement: HTMLDivElement;
	let menu: HTMLDivElement;
	let contentHeight = 0;

  $: contentHeight = menu?.getBoundingClientRect().height || 0;

	const showHoverMenu = () => (isHoverMenuVisible = true);
	const hideHoverMenu = () => (isHoverMenuVisible = false);

	const mouseEnterHandler = () => {
		if (!isHoverMenuVisible) {
			showHoverMenu();
		}
	};


</script>

<h2 class="text-2xl font-medium mb-4">Command in Menu</h2>



<div class={`dropdown-toggler ${isHoverMenuVisible ? "dropdown-toggler-hover" : ""}`}
	bind:this={menuWrapperElementHover}
	role="button" tabindex="-1"
>
  	<ButtonMilk size="lg" variant="base-contained" onClick={mouseEnterHandler} classNames="dropdown-toggler-text">
      {label}
    </ButtonMilk>

    	<Menu
        bind:menuElement={menuHoverElement}
        appearanceOnHover={false}
        isVisible={isHoverMenuVisible}
        hideMenu={hideHoverMenu}
        parentElement={menuWrapperElementHover}
        minWidth={500}
        {contentHeight}
      >
        <div class="menu" bind:this={menu}>
          <CommandRoot>  
            <CommandInput autoFocus={true}></CommandInput>
            
            <CommandList>
              {#each groupList as group}
                <CommandGroup heading={group.heading}>
                  {#each group.items as item}
                    <CommandItem>{item.title}</CommandItem>
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
    margin: 0;
    display: inline-flex;
    position: relative;

    &:hover {
      color: var(--color-gray-900);
    }

    &.dropdown-toggler-hover {
      color: var(--color-gray-900);
    }
  }
</style>