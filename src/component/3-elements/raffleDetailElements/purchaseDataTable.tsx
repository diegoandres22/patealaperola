import React from 'react'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button } from '@heroui/react'
import { IconCopy } from '@tabler/icons-react'

export const PurchaseDataTable = () => {
    return (
        <Table aria-label="Datos de cuenta para pagar">
            <TableHeader>
                <TableColumn>Tipo</TableColumn>
                <TableColumn>Datos</TableColumn>
                <TableColumn>Acción</TableColumn>
            </TableHeader>
            <TableBody>
                <TableRow key="1">
                    <TableCell>Documento</TableCell>
                    <TableCell>28.305.442</TableCell>
                    <TableCell>
                        <Button isIconOnly aria-label="Copiar" variant="light">
                            <IconCopy stroke={1} />
                        </Button>
                    </TableCell>
                </TableRow>
                <TableRow key="2">
                    <TableCell>Telefono</TableCell>
                    <TableCell>04127325491</TableCell>
                    <TableCell>
                        <Button isIconOnly aria-label="Copiar" variant="light">
                            <IconCopy stroke={1} />
                        </Button>
                    </TableCell>
                </TableRow>
                <TableRow key="3">
                    <TableCell>Titular</TableCell>
                    <TableCell>Miguel Villegas</TableCell>
                    <TableCell>
                        <Button isIconOnly aria-label="Copiar" variant="light">
                            <IconCopy stroke={1} />
                        </Button>
                    </TableCell>
                </TableRow>
                <TableRow key="4">
                    <TableCell>Total</TableCell>
                    <TableCell>260</TableCell>
                    <TableCell>
                        <Button isIconOnly aria-label="Copiar" variant="light">
                            <IconCopy stroke={1} />
                        </Button>
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    )
}
