<script lang="ts">
  import type { IAlertDialogProps } from "./AlertDialog.types";
  import {ButtonMilk, DialogDescription, DialogFooter, DialogHeader, DialogTitle, Modal, ModalDialog} from "@lib/uikit";
  import {CheckboxCircleFillSystem} from "svelte-remix";
  let { title, description, onResolve } : IAlertDialogProps = $props();
</script>

<Modal showCloseButton hideOnEscape closeOnBackdrop>
  <ModalDialog rounded>

    <DialogHeader>
      <DialogTitle>
        {title}
      </DialogTitle>
      <DialogDescription>
        {description}
      </DialogDescription>
    </DialogHeader>

    <DialogFooter>
      <ButtonMilk onClick={() => onResolve(false)} variant="base-contained" size="md">Cancel</ButtonMilk>
      <ButtonMilk onClick={() => onResolve(true)} variant="base-emphasis" size="md"><CheckboxCircleFillSystem size="1em"/>Confirm</ButtonMilk>
    </DialogFooter>

  </ModalDialog>
</Modal>
