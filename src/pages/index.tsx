import * as React from 'react';
import type { NextPage } from 'next';
import { Container, Box } from '@mui/material';

const Home: NextPage = () => {
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
          test
      </Container>
  );
};

export default Home;
