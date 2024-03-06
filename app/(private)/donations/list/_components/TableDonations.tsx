"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "@tremor/react";
import { useEffect, useState } from "react";
import { DonationsData } from "@/interfaces/donations";
import { CausasData } from "@/interfaces/causas";

export const TableDonations = ({
  data,
  causa,
}: {
  data: DonationsData[];
  causa: CausasData[];
}) => {
  const [isMounted, setisMounted] = useState(false);

  useEffect(() => {
    setisMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className='flex justify-center w-full pb-10'>
      <Table className='w-5/6'>
        <TableHead>
          <TableRow className='border-b border-tremor-border dark:border-dark-tremor-border'>
            <TableHeaderCell className='text-tremor-content-strong dark:text-dark-tremor-content-strong'>
              Nombre
            </TableHeaderCell>
            <TableHeaderCell className='text-tremor-content-strong dark:text-dark-tremor-content-strong'>
              Cantidad
            </TableHeaderCell>
            <TableHeaderCell className='text-tremor-content-strong dark:text-dark-tremor-content-strong text-left '>
              Mensaje
            </TableHeaderCell>
            <TableHeaderCell className='text-tremor-content-strong dark:text-dark-tremor-content-strong text-right'>
              Causa
            </TableHeaderCell>
            <TableHeaderCell className='text-tremor-content-strong dark:text-dark-tremor-content-strong text-right'>
              Fecha
            </TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => {
            const causaItem = causa.find((c) => c.id === item.causesId);
            return (
              <TableRow key={item.id} className='shadow-sm'>
                <TableCell className='font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong'>
                  {item.title}
                </TableCell>
                <TableCell>$ {item.amount}</TableCell>
                <div className='text-left overflow-auto'>
                  <TableCell className='text-left lg:whitespace-normal lg:break-words line-clamp-2'>
                    {item.description}
                  </TableCell>
                </div>
                <TableCell className='text-right'>
                  {causaItem ? causaItem.title : "N/A"}
                </TableCell>
                <TableCell className='text-right'>
                  {item.createdAt.toLocaleDateString()}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};
