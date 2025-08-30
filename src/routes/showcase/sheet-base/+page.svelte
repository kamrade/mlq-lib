<script lang="ts">
  import {
    PageTitle,
    Sheet,
    SheetHeader,
    SheetActions,
    SheetContent,
    SheetDescription,
    SheetTitle,
    Modal,
    ModalDialog,
    ButtonMilk,
    Divider
  } from "@lib";
  import {browser} from "$app/environment";
  import { ArrowDownSLineArrows, ArrowUpSLineArrows } from "svelte-remix";

  let isSheetShowed = $state<boolean>(false);
  let isModalShowed = $state<boolean>(false);

  const showSheet = () => isSheetShowed = true;
  const hideSheet = () => isSheetShowed = false;
</script>


<PageTitle>Sheet</PageTitle>
<Divider/>

<ButtonMilk size="md" variant="base-emphasis" onClick={showSheet}> Open Sheet </ButtonMilk>

{#if browser}
  <Sheet isOpen={isSheetShowed} hide={hideSheet}>


    <SheetActions hide={hideSheet}>
      <ButtonMilk iconButton variant="base-contained" size="sm">
        <ArrowDownSLineArrows size="1em"/>
      </ButtonMilk>
      <ButtonMilk iconButton variant="base-contained" size="sm">
        <ArrowUpSLineArrows size="1em"/>
      </ButtonMilk>
    </SheetActions>


    <SheetHeader>
      <SheetTitle>Sheet Title 1</SheetTitle>
      <SheetDescription>Some description</SheetDescription>
    </SheetHeader>


    <SheetContent>
      <ButtonMilk size="md" variant="base-contained" onClick={() => isModalShowed = !isModalShowed}> Open Modal </ButtonMilk>
      {#if browser && isModalShowed}
        <Modal isVisible={isModalShowed} hideModal={() => isModalShowed = false} showCloseButton={true} hideOnEscape={true} closeOnBackdrop>
          <ModalDialog>
            {#if browser && isModalShowed}
              <h1>Test title</h1>
            {/if}
          </ModalDialog>
        </Modal>
      {/if}
    </SheetContent>


  </Sheet>
{/if}
