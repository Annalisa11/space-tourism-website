import { useState } from "react";
import data from "../assets/data.json";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper/core";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";

// install swiper modules
SwiperCore.use([Navigation, Pagination]);

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

  return (
    <div className="">
      <div>
        <div className="flex flex-col p-8">
          <h3 className="text-white">
            <strong>02</strong> Destination
          </h3>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            pagination={{
              clickable: true,
              type: "bullets",
              bulletElement: "span",
              renderBullet: function (index, className) {
                return (
                  '<span class="test ' +
                  className +
                  '">' +
                  planets[index].name +
                  "</span>"
                );
              },
            }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={({ realIndex }) => {
              console.log("slide change", realIndex);
              setSelectedPlanet(planets[realIndex]);
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
            }}
          >
            {planets.map((planet) => {
              return (
                <SwiperSlide>
                  <img
                    src={require(
                      `../assets/destination/image-${planet.name.toLowerCase()}.png`,
                    )}
                    alt={planet.name}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className="mt-6 text-center">
            <h1>{selectedPlanet.name}</h1>

            <p>{selectedPlanet.description}</p>
            <hr className="my-4" />

            <p className="text-md uppercase">avg, distance</p>
            <div className="font-headline text-5xl text-white">
              {selectedPlanet.distance}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
