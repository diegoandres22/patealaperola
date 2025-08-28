"use client";

import React, { useEffect, useState } from "react";
import { Button, Form, Input, NumberInput } from "@heroui/react";
import { addToast } from "@heroui/toast";
import { IconTicket } from "@tabler/icons-react";
import { FormData, RaffleDetailForm } from '@/types';
import { AppDispatch, RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import { PurchaseDataTable } from "./purchaseDataTable";
import { createNewPurchase } from "@/store/services/newPurchaseService";
import { fetchBanks } from "@/store/services/bankAcountsService";
import { resetSelectedBank } from "@/store/slices/banksAcountsSlice";

export const PurchaseForm: React.FC<RaffleDetailForm> = ({ id }) => {
    const dispatch = useDispatch<AppDispatch>();
    const rateBcv = useSelector((state: RootState) => state.RateBcv.price);
    const { loading, success, error } = useSelector((state: RootState) => state.purchase);

    const [paymentMethod, setPaymentMethod] = useState<string>("");
    const initialFormData: FormData = {
        id: id || "",
        fullName: "",
        email: "",
        numberPhone: "",
        titularyCta: "",
        quantity: 2,
        receipt: null,
        transactionNumber: "",
    };
    const [formData, setFormData] = useState<FormData>(initialFormData);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [totalPrice, setTotalPrice] = useState<number>(0);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, type } = e.target;

        if (type === "file") {
            const files = (e.target as HTMLInputElement).files;
            const file = files ? files[0] : null;

            if (file) {
                const maxSizeMB = 5; // tamaño máximo 5MB
                const allowedTypes = ["application/pdf", "image/jpeg", "image/png"];

                if (!allowedTypes.includes(file.type)) {
                    addToast({ title: "Tipo de archivo no permitido. Solo PDF, JPG o PNG", color: "danger" });
                    setFormData(prev => ({ ...prev, [name]: null }));
                    return;
                }

                if (file.size > maxSizeMB * 1024 * 1024) {
                    addToast({ title: `Archivo demasiado grande, máximo ${maxSizeMB}MB`, color: "danger" });
                    setFormData(prev => ({ ...prev, [name]: null }));
                    return;
                }
            }

            setFormData(prev => ({
                ...prev,
                [name]: file
            }));
        } else {
            const value = (e.target as HTMLInputElement).value;
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };


    useEffect(() => {
        setTotalPrice(Math.round(rateBcv * formData.quantity * 100) / 100);
    }, [formData.quantity, rateBcv]);

    // Mostrar toast cuando la compra sea exitosa
    useEffect(() => {
        dispatch(fetchBanks())
        if (success) {
            addToast({
                title: "Compra realizada con éxito",
                description: "Dentro de las próximas 12 hs, soporte se contactará contigo",
                color: "success",
                timeout: 10000,
                shouldShowTimeoutProgress: true,
            });
        }
    }, [success, dispatch]);

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        dispatch(
            createNewPurchase({
                buyer_email: formData.email,
                raffle_id: id || formData.id,
                ticket_count: formData.quantity,
                payment_method: paymentMethod,
                payment_reference: formData.transactionNumber,
                full_name: formData.fullName,
                phone_number: formData.numberPhone,
                holder_cta_bank: formData.titularyCta,
                file: formData.receipt,
            })
        );

        // Resetear formulario
        setFormData(initialFormData);
        setPaymentMethod("");
        setErrors({});
        dispatch(resetSelectedBank());
    };

    const totalPriceFormatted = totalPrice.toFixed(2);

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
                    onChange={handleInputChange}
                    placeholder="Nombre y apellido"
                    type="text"
                    max={50}
                />
                <Input
                    isRequired
                    errorMessage={errors.email}
                    label="Email"
                    labelPlacement="outside"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    type="email"
                    max={50}

                />
                <Input
                    isRequired
                    errorMessage={errors.numberPhone}
                    label="Número de teléfono"
                    labelPlacement="outside"
                    name="numberPhone"
                    value={formData.numberPhone}
                    onChange={handleInputChange}
                    placeholder="+58 412 1234567"
                    type="text"
                    max={50}

                />
                <Input
                    isRequired
                    errorMessage={errors.titularyCta}
                    label="Titular de la cuenta desde donde se realiza el pago"
                    labelPlacement="outside"
                    name="titularyCta"
                    value={formData.titularyCta}
                    onChange={handleInputChange}
                    placeholder="Nombre del titular"
                    type="text"
                    max={50}

                />
                <NumberInput
                    value={formData.quantity}
                    minValue={2}
                    maxValue={10000}
                    label="Número de tickets a comprar"
                    labelPlacement="inside"
                    name="quantity"
                    onValueChange={value => setFormData(prev => ({ ...prev, quantity: value }))}
                    errorMessage={errors.quantity}

                />
                <PurchaseDataTable

                    totalPrice={totalPriceFormatted}
                    onPaymentMethodChange={setPaymentMethod}
                    setPaymentMethod={setPaymentMethod}
                    paymentMethod={paymentMethod}
                />
                <Input
                    isRequired
                    label="Cargar comprobante"
                    type="file"
                    name="receipt"
                    accept=".pdf, .jpg, .jpeg, .png"
                    maxLength={5}
                    max={5}
                    onChange={handleInputChange}
                    errorMessage={errors.receipt}
                    
                />
                <Input
                    isRequired
                    errorMessage={errors.transactionNumber}
                    label="Número de operación o referencia"
                    labelPlacement="outside"
                    name="transactionNumber"
                    value={formData.transactionNumber}
                    onChange={handleInputChange}
                    placeholder="Pegar número referencia"
                    type="text"
                    max={50}

                />

                <div className="flex gap-2 items-center">
                    <strong className="text-xl">
                        Total compra: {totalPriceFormatted} bs
                    </strong>
                </div>

                <div className="flex gap-2 m-auto flex-col">
                    <Button
                        color="primary"
                        variant="shadow"
                        className="font-semibold text-lg px-10"
                        endContent={<IconTicket stroke={2} />}
                        type="submit"
                        isLoading={loading}
                    >
                        Comprar rifa
                    </Button>
                    {error && <p className="text-red-500 mt-2">❌ {error}</p>}
                </div>
            </Form>
        </div>
    );
};

