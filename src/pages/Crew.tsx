import SectionHeadline from "src/components/SectionHeadline";
import Slider from "src/components/Slider";
import data from "../assets/data.json";
import { useRef, useState } from "react";
import SliderPagination from "src/components/SliderPagination";
import SwiperCore from "swiper/core";

type CrewMember = {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  role: string;
  bio: string;
};

const Crew = () => {
  const crewMembers: CrewMember[] = data.crew;
  const [selectedCrewMember, setSelectedCrewMember] = useState<CrewMember>(
    crewMembers[0],
  );
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);
  const swiperRef = useRef<SwiperCore>();

  const onSlideChange = (swiper: SwiperCore) => {
    onBulletClick(swiper.activeIndex);
    setSelectedCrewMember(crewMembers[swiper.activeIndex]);
  };

  const onBulletClick = (index: number) => {
    if (!swiperRef.current) {
      return;
    }
    setActiveSlideIndex(index);
    swiperRef.current.slideTo(index);
  };
  return (
    <div className="lg:mx-auto lg:w-9/12">
      <SectionHeadline number="02" title="meet your crew" />
      <div className="mx-auto flex  flex-col lg:flex-row-reverse lg:gap-8">
        <Slider
          swiperRef={swiperRef}
          data={crewMembers}
          onSlideChange={onSlideChange}
          imageFolder="crew"
        />
        <div className="flex flex-col  justify-between lg:w-1/2 lg:items-start">
          <div className="mt-12 lg:order-last">
            <SliderPagination
              data={crewMembers}
              onIndexChange={onBulletClick}
              activeIndex={activeSlideIndex}
              bulletType={"bullets"}
              swiperRef={swiperRef}
            />
          </div>

          <div className="mt-6 text-center">
            <h2 className="text-2xl uppercase text-purple-light opacity-45 lg:text-start lg:text-4xl">
              {selectedCrewMember.role}
            </h2>
            <h1 className="text-4xl uppercase lg:text-start lg:text-6xl">
              {selectedCrewMember.name}
            </h1>
            <p className="lg:px-0 lg:text-start">{selectedCrewMember.bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crew;
