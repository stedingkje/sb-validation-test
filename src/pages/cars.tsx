import {FC} from 'react'
import {GetStaticProps} from 'next'
import {Box, Container} from "@mui/material";
import * as React from "react";
import { Table } from "../components";
import {Car} from "../types";

export type CarsProps = {
    cars: Car[]
}

const Cars:FC<CarsProps> = (data) => {

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
            <Table cars={ data.cars }/>
        </Container>
    )
}


export default Cars


export const getStaticProps: GetStaticProps = async () => {
    const res = await fetch(`http://localhost:3000/api/car`)
    const cars = await res.json() as Car[]
    if (!cars) {
        return {
            notFound: true,
        }
    }
    return {
        props: { cars },
    }
}
