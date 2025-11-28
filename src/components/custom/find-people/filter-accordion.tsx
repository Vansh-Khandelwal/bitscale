import { Accordion, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { BriefcaseBusinessIcon, GlobeIcon, LocationEditIcon } from "lucide-react"

type Props = {}

export default function FilterAccordion({ }: Props) {
    return (
        <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="item-1"
        >
            <AccordionItem value="item-1">
                <AccordionTrigger> 
                    <div className="accordion-title-container flex items-center gap-3 justify-start">
                        <BriefcaseBusinessIcon size="1rem" /> Job Title
                    </div>
                </AccordionTrigger>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>
                    <div className="accordion-title-container flex items-center gap-3 justify-start">
                        <GlobeIcon size="1rem" /> Company Website
                    </div>
                </AccordionTrigger>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>
                    <div className="accordion-title-container flex items-center gap-3 justify-start">
                        <LocationEditIcon size="1rem" /> Person Location
                    </div>
                </AccordionTrigger>
            </AccordionItem>
        </Accordion>
    )
}