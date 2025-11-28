import { Badge } from "../ui/badge"
import { Avatar, AvatarFallback } from "../ui/avatar"
import { CoinsIcon } from "lucide-react"
import { SidebarTrigger } from "../ui/sidebar"

type Props = {}

export default function Header({}: Props) {
  return (
    <header className="flex">
      <SidebarTrigger className="max-md:block hidden p-4 h-min justify-start"/>
      <div className="header-right w-full flex justify-end gap-4 max-md:gap-2 px-4 py-2 bg-white border-b border-gray-200">
        <Badge className="user-token-usage max-md:text-[0.6rem]">
           <CoinsIcon /> Tokens Used: 1,23,400/5,00,000
        </Badge>
        <Avatar className="user-avatar max-md:text-[0.8rem]">
            <AvatarFallback>VK</AvatarFallback>
        </Avatar>
      </div>
    </header>
  )
}