import type { ImageItemEntity } from "../entities/ImageListEntity";
import heart from "../assets/svg/heart.svg";
import { useState } from "react";

interface ShowAnimalProps {
  image: ImageItemEntity;
}

export function ShowAnimal({ image }: ShowAnimalProps) {
  const [size, setSize] = useState(25);

  const handleSize = () => {
    setSize(size + 10);
  };

  return (
    <div className="relative" onClick={handleSize}>
      <img src={image.img} alt="Animal" className="inline-block" width={150} />
      <img
        src={heart}
        alt="Heart"
        className="absolute right-0 bottom-0"
        width={size}
      />
    </div>
  );
}
