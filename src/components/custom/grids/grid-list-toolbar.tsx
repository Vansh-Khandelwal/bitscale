import React from "react"
import { TabsTrigger } from "@/components/ui/tabs"
import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs"
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { ChevronDown, SearchIcon } from "lucide-react"
import type { GridInfo } from "./grids-list-container"
import type { Table } from "@tanstack/table-core"

type Props = {
    mygrids?: React.ReactNode
    starred?: React.ReactNode
    table: Table<GridInfo>
}

export default function GridListToolbar({ mygrids, starred, table }: Props) {
    return (
        <Tabs className="flex flex-col gap-4" defaultValue="mygrids">
            <div className="grid-list-toolbar-container flex items-center gap-4 justify-between">
                <TabsList className="flex w-1/4">
                    <TabsTrigger value="mygrids">My Grids</TabsTrigger>
                    <TabsTrigger value="starred">Starred</TabsTrigger>
                </TabsList>
                <div className="flex items-center justify-center py-4 gap-4 w-1/2">
                    <div className="search-container flex items-center gap-2 bg-gray-200 rounded-md p-2 w-full max-w-md">
                        <SearchIcon size="0.9rem"/>
                        <input
                            placeholder="Filter grids..."
                            value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
                            onChange={(event) =>
                                table.getColumn("name")?.setFilterValue(event.target.value)
                            }
                            className="w-3/4 outline-none text-sm"
                        />
                    </div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="ml-auto">
                                Edit Columns <ChevronDown className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            {table
                                .getAllColumns()
                                .filter((column) => column.getCanHide())
                                .map((column) => {
                                    return (
                                        <DropdownMenuCheckboxItem
                                            key={column.id}
                                            className="capitalize"
                                            checked={column.getIsVisible()}
                                            onCheckedChange={(value) =>
                                                column.toggleVisibility(!!value)
                                            }
                                        >
                                            {column.id}
                                        </DropdownMenuCheckboxItem>
                                    )
                                })}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
            <TabsContent value="mygrids">{mygrids}</TabsContent>
            <TabsContent value="starred">{starred}</TabsContent>
            
        </Tabs>
    )
}