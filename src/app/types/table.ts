import { ReactNode } from "react";

export type TBaseTableColumn<T> = {
  label: ReactNode;
  key: keyof T;
}

export type TBaseTableProps<T> = {
  data: T[];
  columns: TBaseTableColumn<T>[];
}