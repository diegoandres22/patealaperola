export interface FormData {
    fullName: string;
    email: string;
    emailVerify: string;
    numberPhone: string;
    titularyCta: string;
    quantity: number;
    paymentMethod: string;
    receipt: File | null;
    transactionNumber: string;
}