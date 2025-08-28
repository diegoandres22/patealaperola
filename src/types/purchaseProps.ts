export interface FormData {
    id: string;
    fullName: string;
    email: string;
    numberPhone: string;
    titularyCta: string;
    quantity: number;
    receipt: File | null;
    transactionNumber: string;
}
export interface PurchasePayload {
    buyer_email: string;
    raffle_id: string;
    ticket_count: number;
    payment_method: string;
    payment_reference: string;
    full_name: string;
    phone_number: string;
    holder_cta_bank: string;
    file: File | null;
}
export interface ValidateTicketProps {
  id: string | undefined; 
}

export interface TicketByRaffle {
  raffle_id: string;
  ticket_numbers: number[];
}

export interface TicketsValidateByEmailState {
  loading: boolean;
  error: string | null;
  data: TicketByRaffle[];
}