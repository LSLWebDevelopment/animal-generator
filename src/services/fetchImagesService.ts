import bird from "../assets/svg/bird.svg";
import cat from "../assets/svg/cat.svg";
import cow from "../assets/svg/cow.svg";
import dog from "../assets/svg/dog.svg";
import gator from "../assets/svg/gator.svg";
import horse from "../assets/svg/horse.svg";
import type { ImageItemEntity } from "../entities/ImageListEntity";

export function fetchImagesService(): Promise<ImageItemEntity[]> {
  const data = [
    {
      id: 1,
      img: bird,
    },
    {
      id: 2,
      img: cat,
    },
    {
      id: 3,
      img: cow,
    },
    {
      id: 4,
      img: dog,
    },
    {
      id: 5,
      img: gator,
    },
    {
      id: 6,

      img: horse,
    },
  ];

  return Promise.resolve(data);
}
