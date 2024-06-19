import { useState } from "react";
import data from "../assets/data.json";
import Slider from "../components/Slider";
import SectionHeadline from "../components/SectionHeadline";

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

  const onSlideChange = (index: number) => {
    setSelectedPlanet(planets[index]);
  };

  return (
    <div className="">
      <div>
        <SectionHeadline number="01" title="destination" />
        <Slider
          data={planets}
          onSlideChange={onSlideChange}
          imageFolder="destination"
          type="names"
        />
        <div className="mt-6 text-center">
          <h1>{selectedPlanet.name}</h1>
          <p>{selectedPlanet.description}</p>
          <hr />

          <p className="text-md uppercase">avg, distance</p>
          <div className="font-headline text-5xl text-white">
            {selectedPlanet.distance}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
