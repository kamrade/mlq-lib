<script lang="ts">
  import {Divider, PageTitle, TextInputBlock} from '@lib';
  import { CheckboxCircleFillSystem, ArrowRightSLineArrows } from 'svelte-remix';
</script>

<PageTitle>Text Input Autofocus</PageTitle>
<Divider/>

<TextInputBlock autoFocus size='lg' placeholder="Text Input with snippets">
  {#snippet prefix()}
    <CheckboxCircleFillSystem size="1em"/>
  {/snippet}
  {#snippet suffix()}
    <ArrowRightSLineArrows size="1em" />
  {/snippet}
</TextInputBlock>
