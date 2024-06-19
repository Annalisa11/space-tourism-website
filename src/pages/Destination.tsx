import { useState } from "react";
import data from "../assets/data.json";
import Slider from "../components/Slider";

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
        <div className="flex flex-col p-8">
          <h3 className="text-white">
            <strong>02</strong> Destination
          </h3>
          <Slider data={planets} onSlideChange={onSlideChange} />
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
    </div>
  );
};

export default Destination;
