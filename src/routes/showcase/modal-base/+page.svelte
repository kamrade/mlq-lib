<script lang="ts">
  import { browser } from '$app/environment';
  import {
    Button,
    ButtonMilk,
    type ISelectGroupData,
    Modal,
    ModalDialog,
    TextInput,
    type TextInputInstance,
    Select, type ISelectItem,
  } from "@lib";

  let { data }: {
    data: { selectData: ISelectGroupData[] }
  } = $props();

  let isModalShowed = $state<boolean>(false);
  let value = $state<ISelectItem | null>(null);

  let textInputBlock = $state<TextInputInstance | null>(null);
  let textInputValue = $state("");

  $effect(() => {
    if (!isModalShowed) {
      textInputValue = "";
    }
  });

</script>

<div class="container px-4  mx-auto">
  <div class="py-3">
    <h1>Modal</h1>
    <Button onClick={() => isModalShowed = !isModalShowed}> Open Modal </Button>
  </div>

  {#if browser && isModalShowed}
    <Modal isVisible={isModalShowed} hideModal={() => isModalShowed = false} showCloseButton={true} hideOnEscape={true} closeOnBackdrop>
      <ModalDialog>
        {#if browser && isModalShowed}
          <h1>Test title</h1>
          <TextInput bind:value={textInputValue} placeholder="Your text" bind:this={textInputBlock} autoFocus />
          <div class="py-2 text-gray-500 text-xs">Current value: {textInputValue}</div>
          <div class="mb-3">
            <Select searchable={false} placeholder="Enter Country" options={data.selectData} bind:value={value} />
          </div>
          <ButtonMilk size='lg' onClick={() => textInputBlock?.focus()}>Focus</ButtonMilk>
          <div style="height: 1200px"></div>
        {/if}
      </ModalDialog>
    </Modal>
  {/if}

  <div style="height: 1500px">Stub</div>
</div>
