import { ReactElement } from 'react'
import {GetStaticProps} from 'next'
import {Box, Container} from "@mui/material";
import * as React from "react";
import { Table } from "../components";
import {Car} from "../types";

const Cars = (data: Car[]): ReactElement<unknown> => {

    return (
        <Container maxWidth='lg'>
            <Box
                sx={{
                    my: 5,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
            </Box>
            Cars
            <Table car={ data }/>
        </Container>
    )
}


export default Cars


export const getStaticProps: GetStaticProps = async (context) => {
    const res = await fetch(`http://localhost:3000/api/car`)
    const data = await res.json()

    if (!data) {
        return {
            notFound: true,
        }
    }
    return {
        props: { data }, // will be passed to the page component as props
    }
}
