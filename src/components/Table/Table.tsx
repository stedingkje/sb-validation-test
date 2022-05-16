import { ReactElement } from 'react'
import { useRouter } from 'next/router';
import { Table as BasicTable, TableContainer, Paper, TableHead, TableCell, TableRow,TableBody } from '@mui/material'
import { Person, Car, Bar } from '../../types'

export type TableProps = {
    cars?: Car[]
    person?: Person[]
    bar?: Bar[]
}

export const Table = (data: TableProps): ReactElement<unknown> => {

    const { pathname } = useRouter();
    let tableHead: string[] = []
    let tableData: Car[] | Bar[] | Person[] | undefined = undefined

    switch (pathname.replace('/','')) {
        case 'cars':
            tableHead = ['Brand','Type','Mileage', 'Extras']
            tableData = data.cars
            break;
        case 'persons':
            tableHead = ['Name', 'Age', 'Siblings', 'Metadata', 'Active']
            tableData = data.person
            break;
        case 'bar':
            tableHead = ['name', 'address', 'drinks']
            tableData = data.bar
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
                    {tableData?.map((item, index) => (
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
