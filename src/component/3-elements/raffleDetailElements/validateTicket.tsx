"use client"

// Los componentes de HeroUI usan React Context, que solo funciona en
// componentes de cliente. Sin esta directiva el servidor falla con
// "createContext only works in Client Components".
import React, { useState } from 'react';
import { Button, Form, Input } from '@heroui/react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store';
import { fetchTicketsByEmail } from '@/store/services/purchaseService';
import { clearTicketsState } from '@/store/slices/ticketsValidateByEmailSlice';
import { ValidateTicketProps } from '@/types';

export const ValidateTicket: React.FC<ValidateTicketProps> = ({ id }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error, data } = useSelector(
    (state: RootState) => state.ticketsValidateByEmail
  );

  const [email, setEmail] = useState<string>('');
  const [hasSearched, setHasSearched] = useState<boolean>(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;
    dispatch(fetchTicketsByEmail(email));
    setHasSearched(true);
  };

  const onReset = () => {
    setEmail('');
    setHasSearched(false);
    dispatch(clearTicketsState());
  };

  const currentRaffleTickets = data.filter((t) => t.raffle_id === id);
  const otherRaffles = data.filter((t) => t.raffle_id !== id);

  return (
    <div className="w-full max-w-md max-h-[500px] sm:max-h-96 flex sm:mx-6 xl:mx-0 mb-6 bg-slate-400/10 p-5 rounded-xl flex-col xl:h-auto xl:max-w-80">
      <h4 className="text-2xl mb-3 font-semibold">Validar Tickets Comprados</h4>
      <p className="text-xs text-gray-400 mb-3">
        Tus números aparecen aquí solo después de que tu compra sea aprobada por el equipo de Patea la Perola. Si acabas de comprar, espera la confirmación antes de validar.
      </p>

      <Form className="w-full max-w-xs flex flex-col gap-4" onSubmit={onSubmit} onReset={onReset}>
        <Input
          isRequired
          errorMessage="Por favor ingresa un email usado en la compra"
          label="Email de compra"
          labelPlacement="outside"
          name="email"
          placeholder="Ingresa un email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="flex gap-2">
          <Button color="primary" type="submit" isLoading={loading}>
            Validar
          </Button>
          <Button type="reset" variant="faded" color="danger" disabled={loading}>
            Borrar
          </Button>
        </div>
      </Form>

      {hasSearched && (
        <div className="mt-4 overflow-auto">
          <p className="text-sm text-gray-400 mb-2">
            Tickets encontrados para: <strong>{email}</strong>
          </p>

          {currentRaffleTickets.length > 0 ? (
            currentRaffleTickets.map((raffle) => (
              <div key={raffle.raffle_id} className="mb-3 ">
                <p className="font-semibold mb-1">Rifa actual:</p>
                <div className="flex flex-wrap gap-2 ">
                  {raffle.ticket_numbers.map((num) => (
                    <p
                      key={num}
                      className="m-1 font-semibold border rounded-lg px-2 py-1 bg-white text-black shadow-sm"
                    >
                      {num}
                    </p>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="text-sm text-yellow-600">
              <p className="flex gap-1">
                {loading && <span>Buscando</span>}
                {!loading && <span>No se encontraron</span>}
                tickets para esta rifa.
              </p>
              {!loading && (
                <p className="text-xs text-gray-400 mt-1">
                  Recuerda: los tickets solo aparecen aquí una vez que tu compra fue aprobada. Si tu compra está pendiente de revisión, todavía no va a salir.
                </p>
              )}
            </div>
          )}

          {otherRaffles.length > 0 && (
            <div className="mt-3 p-2 bg-yellow-100 rounded-md border-l-4 border-yellow-400">
              <p className="text-sm text-yellow-800">
                También se encontraron números comprados en otras rifas.
              </p>
            </div>
          )}

          {error && <p className="text-sm text-red-600 mt-2">{error}</p>}
        </div>
      )}
    </div>
  );
};
