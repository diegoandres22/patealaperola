import axios from "axios";
import { Raffle } from "@/types";


const API_URL = process.env.NEXT_PUBLIC_API_URL + "/raffle";


export const getRaffles = async (): Promise<Raffle[]> => {
  const { data } = await axios.get(`${API_URL}/all/`);

  const rifas = (data as { Rifas: Raffle[] }).Rifas || [];

  const activas = rifas.filter((raffle) => raffle.state === true);

  return activas;
};

export const getRaffleById = async (id: string): Promise<Raffle> => {
  const { data } = await axios.get(`${API_URL}/${id}`);
  return data as Raffle;
};

