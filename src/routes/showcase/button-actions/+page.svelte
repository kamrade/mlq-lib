<script lang="ts">
  import { ButtonMilk } from '@lib';

  let mouseEntered = $state(false);

  const onMouseEnter = () => {
    mouseEntered = true;
  }

  const onMouseLeave = () => {
    mouseEntered = false;
  }

</script>

<h2 class="text-2xl font-medium mb-4">Button Actions</h2>

<hr class="mt-4 mb-8 border-t border-gray-300" />

<h3 class="text-lg mb-2">Button onMouseEnter and onMouseLeave</h3>

<ButtonMilk size="lg" variant="base-contained" {onMouseEnter} {onMouseLeave}>
  Hover over me
</ButtonMilk>

<div class="py-3 text-sm text-gray-600">Mouse inside the button: <b>{mouseEntered}</b></div>

<hr class="mt-4 mb-8 border-t border-gray-300" />