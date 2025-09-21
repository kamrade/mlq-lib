<script lang="ts">
	import {Menu, ButtonMilk, Divider, PageTitle, MenuContent, MenuItem, MenuItemTitle} from '@lib';
  import { menuLinks } from './data';

	let label = "Выберите город";
	let menuWrapperElementHover: HTMLDivElement;
	let isHoverMenuVisible = false;
	let menuHoverElement: HTMLDivElement;

	const showHoverMenu = () => (isHoverMenuVisible = true);
	const hideHoverMenu = () => (isHoverMenuVisible = false);

	const mouseEnterHandler = () => {
		if (!isHoverMenuVisible) {
			showHoverMenu();
		}
	};

</script>


<PageTitle>Menu</PageTitle>
<Divider></Divider>

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
	>

		<MenuContent>

			{#each menuLinks as menuLink (menuLink.link)}
				{#if typeof menuLink === "string"}
					<MenuItemTitle>{menuLink}</MenuItemTitle>
				{:else}
					<MenuItem onClick={() => alert(menuLink.link)}>
						{menuLink.label}
					</MenuItem>
				{/if}
			{/each}

		</MenuContent>

	</Menu>

</div>

<style lang="scss">

	.dropdown-toggler {
		display: inline-flex;
		position: relative;
	}

</style>
