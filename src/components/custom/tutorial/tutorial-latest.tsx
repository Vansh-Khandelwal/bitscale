import { Card, CardHeader, CardDescription, CardContent } from "@/components/ui/card"

type Props = {}

export default function TutorialLatest({ }: Props) {
    return (
        <Card className="max-md:w-full w-1/2 flex flex-col gap-4">
            <CardHeader>
                <CardDescription>Latest from Bitscale</CardDescription>
            </CardHeader>
            <CardContent className="flex">
                <img src="" alt="Image Here" className="w-1/2 h-full bg-gray-300"/>
                <div className="img-caption flex flex-col gap-2 ml-4">
                    <div className="img-title font-semibold text-sm">How to Integrate 2 Way HubSpot</div>
                    <div className="img-description text-xs">
                        Prerequisites for this Integration is that you should have a HubSpot account and Copy the API key. We simple aad our API key through the integrations pa...
                    </div>
                    <div className="img-date text-xs text-gray-500">Posted today</div>
                </div>
            </CardContent>
        </Card>
    )
}