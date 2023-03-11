import { Housing } from "../types/housing";

const jsonFilePath = "./data.json";
export const getHousings = async (): Promise<Housing[]> => {
  const getData = async (): Promise<Housing[]> => {
    const { housings } = await fetch(jsonFilePath).then((res) => res.json());
    return housings;
  };
  return new Promise((resolve) => setTimeout(() => resolve(getData()), Math.random() * (1500 - 100) + 100));
};
