// "use client"
// import React from 'react'
// import { Button, Form, Input } from '@heroui/react';
// import { addToast } from "@heroui/toast";
// import { IconTicket } from '@tabler/icons-react';

// export const PurchaseForm = () => {

//     return (
//         <div className=' w-full flex flex-col px-10 2xl:px-[10%]'>
//             <h4 className='text-3xl sm:mx-6'>Comprar Tickets</h4>

//             <Form
//                 className="w-full max-w-md flex flex-col gap-5 sm:m-6 mt-4 bg-slate-400/10 p-5 rounded-xl"
//                 onSubmit={() => {
//                     () =>
//                         addToast({
//                             title: "Compra realizada con éxito",
//                             description: "Dentro de las próximas 12 hs, soporte se contactará contigo",
//                             color: "success",
//                         })
//                 }}
//             >
//                 <Input
//                     isRequired
//                     errorMessage="Por favor ingresa un nombre valido"
//                     label=" Nombre y apellido "
//                     labelPlacement="outside"
//                     name="fullName"
//                     placeholder="Nombre y apellido"
//                     type="text"
//                 />
//                 <Input
//                     isRequired
//                     errorMessage="Por favor ingresa un email"
//                     label=" Email "
//                     labelPlacement="outside"
//                     name="email"
//                     placeholder="Email"
//                     type="email"
//                 />
//                 <Input
//                     isRequired
//                     errorMessage="Por favor ingresa de nuevo el email"
//                     label="Confirmar Email "
//                     labelPlacement="outside"
//                     name="emailVerify"
//                     placeholder="Reingresar Email"
//                     type="email"
//                 />
//                 <Input
//                     isRequired
//                     errorMessage="Por favor ingresa un número de teléfono válido"
//                     label="Número de teléfono "
//                     labelPlacement="outside"
//                     name="numberPhone"
//                     placeholder="+58 412 1234567 "
//                     type="text"

//                 />
//                 <Input
//                     isRequired
//                     errorMessage="Please enter a valid email"
//                     label="Titular de la cuenta desde donde se realiza el pago"
//                     labelPlacement="outside"
//                     name="titulariCta"
//                     placeholder="Nombre del titular"
//                     type="email"
//                     className='pt-2 sm:pt-0'
//                 />

//                 <div className="flex gap-2 m-auto">
//                     <Button color="primary" variant='shadow' className='font-semibold text-lg px-10' endContent={<IconTicket stroke={2} />}
//                         onClick={() => {
//                             addToast({
//                                 title: "Compra realizada con éxito",
//                                 description: "Dentro de las próximas 12 hs, soporte se contactará contigo",
//                                 color: "success",
//                                 timeout: 10000,
//                                 shouldShowTimeoutProgress: true,
//                             })
//                         }}>
//                         Comprar rifa
//                     </Button>

//                 </div>

//             </Form>


//         </div>
//     );
// };

"use client";
import React from 'react';
import { Button, Form, Input } from '@heroui/react';
import { addToast } from "@heroui/toast";
import { IconTicket } from '@tabler/icons-react';

export const PurchaseForm = () => {

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); 

        addToast({
            title: "Compra realizada con éxito",
            description: "Dentro de las próximas 12 hs, soporte se contactará contigo",
            color: "success",
        });
    };

    return (
        <div className='w-full flex flex-col px-10 2xl:px-[10%]'>
            <h4 className='text-3xl sm:mx-6'>Comprar Tickets</h4>

            <Form
                className="w-full max-w-md flex flex-col gap-5 sm:m-6 mt-4 bg-slate-400/10 p-5 rounded-xl"
                onSubmit={handleSubmit} // Aquí llamamos a handleSubmit
            >
                <Input
                    isRequired
                    errorMessage="Por favor ingresa un nombre valido"
                    label=" Nombre y apellido "
                    labelPlacement="outside"
                    name="fullName"
                    placeholder="Nombre y apellido"
                    type="text"
                />
                <Input
                    isRequired
                    errorMessage="Por favor ingresa un email"
                    label=" Email "
                    labelPlacement="outside"
                    name="email"
                    placeholder="Email"
                    type="email"
                />
                <Input
                    isRequired
                    errorMessage="Por favor ingresa de nuevo el email"
                    label="Confirmar Email "
                    labelPlacement="outside"
                    name="emailVerify"
                    placeholder="Reingresar Email"
                    type="email"
                />
                <Input
                    isRequired
                    errorMessage="Por favor ingresa un número de teléfono válido"
                    label="Número de teléfono "
                    labelPlacement="outside"
                    name="numberPhone"
                    placeholder="+58 412 1234567 "
                    type="text"
                />
                <Input
                    isRequired
                    errorMessage="Please enter a valid email"
                    label="Titular de la cuenta desde donde se realiza el pago"
                    labelPlacement="outside"
                    name="titularyCta" 
                    placeholder="Nombre del titular"
                    type="email"
                    className='pt-2 sm:pt-0'
                />

                <div className="flex gap-2 m-auto">
                    <Button
                        color="primary"
                        variant='shadow'
                        className='font-semibold text-lg px-10'
                        endContent={<IconTicket stroke={2} />}
                        onClick={() => {
                            addToast({
                                title: "Compra realizada con éxito",
                                description: "Dentro de las próximas 12 hs, soporte se contactará contigo",
                                color: "success",
                                timeout: 10000,
                                shouldShowTimeoutProgress: true,
                            });
                        }}
                    >
                        Comprar rifa
                    </Button>
                </div>

            </Form>
        </div>
    );
};
