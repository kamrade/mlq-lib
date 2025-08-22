export interface ISelectItem {
  title: string;
  value: string;
}

export interface IGroupData {
  heading: string;
  items: ISelectItem[];
}

export interface ISelectProps {
  options: IGroupData[];
  value: ISelectItem;
  placeholder?: string;
}
