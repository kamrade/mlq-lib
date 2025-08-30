<script lang="ts">
  import { type IPageContainerProps } from './PageContainer.types';
  let { children } : IPageContainerProps = $props();
</script>

<div class="PageContainer container px-4 mx-auto">
  {@render children()}
</div>
