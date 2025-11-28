import { Badge } from "@/components/ui/badge"
import { SearchIcon, UnlockIcon } from "lucide-react"
import FindPeopleSidebar from "./find-people-sidebar"
import Empty from "../empty"

type Props = {}

export default function FindPeople({}: Props) {
  return (
    <div className="find-people-container w-full flex p-1 gap-4">
        <FindPeopleSidebar />
        <div className="find-people-right w-3/4 p-4">
            <div className="right-top flex flex-col gap-2">
                <Badge className="max-md:self-start self-end"><SearchIcon />8000/5000</Badge>
                <div className="top-content flex max-sm:flex-col max-md:text-[0.6rem] text-xs justify-between text-gray-500">
                    <span>Found 0 companies. Click preview to view results</span>
                    <span className="flex items-center gap-1"><UnlockIcon size="0.75rem"/> Unlock 100,000 leads with Enterprise Plan*</span>
                </div>
            </div>
            <Empty />
        </div>
    </div>
  )
}