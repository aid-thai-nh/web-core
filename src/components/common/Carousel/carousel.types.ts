import React from "react";

import useEmblaCarousel, { type UseEmblaCarouselType } from "embla-carousel-react";

export type CarouselApi = UseEmblaCarouselType[1];
export type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
export type CarouselOptions = UseCarouselParameters[0];
export type CarouselPlugin = UseCarouselParameters[1];

export interface CarouselProps extends React.ComponentProps<"div"> {
  /** Các slide hiển thị nhanh */
  slides?: React.ReactNode[];
  /** Options cho Embla Carousel */
  opts?: CarouselOptions;
  /** Plugins của Embla */
  plugins?: CarouselPlugin;
  /** Hướng chuyển động: horizontal | vertical */
  orientation?: "horizontal" | "vertical";
  /** Callback nhận instance Embla API */
  setApi?: (api: CarouselApi) => void;
  /** Tự động chạy */
  autoplay?: boolean | { delay: number };
  /** Cho phép lặp vô hạn */
  loop?: boolean;
  /** Hiển thị nút bấm Mũi tên (Previous / Next) */
  showArrows?: boolean;
  /** Hiển thị các nút Chấm tròn chuyển slide */
  showDots?: boolean;
  /** ClassName riêng cho phần bao bọc danh sách Slide (CarouselContent) */
  contentClassName?: string;
  /** ClassName riêng cho từng Slide (CarouselItem) */
  itemClassName?: string;
  /** Tắt style mặc định */
  unstyled?: boolean;
}
