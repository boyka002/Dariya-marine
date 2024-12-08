// import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ExploreButton } from "./ui/explore-button"

interface ServiceDetailsDialogProps {
  title: string
  description: string
  details: string[]
}

export function ServiceDetailsDialog({ title, description, details }: ServiceDetailsDialogProps) {
    return (
      <Dialog>
        <DialogTrigger asChild>
          {/* <Button variant="outline">Read More</Button> */}
          <ExploreButton>Read More</ExploreButton>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[600px] w-11/12 bg-white p-6">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
          <div className="mt-6">
            <h4 className="text-base font-semibold mb-3">Additional Details:</h4>
            <ul className="list-disc pl-6 space-y-3">
              {details.map((detail, index) => (
                <li key={index} className="text-base">{detail}</li>
              ))}
            </ul>
          </div>
        </DialogContent>
      </Dialog>
    )
  }
  
