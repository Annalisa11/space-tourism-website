import React from "react";

type Props = {
  number: string;
  title: string;
};

const SectionHeadline = ({ number, title }: Props) => {
  return (
    <h3 className="flex justify-center text-white lg:mb-24">
      <span className=" lg:w-4/5">
        <strong>{number}</strong> {title}
      </span>
    </h3>
  );
};

export default SectionHeadline;
