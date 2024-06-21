import SectionHeadline from "src/components/SectionHeadline";
import Slider from "src/components/Slider";
import data from "../assets/data.json";
import { useRef, useState } from "react";
import SwiperCore from "swiper/core";
import SliderPagination from "src/components/SliderPagination";

type Technology = {
  name: string;
  images: {
    portrait: string;
    landscape: string;
  };
  description: string;
};

const Technology = () => {
  const technologies: Technology[] = data.technology;

  const [selectedTechnology, setSelectedTechnology] = useState<Technology>(
    technologies[0],
  );

  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);
  const swiperRef = useRef<SwiperCore>();

  const onSlideChange = (swiper: SwiperCore) => {
    onBulletClick(swiper.activeIndex);
    setSelectedTechnology(technologies[swiper.activeIndex]);
  };

  const onBulletClick = (index: number) => {
    if (!swiperRef.current) {
      return;
    }
    setActiveSlideIndex(index);
    swiperRef.current.slideTo(index);
  };

  return (
    <div className="">
      <SectionHeadline number="03" title="space launch 101" />
      <div className="mx-auto flex flex-col lg:w-11/12 lg:flex-row-reverse lg:gap-8 ">
        <Slider
          swiperRef={swiperRef}
          data={technologies}
          imageFolder="technology"
          imageType="portrait"
          onSlideChange={onSlideChange}
          jpg
        />
        <div className="flex flex-col justify-between  lg:w-1/2 lg:flex-row lg:items-start">
          <SliderPagination
            data={technologies}
            onIndexChange={onBulletClick}
            activeIndex={activeSlideIndex}
            bulletType={"numbers"}
            swiperRef={swiperRef}
          />

          <div className="mt-6 flex flex-col text-center lg:m-0 lg:text-start">
            <h2 className="text-lg uppercase text-purple-light opacity-45">
              the terminology...
            </h2>
            <h1 className="text-2xl uppercase">{selectedTechnology.name}</h1>
            <p className="lg:px-0 lg:text-start">
              {selectedTechnology.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
