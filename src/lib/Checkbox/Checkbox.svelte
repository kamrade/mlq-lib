<script lang="ts">
  import type { ICheckboxProps } from './Checkbox.types';
  let { checked = $bindable(), disabled, id, name, value, required, ariaLabel }: ICheckboxProps = $props();

  const toggle = () => checked = !checked;

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      toggle();
    }
  }
</script>


<button
  type="button"
  class="checkbox-button"
  role="checkbox"
  aria-label={ariaLabel}
  aria-checked={checked}
  {disabled}
  {id}
  {name}
  {value}
  tabindex="0"
  onclick={toggle}
  onkeydown={handleKeydown}
>

  <span class={`checkbox-icon ${checked ? 'visible1' : ''}`}>
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 6L9 17L4 12"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </span>

</button>

{#if name}
  <!-- скрытый input для участия в формах -->
  <input type="hidden" name={name} value={value || ''} {disabled} {checked} />
{/if}

<style lang="scss">

  .checkbox-button {
    --size: .875em;
    --border-width: 2px;
    --border-radius: 4px;

    --background-color: white;
    --border-color: var(--color-gray-500);

    --background-color-checked: var(--color-blue-700);
    --color-checked: white;
    --border-color-checked: var(--background-color-checked);

    --color-outline-focused: var(--color-blue-700);

    --opacity-disabled: 0.6;

  }

  .checkbox-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: var(--size);
    height: var(--size);
    border: var(--border-width) solid var(--border-color);
    border-radius: var(--border-radius);
    background: var(--background-color);
    cursor: pointer;
    user-select: none;
    transition: all 0.2s ease-in-out;
  }

  .checkbox-button[aria-checked="true"],
  .checkbox-button[aria-checked="mixed"] {
    background: var(--background-color-checked);
    color: var(--color-checked);
    border-color: var(--border-color-checked);
  }

  .checkbox-icon {
    font-size: 0.75em;
    line-height: 1;
    pointer-events: none;
    opacity: 0;

    &.visible1 {
      opacity: 1;
    }
  }

  .checkbox-button:focus-visible {
    outline: 2px solid var(--color-outline-focused);
    outline-offset: 1px;
  }

  .checkbox-button[disabled] {
    opacity: var(--opacity-disabled);
    pointer-events: none;
  }
</style>