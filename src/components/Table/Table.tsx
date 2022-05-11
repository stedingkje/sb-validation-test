import { ReactElement } from 'react'
import { useRouter } from 'next/router';
import { Table as BasicTable, TableContainer, Paper, TableHead, TableCell, TableRow,TableBody } from '@mui/material'
import { Person, Car, Bar } from '../../types'

export type TableProps = {
    car?: Car[]
    person?: Person[]
    bar?: Bar[]
}

export const Table = (data: TableProps): ReactElement<unknown> => {

    const { pathname } = useRouter();
    let tableHead: string[] = []
    let tableData = []

    switch (pathname.replace('/','')) {
        case 'cars':
            tableHead = ['Brand','Type','Mileage', 'Extras']
            tableData = data?.car?.data
            break;
        case 'persons':
            tableHead = ['Name', 'Age', 'Siblings', 'Metadata', 'Active']
            tableData = data?.person?.data
            break;
        case 'bar':
            tableHead = ['name', 'address', 'drinks']
            tableData = data?.bar?.data
            break;
    }

    return (
        <TableContainer component={Paper}>
            <BasicTable sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {tableHead.map((title : string) => (
                            <TableCell>{title}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tableData.map((item : TableProps, index:number) => (
                        <TableRow
                            key={index}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            {Object.entries(item).map(([key, value]) => (
                                <TableCell id={key}>{value}</TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </BasicTable>
        </TableContainer>
    )
}
