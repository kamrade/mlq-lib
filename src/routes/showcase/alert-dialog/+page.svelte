<script lang="ts">

  import {Button, Divider, PageTitle, AlertDialog} from "@lib";

  let isModalShowed = $state<boolean>(false);
  const hideModal = () => isModalShowed = false;

  let handleResolve = (value: boolean) => {
    if (value) {
      alert("Confirm");
      hideModal();
    } else {
      hideModal();
    }
  }

</script>

<div class="py-3">
  <PageTitle>Alert Dialog</PageTitle>
  <Divider></Divider>
  <Button onClick={() => isModalShowed = !isModalShowed}> Open Modal </Button>
</div>

{#if isModalShowed}
  <AlertDialog
    title="Confirm"
    description="Please confirm"
    onResolve={handleResolve}
  ></AlertDialog>
{/if}
