import { Card, CardHeader, CardDescription, CardTitle, CardAction, CardFooter, CardContent } from "@/components/ui/card"
import { Badge } from "lucide-react"

type Props = {}

export default function TutorialLatest({}: Props) {
  return (
    <Card className="w-1/2">
        <CardHeader>
          <CardDescription>Latest from Bitscale</CardDescription>
        </CardHeader>
        <CardContent>
            {/* <Carousel>
                <div className="carousel-item">Tutorial 1</div>
                <div className="carousel-item">Tutorial 2</div>
                <div className="carousel-item">Tutorial 3</div>
            </Carousel> */}
        </CardContent>
    </Card>
  )
}