import { useRef, useState } from "react";
import data from "../assets/data.json";
import Slider from "../components/Slider";
import SliderPagination from "../components/SliderPagination";
import SectionHeadline from "../components/SectionHeadline";
import SwiperCore from "swiper/core";
import classNames from "classnames";

type Planet = {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  description: string;
  distance: string;
  travel: string;
};

const Destination = () => {
  const planets = data.destinations;
  const [selectedPlanet, setSelectedPlanet] = useState<Planet>(planets[0]);
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);
  const swiperRef = useRef<SwiperCore>();

  const onSlideChange = (swiper: SwiperCore) => {
    onBulletClick(swiper.activeIndex);
    setSelectedPlanet(planets[swiper.activeIndex]);
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
      <div>
        <SectionHeadline number="01" title="destination" />
        <div className="mx-auto flex flex-col lg:w-11/12 lg:flex-row lg:gap-8">
          <Slider
            swiperRef={swiperRef}
            data={planets}
            imageFolder="destination"
            onSlideChange={onSlideChange}
          />

          <div className="flex flex-col lg:w-1/2 lg:items-start">
            <SliderPagination
              data={planets}
              onIndexChange={onBulletClick}
              activeIndex={activeSlideIndex}
              bulletType={"names"}
              swiperRef={swiperRef}
            />

            <div className="mt-6 text-center lg:text-start">
              <h1>{selectedPlanet.name}</h1>
              <p className="lg:px-0">{selectedPlanet.description}</p>
              <hr className="lg:mx-0" />

              <div className="flex flex-col gap-8 lg:flex-row ">
                <div>
                  <p className="text-md uppercase lg:px-0">avg, distance</p>
                  <div className="font-headline text-5xl text-white lg:px-0">
                    {selectedPlanet.distance}
                  </div>
                </div>

                <div>
                  <p className="text-md uppercase lg:px-0">
                    estim. travel time
                  </p>
                  <div className="font-headline text-5xl text-white lg:px-0">
                    {selectedPlanet.travel}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
