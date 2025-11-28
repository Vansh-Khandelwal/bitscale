import { Separator } from "@radix-ui/react-separator"
import { Badge } from "../ui/badge"
import { Avatar, AvatarFallback } from "../ui/avatar"

type Props = {}

export default function Header({}: Props) {
  return (
    <header className="header w-full flex justify-end gap-4 px-4 py-2 bg-white border-b border-gray-200">
        <Badge className="user-token-usage">
            Tokens Used: 1,23,400/5,00,000
        </Badge>
        <Avatar className="user-avatar">
            <AvatarFallback>VK</AvatarFallback>
        </Avatar>
    </header>
  )
}