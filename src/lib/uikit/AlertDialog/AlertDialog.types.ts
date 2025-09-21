export interface IAlertDialogProps {
  title: string;
  description?: string;
  onResolve: (value: boolean) => unknown;
}
