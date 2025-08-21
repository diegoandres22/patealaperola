import axios from "axios";
import { Raffle } from "@/types";


const BASE_URL = "https://plp-api-fastapi.onrender.com/raffle";

export const getRaffles = async (): Promise<Raffle[]> => {
  const { data } = await axios.get(`${BASE_URL}/all/`);
  return (data as { Rifas: Raffle[] }).Rifas;
};

export const getRaffleById = async (id: string): Promise<Raffle> => {
  const { data } = await axios.get(`${BASE_URL}/${id}`);
  return data as Raffle;
};

