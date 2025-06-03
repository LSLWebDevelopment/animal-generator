import { useEffect, useState } from "react";
import { useImageContext } from "./hooks/useImageContext";
import type { ImageItemEntity } from "./entities/ImageListEntity";
import { ListAnimals } from "./components/ListAnimals";

export function App() {
  const [images, setImages] = useState<ImageItemEntity[]>([]);
  const { getImages, data } = useImageContext();

  useEffect(() => {
    getImages();
  }, []);

  const handleClick = () => {
    const index = Math.floor(Math.random() * data.length);
    setImages((prevImages) => {
      return [...prevImages, data[index]];
    });
  };

  return (
    <div className="text-center p-10">
      <button
        className="border-2 border-amber-300 bg-amber-100 py-3 font-bold text-2xl my-5 w-full"
        onClick={handleClick}
      >
        Add Animal
      </button>
      <ListAnimals images={images} />
    </div>
  );
}
