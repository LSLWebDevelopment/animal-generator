import type { ImageItemEntity } from "../entities/ImageListEntity";
import { ShowAnimal } from "./ShowAnimal";

interface ListAnimalsProps {
  images: ImageItemEntity[];
}

export function ListAnimals({ images }: ListAnimalsProps) {
  const renderedAnimals = images.map(
    (animal: ImageItemEntity, index: number) => {
      return <ShowAnimal key={index} image={animal} />;
    }
  );

  return (
    <div className="flex justify-center items-center flex-wrap gap-10">
      {renderedAnimals}
    </div>
  );
}
