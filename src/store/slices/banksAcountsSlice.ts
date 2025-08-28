// store/slices/banksSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface BankAccount {
    id: string;
    pay_method: string;
    holder_name_cta: string;
    document_name: number | string;
    number_cta_1: number | string;
    number_cta_2: string;
    email_cta: string;
    is_active: boolean;
}

interface BanksState {
    banksList: BankAccount[];         // Todos los bancos activos
    selectedBank: BankAccount | null; // Banco seleccionado
    loading: boolean;                 // Estado de carga
    error: string | null;             // Mensaje de error
}

const initialState: BanksState = {
    banksList: [],
    selectedBank: null,
    loading: false,
    error: null,
};

const banksSlice = createSlice({
    name: "banks",
    initialState,
    reducers: {
        fetchBanksStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        setBanksList: (state, action: PayloadAction<BankAccount[]>) => {
            state.loading = false;
            state.banksList = action.payload.filter(bank => bank.is_active);
        },
        fetchBanksError: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        },
        selectBankById: (state, action: PayloadAction<string>) => {
            const bank = state.banksList.find(b => b.id === action.payload);
            state.selectedBank = bank || null;
        },
        resetSelectedBank: (state) => {
            state.selectedBank = null;
        }
    },
});

export const { fetchBanksStart, setBanksList, fetchBanksError, selectBankById, resetSelectedBank } = banksSlice.actions;
export default banksSlice.reducer;


// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { BanksAcounts } from "@/types/banksAcountsProps";

// const BanksAcountsVariabel: BanksAcounts[] = [
//     { id: 11, title: 'Banesco', Documento: 28305442, Telefono: 4127325491, Titular: 'Miguel banesco' },
//     { id: 12, title: 'Mercantil', Documento: 28305443, Telefono: 4127325492, Titular: 'Juan mercantil' },
//     { id: 13, title: 'Santander Rio', Documento: 28305442, Telefono: 4127325491, Titular: 'santander Villegas' },
//     { id: 14, title: 'Mercantil', Documento: 28305443, Telefono: 4127325492, Titular: 'Binance Pérez' },
//     { id: 15, title: 'Zelle', Documento: 28305442, Telefono: 4127325491, Titular: 'Miguel Zelle' },
//     { id: 16, title: 'Santander Rio', Documento: 28305442, Telefono: 4127325491, Titular: 'Banesco Panama' },
//     { id: 17, title: 'Bank of America', Documento: 28305443, Telefono: 4127325492, Titular: 'Bank of America' }
// ];

// const initialState: BanksAcounts = { id: 0, title: '', Documento: 0, Telefono: 0, Titular: '' };

// const banksAcountsSlice = createSlice({
//     name: "banksAcounts",
//     initialState,
//     reducers: {
//         selectAccount: (state, action: PayloadAction<number>) => {
//             const selectedAccount = BanksAcountsVariabel.find(account => account.id === action.payload);
//             return selectedAccount ? { ...state, ...selectedAccount } : state;
//         }
//     }
// });

// export const { selectAccount } = banksAcountsSlice.actions;
// export default banksAcountsSlice.reducer;
