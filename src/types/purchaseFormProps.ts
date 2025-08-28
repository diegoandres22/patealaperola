export interface FormData {
    id:string;
    fullName: string;
    email: string;
    numberPhone: string;
    titularyCta: string;
    quantity: number;
    receipt: File | null;
    transactionNumber: string;
}