<script lang="ts">
  import {
    Button,
    Divider,
    Modal,
    ModalDialog,
    PageTitle,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogContent,
    DialogFooter,
    ButtonMilk, TextInputMilk
  } from "@lib";
  import { browser } from "$app/environment";
  import {CheckboxCircleFillSystem} from "svelte-remix";
  let isModalShowed = $state<boolean>(false);
  const hideModal = () => isModalShowed = false;


</script>

<div class="py-3">
  <PageTitle>Modal Dialog</PageTitle>
  <Divider></Divider>
  <Button onClick={() => isModalShowed = !isModalShowed}> Open Modal </Button>
</div>

{#if browser && isModalShowed}
  <Modal isVisible={isModalShowed} {hideModal} showCloseButton hideOnEscape closeOnBackdrop>
    <ModalDialog rounded>
      {#if browser && isModalShowed}
        <DialogHeader>
          <DialogTitle>
            Dialog title
          </DialogTitle>
          <DialogDescription>
            Dialog description
          </DialogDescription>
        </DialogHeader>
        <DialogContent>
          <TextInputMilk size="md" variant="contained" placeholder="Enter new Value" />
        </DialogContent>
        <DialogFooter>
          <ButtonMilk variant="base-emphasis" size="md"><CheckboxCircleFillSystem size="1em"/>Md button</ButtonMilk>
        </DialogFooter>
      {/if}
    </ModalDialog>
  </Modal>
{/if}
