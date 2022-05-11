import { ReactElement } from 'react'
import {GetStaticProps} from 'next'
import {Box, Container} from "@mui/material";
import * as React from "react";
import { Table } from "../components";
import {Bar} from "../types";

const Bar = (data: Bar[]): ReactElement<unknown> => {

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
            <Table bar={ data }/>
        </Container>
    )
}


export default Bar


export const getStaticProps: GetStaticProps = async (context) => {
    const res = await fetch(`http://localhost:3000/api/bar`)
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
