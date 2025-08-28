// store/services/banksService.ts
import { AppDispatch } from "@/store";
import { fetchBanksStart, setBanksList, fetchBanksError } from "../slices/banksAcountsSlice";

export const fetchBanks = () => async (dispatch: AppDispatch) => {
    dispatch(fetchBanksStart()); // Activa loading y limpia error
    try {
        const res = await fetch("https://plp-api-fastapi.onrender.com/bank-accounts/");
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        dispatch(setBanksList(data));
    } catch (error: string | unknown) {
        dispatch(fetchBanksError((error as Error).message || "Error desconocido al cargar bancos"));
    }
};
