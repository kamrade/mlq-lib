<script lang="ts">
  import { TextInputMilk, type TextInputInstance } from '@lib';
  import type { ITextInputBlockProps } from './TextInputBlock.types';
  import { CloseCircleFillSystem } from 'svelte-remix';

  let {  prefix, suffix, clearValue, value = $bindable(), placeholder, ...rest }: ITextInputBlockProps = $props();

  // Calculate suffix and prefix width
  let prefixEl: HTMLDivElement | null = $state(null);
  let prefixWidth = $state(0);

  let suffixEl: HTMLDivElement | null = $state(null);
  let suffixWidth = $state(0);

  $effect(() => {
    prefixWidth = prefixEl?.getBoundingClientRect().width || 0;
  });

  $effect(() => {
    suffixWidth = suffixEl?.getBoundingClientRect().width || 0;
  });

  // Прокидываем фокус примитива
  let textInputRef: TextInputInstance;
  export const focus = () => textInputRef.focus();

</script>

<div class="TextInputBlock">
  {#if prefix}
    <div class="prefix" bind:this={prefixEl}>
      {@render prefix()}
    </div>
  {/if}
  
  <TextInputMilk
    placeholder={prefixWidth ? placeholder : ''}
    variant="underlined"
    bind:this={textInputRef}
    style={`padding-left: ${prefixWidth + 4}px; padding-right: ${suffixWidth + 4}px;`} 
    bind:value
    {...rest}
  />

  {#if clearValue && value !== ''}
    <button type="button" class="clear-value" style={`right: ${suffixWidth + 12}px;`} onclick={() => {value = ""; textInputRef.focus(); }}>
      <CloseCircleFillSystem size="1em" />
    </button>
  {/if}

  {#if suffix}
    <div class="suffix" bind:this={suffixEl}>
      {@render suffix()}
    </div>
  {/if}
</div>

<style lang="scss">
  
  .TextInputBlock {
    position: relative;
    
    .prefix, .suffix {
      position: absolute;
      z-index: 1;
      top: 0;
      bottom: 0;
      height: 100%;
      display: flex;
      align-items: center;
    }
    .prefix {
      left: 0;
      padding-left: .75em;
    }
    .suffix {
      right: 0;
      padding-right: .75em;
    }

    .clear-value {
      position: absolute;
      z-index: 1;
      top: 4px;
      bottom: 4px;
      height: calc(100% - 8px);
      cursor: pointer;
      border: 1px solid transparent;
      border-radius: 8px;
      padding: 0 4px;

      &:focus {
        outline: none;
        background-color: #EDEEF0;
        border-color: #D3D5DC;
      }
    }
  }

</style>