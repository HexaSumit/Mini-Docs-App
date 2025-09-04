export interface Tag {
  isOpen: boolean;
  tagTitle: string;
  tagColor: string;
}

export interface DataItem {
  desc: string;
  filesize: string;
  close: boolean;
  tag: Tag;
}