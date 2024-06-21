import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper/core";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "./Slider.css";
import { useRef, useState } from "react";
import SliderPagination from "./SliderPagination";

// install swiper modules
SwiperCore.use([Navigation, Pagination]);

export type SliderType = {
  name: string;
};

type Props<T extends SliderType> = {
  data: T[];
  imageFolder: string;
  onSlideChange: (swiper: SwiperCore) => void;
  imageType?: ImageType;
  jpg?: boolean;
  swiperRef?: React.MutableRefObject<SwiperCore | undefined>;
};

export type BulletType = "bullets" | "names" | "numbers";
export type ImageType = "landscape" | "portrait";

const Slider = <T extends SliderType>({
  data,
  imageFolder,
  onSlideChange,
  imageType,
  jpg,
  swiperRef,
}: Props<T>) => {
  return (
    <Swiper
      className="-ml-12 flex w-[calc(100%+6rem)] lg:ml-0 lg:w-1/2"
      spaceBetween={50}
      slidesPerView={1}
      onSwiper={(swiper) => {
        if (swiperRef) swiperRef.current = swiper;
      }}
      onSlideChange={onSlideChange}
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
      }}
    >
      {data.map((item, i) => {
        return (
          <SwiperSlide key={`${item.name}-${i}`}>
            <img
              className={imageType}
              src={require(
                `../assets/${imageFolder}/image-${item.name.toLowerCase().replace(" ", "-")}${imageType ? "-" + imageType : ""}.${jpg ? "jpg" : "png"}`,
              )}
              alt={item.name}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slider;
