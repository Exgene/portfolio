import * as React from "react"
import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function ImageCarousel({ images, title }: { images: string[], title: string }) {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="p-1 w-full h-full">
              <Image
                src={image}
                alt={`${title} screenshot ${index + 1}`}
                width={800}
                height={450}
                className="object-contain w-full h-full"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <p className="sm:hidden block">You can swipe to move between images</p>

      <CarouselPrevious className="sm:flex hidden" />
      <CarouselNext className="sm:flex hidden" />
    </Carousel>
  )
}
