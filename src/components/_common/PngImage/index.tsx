import React from "react";

export interface SvgIconProps {
  src: string;
  width: string;
  height: string;
  className?: string;
}

export const PngImage = ({ src, width, height }: SvgIconProps) => (
  <img src={process.env.PUBLIC_URL + `/assets/image/${src}`} alt={src} width={width} height={height} />
);
