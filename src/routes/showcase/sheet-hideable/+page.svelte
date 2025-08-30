<script lang="ts">
  import {
    PageTitle,
    Sheet,
    SheetHeader,
    SheetContent,
    SheetDescription,
    SheetTitle,
    Modal,
    ModalDialog,
    ButtonMilk,
    Divider
  } from "@lib";
  import {browser} from "$app/environment";


  let isSheetShowed = $state<boolean>(false);
  let isModalShowed = $state<boolean>(false);

  const showSheet = () => isSheetShowed = true;
  const hideSheet = () => isSheetShowed = false;
</script>


<PageTitle>Sheet</PageTitle>
<Divider/>

<ButtonMilk size="md" variant="base-emphasis" onClick={showSheet}> Open Sheet </ButtonMilk>

{#if browser}
  <Sheet isOpen={isSheetShowed} hide={hideSheet} hideOnClickOutside>


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
