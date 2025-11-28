import Empty from "../empty"
import { GridList } from "./grid-list"
import GridListToolbar from "./grid-list-toolbar"


import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { ArrowDown, ArrowUp, MoreHorizontal } from "lucide-react"
import { type SortingState, type ColumnFiltersState, type VisibilityState, useReactTable, getCoreRowModel, getPaginationRowModel, getSortedRowModel, getFilteredRowModel, type ColumnDef } from "@tanstack/react-table"
import React from "react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

type Props = {}

const data: GridInfo[] = [
    { id: "1", name: "grid one", editedBy: "Alice", lastEdited: "2024-06-01" },
    { id: "2", name: "grid two", editedBy: "Bob", lastEdited: "2024-06-02" },
    { id: "3", name: "grid three", editedBy: "Charlie", lastEdited: "2024-06-03" },
    { id: "4", name: "grid four", editedBy: "Diana", lastEdited: "2024-06-04" },
    { id: "5", name: "grid five", editedBy: "Eve", lastEdited: "2024-06-05" },
    { id: "6", name: "grid six", editedBy: "Frank", lastEdited: "2024-06-06" },
    { id: "7", name: "grid seven", editedBy: "Grace", lastEdited: "2024-06-07" },
    { id: "8", name: "grid eight", editedBy: "Hank", lastEdited: "2024-06-08" },
    { id: "9", name: "grid nine", editedBy: "Ivy", lastEdited: "2024-06-09" },
    { id: "10", name: "grid ten", editedBy: "Jack", lastEdited: "2024-06-10" },
]

export type GridInfo = {
    id: string
    name: string
    editedBy: string
    lastEdited: string
}

export const columns: ColumnDef<GridInfo>[] = [
    {
        accessorKey: "name",
        header: ({ column }) => (
            <Button
                className="pl-4 text-left"
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
                Name
                {column.getIsSorted() === "asc" ? <ArrowDown /> : <ArrowUp />}
            </Button>
        ),
        cell: ({ row }) => (
            <div className="capitalize pl-4">{row.getValue("name")}</div>
        ),
        enableHiding: false,
        enableSorting: true,
    },
    {
        accessorKey: "editedBy",
        header: () => <div className="text-right">Edited By</div>,
        cell: ({ row }) => {
            <div className="capitalize">
                Hi
                <Avatar className="user-avatar">
                    <AvatarFallback>
                    </AvatarFallback>
                    {row.getValue("editedBy")}
                </Avatar>
            </div>
        },
    },
    {
        accessorKey: "lastEdited",
        header: () => <div className="text-right">Last Edited</div>,
        cell: ({ row }) => {
            <div className="capitalize">{row.getValue("lastEdited")}</div>
        },
    },
    {
        id: "actions",
        enableHiding: false,
        header: () => <div className="text-right pr-4">Actions</div>,
        cell: () => {
            return (
                <div className="flex justify-end pr-4">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                                <span className="sr-only">Open menu</span>
                                <MoreHorizontal />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem>Share</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Download</DropdownMenuItem>
                            <DropdownMenuItem>Copy</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            )
        },
    },
]

export default function GridListContainer({ }: Props) {
    const [sorting, setSorting] = React.useState<SortingState>([])
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
        []
    )
    const [columnVisibility, setColumnVisibility] =
        React.useState<VisibilityState>({})

    const table = useReactTable({
        data,
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
        },
    })

    return (
        <div className="grid-list-container flex flex-col gap-4 mb-10">
            <GridListToolbar
                table={table}
                mygrids={<GridList table={table} />}
                starred={<Empty />}
            />
        </div>
    )
}