import { mount, unmount } from 'svelte';
import { AlertDialog } from "@lib";

export function confirm(
  title: string,
  description: string,
): Promise<boolean> {
  return new Promise((resolve) => {
    const target = document.body.appendChild(document.createElement("div"));

    const dialog = mount(AlertDialog, {
      target,
      props: {
        title,
        description,

        onResolve: (value: boolean) => {
          resolve(value);
          unmount(dialog, { outro: true })
            .then(() => {});
          // dialog.destroy();
          target.remove();
        }

      }
    });

  });
}
