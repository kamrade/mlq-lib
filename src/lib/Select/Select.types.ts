export interface ISelectItem {
  title: string;
  value: string;
}

export interface ISelectGroupData {
  heading: string;
  items: ISelectItem[];
}

export interface ISelectProps {
  options: ISelectGroupData[];
  value: ISelectItem;
  placeholder?: string;
  disabled?: boolean;
}
