<script lang="ts">
  import { Button, ButtonMilk, Modal, ModalDialog, TextInput, type TextInputInstance } from "@lib";

  let isModalShowed = $state(false);

  let textInputBlock: TextInputInstance;
  let textInputValue = $state("");

  $effect(() => {
    if (!isModalShowed) {
      textInputValue = "";
    }
  })

</script>


<div class="container px-4  mx-auto">
  <div class="py-3">
    <h1>Modal</h1>
    <Button onClick={() => isModalShowed = !isModalShowed}> Open Modal </Button>
  </div>
  <Modal isVisible={isModalShowed} hideModal={() => isModalShowed = false} showCloseButton={true} hideOnEscape={true}>
    <ModalDialog>
      Test
      <TextInput bind:value={textInputValue} placeholder="Your text" bind:this={textInputBlock} autoFocus />
      <div class="py-2 text-gray-500 text-xs">Current value: {textInputValue}</div>
      <ButtonMilk size='lg' onClick={() => textInputBlock.focus()}>Focus</ButtonMilk>
    </ModalDialog>
  </Modal>
</div>
