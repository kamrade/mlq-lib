<script lang="ts">
  import {Button, Sheet, SheetHeader, SheetActions} from "@lib";
  import {browser} from "$app/environment";

  let isSheetShowed = $state<boolean>(false);
</script>

<div class="container px-4  mx-auto">
  <div class="py-3">
    <h1>Sheet</h1>
    <Button onClick={() => isSheetShowed = !isSheetShowed}> Open Sheet </Button>
    {#if browser}
      <Sheet isOpen={isSheetShowed}>
        <SheetActions>Actions</SheetActions>
        <SheetHeader>
          Test
        </SheetHeader>

      </Sheet>
    {/if}
  </div>
</div>
