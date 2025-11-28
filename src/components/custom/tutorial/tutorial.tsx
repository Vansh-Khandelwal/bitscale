import TutorialDemo from "./tutorial-demo"
import TutorialLatest from "./tutorial-latest"

type Props = {}

export default function Tutorial({}: Props) {
  return (
    <div className="tutorial-container w-full flex max-md:flex-col gap-4 justify-between">
      <TutorialLatest />
      <TutorialDemo />
    </div>
  )
}