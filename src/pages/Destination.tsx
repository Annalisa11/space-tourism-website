import { useState } from "react";
import data from "../assets/data.json";

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
  console.log(selectedPlanet.images.png);
  console.log(`.${selectedPlanet.images.png}`);

  const imageName = selectedPlanet.images.png.split("/").pop() ?? "";
  const imagePath = "../assets/destination/".concat(imageName);

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

          <h1>{selectedPlanet.name}</h1>
          <p>{selectedPlanet.description}</p>
          <hr />
          <p className="text-xl uppercase">avg, distance</p>
          <div className="font-headline text-4xl text-white">
            {selectedPlanet.distance}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
