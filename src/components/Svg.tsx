import React from "react";
import Icons from "../starter-code/assets/shared/svgs.svg"; // Path to your icons.svg

type Props = {
  name: string;
  color: string;
  size: number;
};

const Svg = ({ name, color, size }: Props) => {
  return (
    <svg className="" fill={color} width={size} height={size}>
      <use xlinkHref={`${Icons}#${name}`} />
    </svg>
  );
};

export default Svg;
