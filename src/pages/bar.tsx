import { FC } from 'react'
import {GetStaticProps} from 'next'
import {Box, Container} from "@mui/material";
import * as React from "react";
import { Table } from "../components";
import {Bar} from "../types";

export type BarsProps = {
    bar: Bar[]
}

const Bar:FC<BarsProps> = (data) => {

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
            Bar
            <Table bar={ data.bar }/>
        </Container>
    )
}


export default Bar


export const getStaticProps: GetStaticProps = async () => {
    const res = await fetch(`http://localhost:3000/api/bar`)
    const bar = await res.json()

    if (!bar) {
        return {
            notFound: true,
        }
    }
    return {
        props: { bar }, // will be passed to the page component as props
    }
}
