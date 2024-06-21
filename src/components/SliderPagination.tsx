import React from "react";
import { BulletType, SliderType } from "./Slider";
import SwiperCore from "swiper/core";
import classNames from "classnames";

type Props<T extends SliderType> = {
  data: T[];
  onIndexChange: (index: number) => void;
  activeIndex: number;
  bulletType: BulletType;
  swiperRef?: React.MutableRefObject<SwiperCore | undefined>;
};

const SliderPagination = <T extends SliderType>({
  data,
  onIndexChange,
  activeIndex,
  bulletType,
  swiperRef,
}: Props<T>) => {
  const getBulletTypeStyle = (active: boolean) => {
    switch (bulletType) {
      case "bullets":
        return `${active ? "bg-white" : "bg-inactive"} w-4 h-4 rounded-full `;
      case "names":
        return `${active ? "border-white" : "border-transparent"} uppercase border-b-2 text-white smallcaps tracking-[.18em] text-md pb-4`;
      case "numbers":
        return `${active ? "border-white bg-white text-black" : "border-inactive bg-transparent text-white"} w-6 p-6 h-6 border-2 rounded-full flex items-center justify-center lg:mr-12 lg:p-12`;
    }
  };

  const getBulletTypeContent = (index: number, name: string) => {
    switch (bulletType) {
      case "bullets":
        return "";
      case "names":
        return name;
      case "numbers":
        return index + 1;
    }
  };

  return (
    <div
      className={`${bulletType === "numbers" ? "lg:flex-col" : "flex-row"} flex h-fit justify-center gap-4`}
    >
      {data.map((item, index) => {
        return (
          <div
            key={index}
            onClick={() => onIndexChange(index)}
            className={`${getBulletTypeStyle(activeIndex === index)} text-dosis hover:cursor-pointer md:text-xl lg:text-3xl`}
          >
            {getBulletTypeContent(index, item.name)}
          </div>
        );
      })}
    </div>
  );
};

export default SliderPagination;
