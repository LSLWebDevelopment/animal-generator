import { useContext } from "react";
import { ImageContext } from "../context/ImageContext";

export function useImageContext() {
  const context = useContext(ImageContext);
  if (!context) {
    throw new Error("Error creating the context");
  }
  return context;
}
