import React from "react";
// import Icons from ."./src/assets/img/home"; // Path to your icons.svg

type Props = {
  name: string;
  color: string;
  size: number;
};

const Svg = ({ name, color, size }: Props) => {
  return (
    <svg className="" fill={color} width={size} height={size}>
      <use xlinkHref={`#${name}`} />
    </svg>
  );
};

export default Svg;
