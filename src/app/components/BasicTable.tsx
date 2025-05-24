"use client";

import React from "react";
import type { TBaseTableProps } from "../types/table";

function BasicTable<T>({ data, columns }: TBaseTableProps<T>) {
  return (
    <table>
      <thead>
        <tr>
          {columns.map(({ key, label }) => (
            <th className="border p-1" key={String(key)}>
              {label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, idx) => (
          <tr key={idx}>
            {columns.map(({ key }) => (
              <td className="border p-1" key={String(key)}>
                {String(row[key])}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default BasicTable;
