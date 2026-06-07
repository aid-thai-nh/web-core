"use client";

import React, { useState, useEffect, forwardRef } from "react";

import {
  Carousel as UiCarousel,
  CarouselContent as UiCarouselContent,
  CarouselItem as UiCarouselItem,
  CarouselNext as UiCarouselNext,
  CarouselPrevious as UiCarouselPrevious,
  useCarousel,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

import { CarouselApi, CarouselProps } from "./carousel.types";

import "./css/carousel.base.css";

// 1. Carousel Component Wrapper
export const Carousel = forwardRef<HTMLDivElement, CarouselProps>(
  (
    {
      slides,
      opts,
      plugins,
      orientation = "horizontal",
      setApi,
      autoplay = false,
      loop = true,
      showArrows = false,
      showDots = false,
      contentClassName,
      itemClassName,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    // States
    const [localApi, setLocalApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    // Đồng bộ API ra ngoài và cập nhật dot
    useEffect(() => {
      if (!localApi) return;
      setCount(localApi.scrollSnapList().length);
      setCurrent(localApi.selectedScrollSnap());

      const onSelect = () => {
        setCurrent(localApi.selectedScrollSnap());
      };

      localApi.on("select", onSelect);
      localApi.on("reInit", onSelect);

      if (setApi) {
        setApi(localApi);
      }

      return () => {
        localApi.off("select", onSelect);
        localApi.off("reInit", onSelect);
      };
    }, [localApi, setApi]);

    // Tự động chạy (Autoplay)
    useEffect(() => {
      if (!localApi || !autoplay) return;
      const delay = typeof autoplay === "object" ? autoplay.delay : 4000;

      const interval = setInterval(() => {
        if (localApi.canScrollNext()) {
          localApi.scrollNext();
        } else if (loop) {
          localApi.scrollTo(0);
        }
      }, delay);

      return () => clearInterval(interval);
    }, [localApi, autoplay, loop]);

    return (
      <UiCarousel
        ref={ref}
        setApi={setLocalApi}
        opts={{
          ...opts,
          loop,
        }}
        plugins={plugins}
        orientation={orientation}
        className={cn("relative w-full select-none", className, "common-carousel")}
        {...props}
      >
        {slides ? (
          <>
            <CarouselContent className={contentClassName}>
              {slides.map((slide, idx) => (
                <CarouselItem key={idx} className={itemClassName}>
                  {slide}
                </CarouselItem>
              ))}
            </CarouselContent>

            {showArrows && (
              <>
                <CarouselPrevious />
                <CarouselNext />
              </>
            )}

            {showDots && count > 1 && (
              <div className="common-carousel-dots mt-4 flex justify-center gap-2">
                {Array.from({ length: count }).map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    className={cn(
                      "h-2 w-2 cursor-pointer rounded-full transition-all duration-300",
                      index === current ? "w-5 bg-[#BB9B49]" : "bg-[#EBD197]/60 hover:bg-[#BB9B49]/60",
                    )}
                    onClick={() => localApi?.scrollTo(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </>
        ) : (
          children
        )}
      </UiCarousel>
    );
  },
);
Carousel.displayName = "Carousel";

// 2. CarouselContent Wrapper
export const CarouselContent = forwardRef<HTMLDivElement, React.ComponentProps<typeof UiCarouselContent>>(
  ({ className, ...props }, ref) => {
    return <UiCarouselContent ref={ref} className={cn("common-carousel-content", className)} {...props} />;
  },
);
CarouselContent.displayName = "CarouselContent";

// 3. CarouselItem Wrapper
export const CarouselItem = forwardRef<HTMLDivElement, React.ComponentProps<typeof UiCarouselItem>>(
  ({ className, ...props }, ref) => {
    return <UiCarouselItem ref={ref} className={cn("common-carousel-item", className)} {...props} />;
  },
);
CarouselItem.displayName = "CarouselItem";

// 4. CarouselPrevious Wrapper
export const CarouselPrevious = forwardRef<HTMLButtonElement, React.ComponentProps<typeof UiCarouselPrevious>>(
  ({ className, ...props }, ref) => {
    return (
      <UiCarouselPrevious
        ref={ref}
        className={cn(
          "common-carousel-prev border-[#BB9B49]/30 bg-[#F7F4ED]/90 text-[#1F2933] hover:bg-[#EBD197]/40 hover:text-[#1F2933]",
          "focus-visible:ring-1 focus-visible:ring-[#BB9B49]",
          className,
        )}
        {...props}
      />
    );
  },
);
CarouselPrevious.displayName = "CarouselPrevious";

// 5. CarouselNext Wrapper
export const CarouselNext = forwardRef<HTMLButtonElement, React.ComponentProps<typeof UiCarouselNext>>(
  ({ className, ...props }, ref) => {
    return (
      <UiCarouselNext
        ref={ref}
        className={cn(
          "common-carousel-next border-[#BB9B49]/30 bg-[#F7F4ED]/90 text-[#1F2933] hover:bg-[#EBD197]/40 hover:text-[#1F2933]",
          "focus-visible:ring-1 focus-visible:ring-[#BB9B49]",
          className,
        )}
        {...props}
      />
    );
  },
);
CarouselNext.displayName = "CarouselNext";

export { useCarousel };
export type { CarouselApi };
