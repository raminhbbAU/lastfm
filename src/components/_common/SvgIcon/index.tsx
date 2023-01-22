import React from "react";
export interface SvgIconProps {
  src: string;
  width: string;
  height: string;
  className?: string;
}

export const SvgIcon = ({ src, width, height,className }: SvgIconProps) => (
  //<img src={`./img/svg/${src}`} alt={src} width={width} height={height} />
  <img src={process.env.PUBLIC_URL + `/assets/svg/${src}`} alt={src} width={width} height={height} className={className} />
);
