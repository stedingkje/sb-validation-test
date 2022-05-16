import { FC } from 'react';
import { GetStaticProps } from 'next';
import { Box, Container } from '@mui/material';
import * as React from 'react';
import {Person, ErrorMessages} from '../types';
import { Table } from '../components';

export type PersonWrapper = {
    type: 'person',
    person: Person[]
}

export type ErrorMessageWrapper = {
    type: 'error-message',
    error: ErrorMessages
}

export type Response = PersonWrapper | ErrorMessageWrapper

export type PersonsProps = {
    response: Response;
};

const Persons: FC<PersonsProps> = (data) => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 5,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      ></Box>
      Persons
       {data.response.type === 'error-message' &&
          data.response.error.issues.map((error) => <li>{error.message}</li>)}
        {data.response.type === 'person' && <Table person={data.response.person} />}
    </Container>
  );
};

export default Persons;

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`http://localhost:3000/api/person`);
  let response:Response;
  let json = await res.json()

    if(res.status === 200) {
        response = {type: 'person', person: json}
  } else {
        response = {type: 'error-message', error: json}
  }

  return { props: { response } };
};


