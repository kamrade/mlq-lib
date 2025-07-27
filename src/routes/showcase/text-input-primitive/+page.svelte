<script lang="ts">
  import type { KeyboardEventHandler, ChangeEventHandler } from "svelte/elements";
	import { TextInput, Button, type TextInputInstance } from "@lib";

  let textInputRef: TextInputInstance;

  // Bindable Text Input
	let textInputValue = $state('');

  // Text Input with onKeyDown
  let lastKeyDownPressed = $state('');
  let onKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => lastKeyDownPressed = !e.metaKey && (/^[a-z0-9]$/i.test(e.key)) ? e.key : lastKeyDownPressed;

  // Text Input with onKeyUp
  let lastKeyUpPressed = $state('');
  let onKeyUp: KeyboardEventHandler<HTMLInputElement> = (e) => lastKeyUpPressed = (!e.metaKey && (/^[a-z0-9]$/i.test(e.key))) ? e.key : lastKeyUpPressed;

  // Text Input focus/blur
  let isFocused = $state(false);
  let onFocus = () => isFocused = true;
  let onBlur = () => isFocused = false;

  // TextInput onChange
  let changedValue = $state('');
  let onChange: ChangeEventHandler<HTMLInputElement> = (e) => changedValue = (e.target as HTMLInputElement).value ;
</script>

<h2 class="text-2xl font-medium mb-4">Text Input Primitive</h2>

<h3 class="text-lg mb-2">Bindable Text Input</h3>
<div class="mb-2">
  <TextInput bind:value={textInputValue} placeholder="Your text" />
  <div class="py-2 text-gray-500 text-xs">Current value: {textInputValue}</div>
</div>
<hr class="mt-4 mb-8 border-t border-gray-300" />

<h3 class="text-lg mb-2">Text Input invalid</h3>
<div class="mb-2">
  <TextInput invalid placeholder="Invalid Text Input" />
</div>
<hr class="mt-4 mb-8 border-t border-gray-300" />


<h3 class="text-lg mb-2">Text Input disabled and readonly</h3>

<div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">
  <TextInput readonly={true} placeholder="Readonly Text Input" />
  <TextInput disabled={true} placeholder="Disabled Text Input"/>
</div>

<hr class="mt-4 mb-8 border-t border-gray-300" />

<h3 class="text-lg mb-2">Text Input with onKeyDown</h3>
<div class="mb-2">
  <TextInput {onKeyDown} placeholder="Track KeyDown" />
  <div class="py-2 text-gray-500 text-xs">Key Down. Pressed (only alphabetical or numbering): {lastKeyDownPressed}</div>
</div>

<hr class="mt-4 mb-8 border-t border-gray-300" />

<h3 class="text-lg mb-2">Text Input with onKeyUp</h3>
<div class="mb-2">
  <TextInput {onKeyUp} placeholder="Track KeyUp" />
  <div class="py-2 text-gray-500 text-xs">Key Up. Pressed (only alphabetical or numbering): {lastKeyUpPressed}</div>
</div>

<hr class="mt-4 mb-8 border-t border-gray-300" />

<h3 class="text-lg mb-2">Text Input with onFocus/onBlur</h3>
<div class="mb-2">
  <TextInput {onFocus} {onBlur} placeholder="focus/blur" />
  <div class="py-2 text-gray-500 text-xs">Is focused: {isFocused}</div>
</div>

<hr class="mt-4 mb-8 border-t border-gray-300" />

<h3 class="text-lg mb-2">Text Input with onChange</h3>
<div class="mb-2">
  <TextInput bind:this={textInputRef} {onChange} placeholder="Track changes" />
  <div class="py-2 text-gray-500 text-xs">Value changed to (updates after the field lost focus): {changedValue}</div>
</div>

<Button onClick={() => textInputRef.focus()}>Focus on TextInput above</Button>

<hr class="mt-4 mb-8 border-t border-gray-300" />