import React from 'react';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button, Select, SelectItem, addToast } from '@heroui/react';
import { IconCopy, IconCreditCardPay } from '@tabler/icons-react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { selectAccount } from '@/store/slices/banksAcountsSlice';

export const PurchaseDataTable = ({ totalPrice }: { totalPrice: number | string }) => {
    const selectedAccount = useSelector((state: RootState) => state.BanksAcounts);
    const dispatch = useDispatch();

    const handleSelectChange = (paymentMethodId: number) => {
        dispatch(selectAccount(paymentMethodId)); 
    };

    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text).then(() => {
            addToast({
                title: "Texto copiado en el portapapeles"
            })
        }).catch(err => {
            console.error('Error al copiar al portapapeles:', err);
        });
    };

    return (
        <div className="flex flex-col w-full gap-4">
            <Select
                label="Método de pago"
                placeholder="Seleccionar"
                startContent={<IconCreditCardPay stroke={2} />}
                onChange={(e) => handleSelectChange(Number(e.target.value))}
                name="paymentMethod"
            >
                <SelectItem key="11" >Banesco</SelectItem>
                <SelectItem key="12" >Mercantil</SelectItem>
                <SelectItem key="13" >Santander Rio</SelectItem>
                <SelectItem key="14" >Binance</SelectItem>
                <SelectItem key="15" >Zelle</SelectItem>
                <SelectItem key="16" >Banesco Panama</SelectItem>
                <SelectItem key="17" >Bank of America</SelectItem>
            </Select>

            {selectedAccount.id !== 0 && (
                <Table aria-label="Datos de cuenta para pagar" color="default" selectionMode="single">
                    <TableHeader>
                        <TableColumn>Tipo</TableColumn>
                        <TableColumn>Datos</TableColumn>
                        <TableColumn>Acción</TableColumn>
                    </TableHeader>
                    <TableBody>
                        {[
                            { label: 'Documento', value: selectedAccount.Documento },
                            { label: 'Telefono', value: selectedAccount.Telefono },
                            { label: 'Titular', value: selectedAccount.Titular },
                            { label: 'Total', value: `${totalPrice} Bs` }
                        ].map((row, index) => (
                            <TableRow key={index}>
                                <TableCell>{row.label}</TableCell>
                                <TableCell>{row.value}</TableCell>
                                <TableCell>
                                    <Button
                                        isIconOnly
                                        aria-label="Copiar"
                                        variant="light"
                                        onClick={() => handleCopy(row.value.toString())}
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
