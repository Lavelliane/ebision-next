"use client";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const images = [
  {
    src: "/assets/kookmin/1.jpg",
    alt: "Kookmin University 1",
  },
  {
    src: "/assets/kookmin/2.jpg",
    alt: "Kookmin University 2",
  },
  {
    src: "/assets/kookmin/3.jpg",
    alt: "Kookmin University 3",
  },
  {
    src: "/assets/kookmin/4.jpg",
    alt: "Kookmin University 4",
  },
  {
    src: "/assets/kookmin/5.jpg",
    alt: "Kookmin University 5",
  },
  {
    src: "/assets/kookmin/6.jpg",
    alt: "Kookmin University 6",
  },
];

const ImageCarousel = () => {
  return (
    <Carousel
      className="w-full h-full rounded-lg overflow-hidden"
      plugins={[Autoplay({ delay: 4000, defaultInteraction: false })]}
      opts={{
        align: "center",
        loop: true,
      }}
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <Image
              src={image.src}
              alt={image.alt}
              width={1000}
              height={1000}
              className="w-full h-[280px] sm:h-[400px] lg:h-[560px] object-cover rounded-lg"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default ImageCarousel;
