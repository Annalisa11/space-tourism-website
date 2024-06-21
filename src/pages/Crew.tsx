import SectionHeadline from "src/components/SectionHeadline";
import Slider from "src/components/Slider";
import data from "../assets/data.json";
import { useState } from "react";

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

  const onSlideChange = (index: number) => {
    setSelectedCrewMember(crewMembers[index]);
  };

  return (
    <div className="">
      <SectionHeadline number="02" title="meet your crew" />
      <Slider
        data={crewMembers}
        onSlideChange={onSlideChange}
        imageFolder="crew"
        type="bullets"
      />
      <div className="mt-6 text-center">
        <h2 className="text-lg uppercase text-purple-light opacity-45 lg:text-2xl">
          {selectedCrewMember.role}
        </h2>
        <h1 className="text-2xl uppercase lg:text-4xl">
          {selectedCrewMember.name}
        </h1>
        <p>{selectedCrewMember.bio}</p>
      </div>
    </div>
  );
};

export default Crew;
