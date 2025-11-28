import type React from "react"
import { TabsTrigger } from "@/components/ui/tabs"
import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs"

type Props = {
    mygrids?: React.ReactNode
    starred?: React.ReactNode
}

export default function GridListToolbar({mygrids, starred}: Props) {
  return (
    <Tabs className="grid-list-toolbar flex flex-col gap-4" defaultValue="mygrids">
        <TabsList>
            <TabsTrigger value="mygrids">My Grids</TabsTrigger>
            <TabsTrigger value="starred">Starred</TabsTrigger>
        </TabsList>
        <TabsContent value="mygrids">{mygrids}</TabsContent>
        <TabsContent value="starred">{starred}</TabsContent>
    </Tabs>
  )
}