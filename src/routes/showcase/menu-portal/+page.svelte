<script lang="ts">
  import { MenuPortal, ButtonMilk } from '@lib';
  import { menuLinks } from './data';

  let label = "Выберите город в портале";
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


<h2 class="text-2xl font-medium mb-4">Menu Portal</h2>

<div class={`dropdown-toggler ${isHoverMenuVisible ? "dropdown-toggler-hover" : ""}`}
     bind:this={menuWrapperElementHover}
     role="button" tabindex="-1"
>

  <ButtonMilk size="lg" variant="base-contained" onClick={mouseEnterHandler} classNames="dropdown-toggler-text">
    {label}
  </ButtonMilk>

  <MenuPortal
      bind:menuElement={menuHoverElement}
      appearanceOnHover={false}
      isVisible={isHoverMenuVisible}
      hideMenu={hideHoverMenu}
      parentElement={menuWrapperElementHover}
      minWidth={500}
  >
    <div class="menu">
      {#each menuLinks as menuLink (menuLink.link)}
        {#if typeof menuLink === "string"}
          <h3 class="sub-title">{menuLink}</h3>
        {:else}
          <div onclick={() => alert(menuLink.link)} role="listbox" tabindex="-1" onkeydown={() => null}>
            <div class={menuLinks.length > 1 ? "option-wrapper" : ""}>
              {menuLink.label}
            </div>
          </div>
        {/if}
      {/each}
    </div>
  </MenuPortal>

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

  .sub-title {
    padding: 0.5rem 0.5rem 0 0.5rem;
    margin: 0 0 0.5rem 0;
    font-size: 14px;
    line-height: 20px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-weight: 500;
    color: var(--color-gray-600);
  }

  .menu {
    border: 1px solid var(--color-gray-300);
    padding: .25rem;
    background-color: white;
    border-radius: 12px;
    box-shadow: 0 0 40px rgba(0, 0, 0, 0.09);

    .option-wrapper {
      padding: 0.5rem;
      border-radius: 8px;
      cursor: pointer;
      display: block;
      width: 100%;

      &:hover {
        background: var(--color-gray-200);
      }
    }
  }
</style>
