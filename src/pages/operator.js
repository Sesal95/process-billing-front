import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { OperatorList } from '../components/operator/operator-list';
import { OperatorToolbar } from '../components/operator/operator-toolbar';
import { DashboardLayout } from '../components/dashboard-layout';
import { customers } from '../__mocks__/customers';

const Operator = () => (
  <>
    <Head>
      <title>
        Operadores
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <OperatorToolbar />
        <Box sx={{ mt: 3 }}>
          <OperatorList customers={customers} />
        </Box>
      </Container>
    </Box>
  </>
);

Operator.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Operator;
