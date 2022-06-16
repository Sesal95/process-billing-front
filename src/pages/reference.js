import { useState, useEffect } from 'react';
import {
  Box,
} from '@mui/material';
import Head from 'next/head';
import ReferenceContext from "../contexts/reference-context";
import { DashboardLayout } from '../components/dashboard-layout';
import { AllReferences } from '../components/reference/all-references';
import { ReferenceInfo } from '../components/reference/reference-info';

const Reference = () => {

  useEffect(() => { });

  const [refInfo, setInfoReference] = useState({});
  const [references, setReferences] = useState(true);

  const setReferenceData = (ref, isRef) => {
    setInfoReference(ref);
    setReferences(isRef);
  }

  const RefInfoDataProvider = {
    setReferenceData,
  }
  console.log(refInfo)
  return (
    <>
      <ReferenceContext.Provider value={RefInfoDataProvider}>
        <Head>
          <title>
            Referencias
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
            references ? <AllReferences /> : <ReferenceInfo referencesteps={refInfo} />
          }
        </Box>
      </ReferenceContext.Provider>
    </>
  )
};

Reference.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Reference;
