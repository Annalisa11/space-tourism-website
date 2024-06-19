import SectionHeadline from "src/components/SectionHeadline";
import Slider from "src/components/Slider";
import data from "../assets/data.json";
import { useState } from "react";

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

  const [selectedCrewMember, setSelectedCrewMember] = useState<Technology>(
    technologies[0],
  );

  const onSlideChange = (index: number) => {
    setSelectedCrewMember(technologies[index]);
  };

  return (
    <div className="">
      <SectionHeadline number="03" title="space launch 101" />
      <Slider
        data={technologies}
        onSlideChange={onSlideChange}
        imageFolder="technology"
        type="bullets"
        imageType="portrait"
        jpg
      />
      <div className="mt-6 text-center">
        <h2 className="text-lg uppercase text-purple-light opacity-45">
          the terminology...
        </h2>
        <h1 className="text-2xl uppercase">{selectedCrewMember.name}</h1>
        <p>{selectedCrewMember.description}</p>
      </div>
    </div>
  );
};

export default Technology;
