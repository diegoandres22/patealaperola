// src/services/raffleService.ts
import axios from "axios";
import { Raffle } from "@/types";


const BASE_URL = "https://plp-api-fastapi.onrender.com/raffle";

export const getRaffles = async (): Promise<Raffle[]> => {
  const { data } = await axios.get(`${BASE_URL}/all/`);
  return (data as { Rifas: Raffle[] }).Rifas;
};

// export const getRaffleById = async (id: string): Promise<Raffle> => {
//   const { data } = await axios.get(`${BASE_URL}/${id}`);
//   return data;
// };

// export const createRaffle = async (raffle: Partial<Raffle>): Promise<Raffle> => {
//   const { data } = await axios.post(`${BASE_URL}/new/`, raffle);
//   return data;
// };
