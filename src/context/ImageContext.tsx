import { createContext, useState, type ReactNode } from "react";
import type { ImageItemEntity } from "../entities/ImageListEntity";
import { fetchImagesService } from "../services/fetchImagesService";

interface ImageContextEntity {
  data: ImageItemEntity[];
  getImages: () => void;
}

export const ImageContext = createContext<ImageContextEntity | null>(null);

interface ImageContextProviderProps {
  children: ReactNode;
}

export function ImageContextProvider({ children }: ImageContextProviderProps) {
  const [data, setData] = useState<ImageItemEntity[]>([]);

  async function getImages() {
    const response = await fetchImagesService();
    setData(response);
  }

  return (
    <ImageContext.Provider value={{ data, getImages }}>
      {children}
    </ImageContext.Provider>
  );
}
