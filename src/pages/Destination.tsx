import { useEffect, useRef, useState } from "react";
import data from "../assets/data.json";
// import { register } from "swiper/element/bundle";
// import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper/core";
import "swiper/swiper.min.css";
import img_one from "../assets/destination/image-mars.png";
import img_twp from "../assets/destination/image-moon.png";
import img_three from "../assets/destination/image-europa.png";
// import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import * as ReactDOMServer from "react-dom/server";

// install swiper modules
SwiperCore.use([Navigation, Pagination]);

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "swiper-container": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
      "swiper-slide": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

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

// register();
const Destination = () => {
  const planets = data.destinations;
  const [selectedPlanet, setSelectedPlanet] = useState<Planet>(planets[0]);
  console.log(selectedPlanet.images.png);
  console.log(`.${selectedPlanet.images.png}`);

  const imageName = selectedPlanet.images.png.split("/").pop() ?? "";
  const imagePath = "../assets/destination/".concat(imageName);
  const swiperElRef = useRef(null);

  useEffect(() => {
    if (!swiperElRef || !swiperElRef.current) {
      return;
    }
  }, []);

  return (
    <div className="">
      <div>
        <div className="flex flex-col p-8">
          <h3 className="text-white">
            <strong>02</strong> Destination
          </h3>
          {/* <img
            src={require("../assets/destination/image-moon.png")}
            alt="planet"
            className=""
          /> */}

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
              // Responsive configurations
              640: {
                slidesPerView: 1, // Adjust slides for smaller screens
              },
            }}
          >
            <SwiperSlide>
              <img src={img_one} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img_twp} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img_three} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img_three} />
            </SwiperSlide>
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
