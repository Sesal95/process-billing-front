import { useState, useEffect } from 'react';
import {
  Box,
} from '@mui/material';
import Head from 'next/head';
import BatchContext from "../contexts/batch-context";
import { DashboardLayout } from '../components/dashboard-layout';
import { AllBatches } from '../components/batch/all-batches';
import { BatchInfo } from '../components/batch/batch-info';

const Batch = () => {

  useEffect(() => { });

  const [idBatch, setIdBatch] = useState('');
  const [allbatches, setInfoBatch] = useState(true);

  const setNewData = (id, infoBatch) => {
    setIdBatch(id);
    setInfoBatch(infoBatch);
  }

  const BatchInfoData = {
    setNewData,
  }

  return (
    <>
      <BatchContext.Provider value={BatchInfoData}>
        <Head>
          <title>
            Lotes
          </title>
        </Head>

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            py: 8
          }}
        >
          {
            allbatches ? <AllBatches /> : <BatchInfo id={idBatch} />
          }
        </Box>
      </BatchContext.Provider>
    </>
  )
};

Batch.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Batch;
