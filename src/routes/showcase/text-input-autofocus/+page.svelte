<script lang="ts">
	import { TextInput } from "@lib";

	let textInputValue = $state('');

</script>

<h2 class="text-2xl font-medium mb-4">Text Input Primitive</h2>

<h3 class="text-lg mb-2">Bindable Text Input</h3>
<div class="mb-2">
  <TextInput bind:value={textInputValue} placeholder="Your text" autoFocus />
  <div class="py-2 text-gray-500 text-xs">Current value: {textInputValue}</div>
</div>