import { Button, Form, Input } from '@heroui/react';
import React, { useState } from 'react';

export const ValidateTicket = () => {
    const [action, setAction] = useState<string | null>(null);

    return (
        <div className="w-full max-w-md flex sm:mx-6 xl:mx-0 mb-6 bg-slate-400/10 p-5 rounded-xl flex-col max-h-52 xl:max-w-80">
            <h4 className="text-2xl mb-3">Validar Tickets comprados</h4>

            <Form
                className="w-full max-w-xs flex flex-col gap-4 "
                onReset={() => setAction(null)}
                onSubmit={(e) => {
                    e.preventDefault();
                    const data = Object.fromEntries(new FormData(e.currentTarget));

                    setAction(` ${JSON.stringify(data.email)}`);
                }}
            >

                <Input
                    isRequired
                    errorMessage="Por favor ingresar un email utilizado en la compra"
                    label="Ingresar email usado en la compra"
                    labelPlacement="outside"
                    name="email"
                    placeholder="Ingresa un email"
                    type="email"
                />
                <div className="flex gap-2">
                    <Button color="primary" type="submit">
                        Validar
                    </Button>
                    <Button type="reset" variant="faded" color='danger'>
                        Borrar
                    </Button>
                </div>
                {action && (
                    <div className="text-small text-default-500 text-nowrap">
                        Tickets de: {action}
                        <div className="flex">
                            <p className='m-2 font-semibold border-1 rounded-lg w-max p-1'>1243</p>
                            <p className='m-2 font-semibold border-1 rounded-lg w-max p-1'>2356</p>
                            <p className='m-2 font-semibold border-1 rounded-lg w-max p-1'>5672</p>
                            <p className='m-2 font-semibold border-1 rounded-lg w-max p-1'>6231</p>
                        </div>
                    </div>
                )}
            </Form>
        </div>
    );
};
