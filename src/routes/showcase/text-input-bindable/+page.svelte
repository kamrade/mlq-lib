<script lang="ts">
  import { TextInputMilk, TextInputBlock, ButtonMilk, type TextInputInstance } from "@lib";
  import { CheckboxCircleFillSystem, ArrowRightSLineArrows } from 'svelte-remix';

  let textInputValue = $state('');
  let textInputBlockValue = $state('');

  let textInputBlock: TextInputInstance;
</script>

<TextInputMilk bind:value={textInputValue} placeholder="This Text Input is binded"/>
<div class="py-2 text-gray-500 text-xs">Current value: {textInputValue}</div>

<TextInputBlock size='lg' placeholder="Text Input with snippets" bind:value={textInputBlockValue} bind:this={textInputBlock}>
  {#snippet prefix()}
    <CheckboxCircleFillSystem size="1em"/>
  {/snippet}
  {#snippet suffix()}
    <ArrowRightSLineArrows size="1em" />
  {/snippet}
</TextInputBlock>
<div class="py-2 text-gray-500 text-xs">Current value: {textInputBlockValue}</div>

<ButtonMilk size="lg" variant="base-contained" clickHandler={() => textInputBlock.focus()}>Focus the TextInput above</ButtonMilk>