"use client"
import React, { useEffect } from 'react';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button, Select, SelectItem, addToast } from '@heroui/react';
import { IconCopy, IconCreditCardPay } from '@tabler/icons-react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store';
import { selectBankById } from '@/store/slices/banksAcountsSlice';

interface PurchaseDataTableProps {
    totalPrice: number | string;
    onPaymentMethodChange: (method: string) => void; // callback para el padre
    paymentMethod: string;                            // estado del padre
    setPaymentMethod: (method: string) => void;       // setter del padre
}

export const PurchaseDataTable: React.FC<PurchaseDataTableProps> = ({
    totalPrice,
    onPaymentMethodChange,
    paymentMethod,
    setPaymentMethod
}) => {
    const { banksList, selectedBank, loading } = useSelector((state: RootState) => state.BanksAcounts);
    const dispatch = useDispatch<AppDispatch>();

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selected = e.target.value;
        setPaymentMethod(selected);       // actualiza estado del padre
        onPaymentMethodChange(selected);  // callback si el padre lo necesita
    };

    const handleCopy = (text: string | number) => {
        if (!text) return;
        navigator.clipboard.writeText(text.toString())
            .then(() => addToast({ title: "Texto copiado en el portapapeles" }))
            .catch(err => console.error('Error al copiar al portapapeles:', err));
    };

    useEffect(() => {

    }, [dispatch, loading, selectedBank]);
    return (
        <div className="flex flex-col w-full gap-4">
            <Select
                isRequired
                selectedKeys={paymentMethod ? [paymentMethod] : []}  
                label="Método de pago"
                placeholder="Seleccionar"
                startContent={<IconCreditCardPay stroke={2} />}
                onChange={handleSelectChange}
                name="paymentMethod"
                isLoading={loading}
            >
                {banksList.map(bank => (
                    <SelectItem
                        key={bank.pay_method}
                        onClick={() => dispatch(selectBankById(bank.id))}
                    >
                        {bank.pay_method}
                    </SelectItem>
                ))}
            </Select>

            {selectedBank && (
                <Table aria-label="Datos de cuenta para pagar" color="default" selectionMode="single">
                    <TableHeader>
                        <TableColumn>Tipo</TableColumn>
                        <TableColumn>Datos</TableColumn>
                        <TableColumn>Acción</TableColumn>
                    </TableHeader>
                    <TableBody>
                        {[
                            { label: 'Titular', value: selectedBank.holder_name_cta },
                            { label: 'Documento', value: selectedBank.document_name },
                            { label: 'Telefono', value: selectedBank.number_cta_1 },
                            { label: 'Email', value: selectedBank.email_cta },
                            { label: 'Número', value: selectedBank.number_cta_2 },
                            { label: 'Total', value: `${totalPrice} Bs` },
                        ].map((row, index) => (
                            <TableRow key={index}>
                                <TableCell>{row.label}</TableCell>
                                <TableCell>{row.value}</TableCell>
                                <TableCell>
                                    <Button
                                        isIconOnly
                                        aria-label="Copiar"
                                        variant="light"
                                        onClick={() => handleCopy(row.value ?? '')}
                                    >
                                        <IconCopy stroke={1} />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            )}
        </div>
    );
};
