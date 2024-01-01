import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog"
import { Button } from "./ui/button";
import { VideoIcon } from "@radix-ui/react-icons";

const YoutubeEmbed = ({ src }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-red-700">
          <VideoIcon className="mr-2 w-4 h-4" /> Trailer
        </Button>
      </DialogTrigger>
      <DialogContent>
        <iframe 
          width="853"
          height="480"
          src={src}
          loading="lazy"
          allowFullScreen
          title="Embedded youtube"
        />
      </DialogContent>
    </Dialog>
  )
}

export default YoutubeEmbed
