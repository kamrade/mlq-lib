<script lang="ts">
  import { CommandRoot, CommandInput, TextInputMilk, TextInputBlock } from '@lib';
</script>

<h2 class="text-2xl font-medium mb-4">Command</h2>

<div class="my-2">
  <TextInputMilk size="lg" variant="text" placeholder="Enter text..."></TextInputMilk>
</div>

<div class="my-2">
  <TextInputBlock size="lg" variant="text" placeholder="Enter main text..."></TextInputBlock>
</div>

<CommandRoot>
  <CommandInput></CommandInput>
</CommandRoot>