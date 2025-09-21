<script lang="ts">
  import { type IPageTitleProps } from './PageTitle.types';
  let { children } : IPageTitleProps = $props();
</script>

<h1 class="PageTitle text-2xl font-medium mb-4">
  {@render children()}
</h1>
