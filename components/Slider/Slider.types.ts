import { EmblaOptionsType } from "embla-carousel-react";

export type SliderMethods = {
  nextSlide: () => void;
  prevSlide: () => void;
};

export type SliderProps = {
  children: React.ReactNode;
  options?: EmblaOptionsType;
  slideSpacing?: number;
  padding?: string;
};

export type EmblaProps = {
  slideSpacing: number;
};

export type EmblaViewportProps = {
  padding: string;
};
