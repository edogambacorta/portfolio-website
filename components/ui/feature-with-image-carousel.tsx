import React from 'react';
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function Feature() {
  return (
    <div className="w-full pt-8 pb-16 lg:pt-12 lg:pb-24 -mt-8 lg:-mt-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-end items-end gap-6">
          <div className="flex gap-4 flex-col items-start">
            <div>
              <Badge>Our Philosophy</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-xl md:text-3xl lg:text-4xl tracking-tighter max-w-lg font-regular text-left">
                At The Factory, we believe that tomorrow's success starts today.
              </h2>
              <p className="text-lg max-w-lg leading-relaxed tracking-tight text-muted-foreground text-left">
                Our Swiss-engineered AI solutions remove complexity and deliver measurable results, enabling you to achieve sustainable growth while you concentrate on what you do best.
              </p>
            </div>
          </div>
          <div className="w-full max-w-full px-6">
            <Carousel>
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index}>
                    <div className="flex rounded-md aspect-video bg-muted items-center justify-center p-6">
                      <span className="text-sm">
                        AI Solution {index + 1}
                      </span>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Feature };
