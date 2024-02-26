"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: number
  title: string
  description: string
  amount: number
  createdAt: string
}

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "title",
    header: "Nombre",
  },
  {
    accessorKey: "description",
    header: "Motivo",
  },
  {
    accessorKey: "amount",
    header: "Canitidad",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"))
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount)
 
      return <div className="text-right font-medium">{formatted}</div>
    },
  },
  {
    accessorKey: "createdAt",
    header: "Fecha",
    cell: ({ row }) => {
      const date = new Date(row.getValue("createdAt"))
      const formatted = date.toLocaleDateString()
 
      return <div className="text-left font-medium">{formatted}</div>
    },
  },
  
]
