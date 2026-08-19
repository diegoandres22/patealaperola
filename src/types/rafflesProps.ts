export interface Raffle {
  image: string;
  id: string;
  trophy: string;
  premium_ticket6: string;
  title: string;
  secondPrize: string;
  total_tickets: number;
  description: string;
  additionalPrize: string;
  tickets_sold_list: Array<number>;
  premium_ticket1: string;
  lottery_date: string;
  ticket_price: number;
  premium_ticket2: string;
  created_by: string;
  min_purchase: number;
  premium_ticket3: string;
  updated_by: string;
  raffle_status: number;
  premium_ticket4: string;
  created_at: string;
  state: boolean;
  premium_ticket5: string;
  updated_at: string;
}


export interface RafflesState {
  raffles: Raffle[];
  loading: boolean;
  error: string | null;
}

export interface RaffleDetailState {
  raffleDetail: Raffle | null;
  loading: boolean;
  error: string | null;
}

export interface RaffleDetailForm {
  id: string | undefined;
  raffle_status: number | undefined;
  // Antes el total se calculaba con la tasa BCV (bs); ahora la app trabaja
  // solo en $, con el precio real del ticket.
  ticketPrice: number | undefined;
}


export interface RaffleDataProps {
  description: string | undefined;
  id: string | undefined;
  ticketPrice: number | undefined;
  minPurchase: number | undefined;
  raffleStatus: number | undefined;
  trophy: string | undefined;
  secondPrize: string | undefined;
  additionalPrize: string | undefined;
  // La API devuelve null en los que el admin no marcó al crear la rifa
  // (ver PLP_API-FastApi/src/schemas/raffle_schema.py: Optional[int] = None).
  premiumTicket1: number | string | null | undefined;
  premiumTicket2: number | string | null | undefined;
  premiumTicket3: number | string | null | undefined;
  premiumTicket4: number | string | null | undefined;
  premiumTicket5: number | string | null | undefined;
  premiumTicket6: number | string | null | undefined;
  loading: boolean;
}
