import { Card, CardHeader, CardDescription, CardTitle, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"


type Props = {}

export default function TutorialDemo ({}: Props) {
  return (
    <Card className="w-1/2">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            Complete Product Demo
          </CardTitle>
          <CardDescription>92% of users nailed Bitscale after this walkthrough</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="progress-container flex text-xs items-center gap-2 mb-4">
                <Progress value={75} className="rounded-full h-1" />
                75%
            </div>
            <div className="steps-checklist grid justify-between grid-cols-2 text-sm">
                <div className="step-1 flex items-center gap-2 mb-2">
                    <Checkbox className="rounded" checked={true} />
                    <span className="step-label">Create your data list</span>
                </div>
                <div className="step-1 flex items-center gap-2 mb-2">
                    <Checkbox className="rounded" checked={true} />
                    <span className="step-label">Learn about BitAgent</span>
                </div>
                <div className="step-1 flex items-center gap-2 mb-2">
                    <Checkbox className="rounded" checked={true} />
                    <span className="step-label">Connect an integration</span>
                </div>
                <div className="step-1 flex items-center gap-2 mb-2">
                    <Checkbox className="rounded" checked={false} />
                    <span className="step-label">Customise waterfall providers</span>
                </div>
            </div>
        </CardContent>
      </Card>
  )
}