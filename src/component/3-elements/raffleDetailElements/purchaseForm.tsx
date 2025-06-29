"use client";

import React, { useState } from "react";
import { Button, Form, Input, NumberInput, Select, SelectItem } from "@heroui/react";
import { addToast } from "@heroui/toast";
import { IconCreditCardPay, IconTicket } from "@tabler/icons-react";
import { FormData } from '@/types';
import { PurchaseDataTable } from "./purchaseDataTable";



export const PurchaseForm: React.FC = () => {
    // const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [formData, setFormData] = useState<FormData>({
        fullName: "",
        email: "",
        emailVerify: "",
        numberPhone: "",
        titularyCta: "",
        quantity: 2,
        paymentMethod: "",
        receipt: null,
        transactionNumber: "",
    });

    // const validateForm = (data: FormData) => {
    //     const newErrors: { [key: string]: string } = {};

    //     // Validar los campos obligatorios
    //     if (!data.fullName) newErrors.fullName = "Por favor ingresa un nombre válido";
    //     if (!data.email) newErrors.email = "Por favor ingresa un email";
    //     if (data.email !== data.emailVerify)
    //         newErrors.emailVerify = "Los emails no coinciden";
    //     if (!data.numberPhone) newErrors.numberPhone = "Por favor ingresa un número de teléfono válido";
    //     if (!data.titularyCta) newErrors.titularyCta = "Por favor ingresa el titular de la cuenta";
    //     if (!data.quantity || data.quantity <= 0)
    //         newErrors.quantity = "Por favor ingresa un número de tickets válido";
    //     if (!data.paymentMethod) newErrors.paymentMethod = "Por favor selecciona un método de pago";
    //     if (!data.transactionNumber) newErrors.transactionNumber = "Por favor ingresa un número de operación o referencia";
    //     if (!data.receipt) newErrors.receipt = "Por favor carga un comprobante";

    //     return newErrors;
    // };

    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;

        // Verificamos si el input es de tipo "file"
        if (type === "file" && e.target instanceof HTMLInputElement) {
            const files = e.target.files ? e.target.files[0] : null;
            setFormData((prevState) => ({
                ...prevState,
                [name]: files,
            }));
        } else {
            setFormData((prevState) => ({
                ...prevState,
                [name]: value,
            }));
        }
    };

    const onQuantityChange = (value: number) => {
        setFormData((prevState) => ({
            ...prevState,
            quantity: value,
        }));
    };

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        addToast({
            title: "Compra realizada con éxito",
            description: "Dentro de las próximas 12 hs, soporte se contactará contigo",
            color: "success",
            timeout: 10000,
            shouldShowTimeoutProgress: true,
        });
        // const validationErrors = validateForm(formData);

        // if (Object.keys(validationErrors).length > 0) {
        //     setErrors(validationErrors);
        //     return;
        // }

        setFormData({
            fullName: "",
            email: "",
            emailVerify: "",
            numberPhone: "",
            titularyCta: "",
            quantity: 2,
            paymentMethod: "",
            receipt: null,
            transactionNumber: "",
        })
        setErrors({});

    };

    return (
        <div className="w-full flex flex-col px-10 2xl:px-[10%] items-center">
            <h4 className="text-3xl sm:mx-6">Comprar Tickets</h4>

            <Form
                className="w-full max-w-lg flex flex-col gap-5 sm:m-6 mt-4 bg-slate-400/10 p-5 rounded-xl"
                onSubmit={onSubmit}
            >
                <Input
                    isRequired
                    errorMessage={errors.fullName}
                    label="Nombre y apellido"
                    labelPlacement="outside"
                    name="fullName"
                    value={formData.fullName}
                    onChange={onChange}
                    placeholder="Nombre y apellido"
                    type="text"
                />
                <Input
                    isRequired
                    errorMessage={errors.email}
                    label="Email"
                    labelPlacement="outside"
                    name="email"
                    value={formData.email}
                    onChange={onChange}
                    placeholder="Email"
                    type="email"
                />
                <Input
                    isRequired
                    errorMessage={errors.emailVerify}
                    label="Confirmar Email"
                    labelPlacement="outside"
                    name="emailVerify"
                    value={formData.emailVerify}
                    onChange={onChange}
                    placeholder="Reingresar Email"
                    type="email"
                />
                <Input
                    isRequired
                    errorMessage={errors.numberPhone}
                    label="Número de teléfono"
                    labelPlacement="outside"
                    name="numberPhone"
                    value={formData.numberPhone}
                    onChange={onChange}
                    placeholder="+58 412 1234567"
                    type="text"
                />
                <Input
                    isRequired
                    errorMessage={errors.titularyCta}
                    label="Titular de la cuenta desde donde se realiza el pago"
                    labelPlacement="outside"
                    name="titularyCta"
                    value={formData.titularyCta}
                    onChange={onChange}
                    placeholder="Nombre del titular"
                    type="text"
                />
                <NumberInput
                    value={formData.quantity}
                    minValue={2}
                    maxValue={10000}
                    label="Número de tickets a comprar"
                    labelPlacement="inside"
                    name="quantity"
                    onValueChange={onQuantityChange}
                    errorMessage={errors.quantity}
                />
                <Select
                    label="Método de pago"
                    placeholder="Seleccionar"
                    startContent={<IconCreditCardPay stroke={2} />}
                    name="paymentMethod"
                    value={formData.paymentMethod}
                    onChange={onChange}
                    errorMessage={errors.paymentMethod}
                >
                    <SelectItem key={0}>Banesco</SelectItem>
                    <SelectItem key={5}>Mercantil</SelectItem>
                    <SelectItem key={2}>Zelle</SelectItem>
                    <SelectItem key={3}>Santander Rio</SelectItem>
                    <SelectItem key={4}>Binance</SelectItem>
                    <SelectItem key={6}>Banesco Panama</SelectItem>
                    <SelectItem key={7}>Bank of America</SelectItem>
                </Select>

                <PurchaseDataTable></PurchaseDataTable>

                <Input
                    isRequired
                    label="Cargar comprobante"
                    type="file"
                    name="receipt"
                    onChange={onChange}
                    errorMessage={errors.receipt}
                />

                <Input
                    isRequired
                    errorMessage={errors.transactionNumber}
                    label="Número de operación o referencia"
                    labelPlacement="outside"
                    name="transactionNumber"
                    value={formData.transactionNumber}
                    onChange={onChange}
                    placeholder="Pegar número referencia"
                    type="text"
                />
                <div className=" flex gap-2 items-center">
                    <strong className="text-xl">Total compra : 389,21 bs</strong>
                </div>

                <div className="flex gap-2 m-auto">
                    <Button
                        color="primary"
                        variant="shadow"
                        className="font-semibold text-lg px-10"
                        endContent={<IconTicket stroke={2} />}
                        type="submit"
                    >
                        Comprar rifa
                    </Button>
                </div>
            </Form>
        </div>
    );
};
