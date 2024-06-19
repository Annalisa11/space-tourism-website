import React from "react";

type Props = {
  number: string;
  title: string;
};

const SectionHeadline = ({ number, title }: Props) => {
  return (
    <h3 className="text-white">
      <strong>{number}</strong> {title}
    </h3>
  );
};

export default SectionHeadline;
