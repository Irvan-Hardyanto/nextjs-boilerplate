import React from "react";
import Table from "../components/BasicTable";
import { TBaseTableColumn } from "../types/table";

type TUser = {
  name: string;
  age: number;
  hobby?: string[];
};

const columns: TBaseTableColumn<TUser>[] = [
  {
    label: "Name",
    key: "name",
  },
  {
    label: "Age",
    key: "age",
  },
  {
    label: "Hobby",
    key: "hobby",
  },
];

const users: TUser[] = [
  {
    name: "Jane",
    age: 26,
    hobby: ["music"],
  },
  {
    name: "John",
    age: 29,
    hobby: ["karting", "football", "foosball"],
  },
  {
    name: "Adam",
    age: 22,
    hobby: ["skydiving"],
  },
];

function TableExample() {
  return (
    <div className="p-4">
      <Table<TUser> columns={columns} data={users} />
    </div>
  );
}

export default TableExample;
