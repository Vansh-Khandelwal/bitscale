import { Building2Icon, UserIcon, PlusIcon } from "lucide-react"
import { Button } from "../ui/button"
import Tutorial from "./tutorial/tutorial"

type Props = {}

export default function HomeHeader({}: Props) {
  return (
    <div className="header-container flex flex-col gap-4">
      <div className="main-header flex items-center justify-between mb-4">
          <div className="welcome-container">
              <h1 className="font-semibold">Welcome Back, User!</h1>
              <p className="text-sm text-muted-foreground">Here's yours daily scoop on Bitscale!</p>
          </div>
          <div className="main-actions-container flex gap-4">
              <Button variant="outline"><Building2Icon />Find Companies</Button>
              <Button variant="outline"><UserIcon />Find People</Button>
              <Button variant="default"><PlusIcon />New Grid</Button>
          </div>
      </div>
      <Tutorial />
    </div>
  )
}