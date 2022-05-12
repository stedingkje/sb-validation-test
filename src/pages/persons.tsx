import { ReactElement } from 'react';
import { GetStaticProps } from 'next';
import { Box, Container } from '@mui/material';
import * as React from 'react';
import { Person, ErrorMessage } from '../types';
import { Table } from '../components';

const Persons = (data: Person[] | ErrorMessage): ReactElement<unknown> => {
  const datas = data?.data;
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
      {datas.issues &&
        datas.issues.map((error: any) => <li>{error.message}</li>)}
      {!datas.issues && <Table person={data} />}
    </Container>
  );
};

export default Persons;

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch(`http://localhost:3000/api/person`);
  const data = await res.json();
  console.log(data);
  if (!data) {
    return { notFound: true };
  }
  return { props: { data } };
};
