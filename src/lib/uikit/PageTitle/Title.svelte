<script lang="ts">
  import { type ITitleProps } from './PageTitle.types';
  let { children } : ITitleProps = $props();
</script>

<h1 class="Title text-xl font-medium mb-3">
  {@render children()}
</h1>
