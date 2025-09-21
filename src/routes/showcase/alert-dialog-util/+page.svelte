<script lang="ts">

  import { Button, Divider, PageTitle, confirm } from "@lib";

  async function handleDelete() {

    const ok = await confirm("Remove the record?", "This action is irreversible.");

    if (ok) {
      alert("Removing...");
    } else {
      alert("Cancelled");
    }

  }
</script>

<div class="py-3">
  <PageTitle>Alert Dialog Util</PageTitle>
  <Divider></Divider>
  <Button onClick={handleDelete}>Delete</Button>
</div>
