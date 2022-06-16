import { useQuery } from "@apollo/client";
import {
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Card,
  CardContent,
  Divider,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { GET_BATCH_BY_ID } from '../../graphql/batch';
import { BatchInfoToolbar } from './batch-info-toolbar';
import { BatchInfoCard } from './batch-info-card'
import { SizeColorBatchInfo } from './size-color-info'
import { priceEnum, obpStatusEnum } from './constants/index';

export const BatchInfo = ({ id }) => {
  const { loading, error, data } = useQuery(GET_BATCH_BY_ID, {
    variables: {
      input: {
        id
      }
    }
  });

  if (loading) return <p>Loading...</p>;

  if (error) {
    return (<p>Error :(</p>)
  }
  console.log(data);
  console.log(data.getBatchById.BatchBillProcesses);
  return (
    <>
      <BatchInfoToolbar name={data.getBatchById.name} />

      <Grid
        container
        spacing={3}
      >
        <Grid
          item
          lg={4}
          md={6}
          xs={12}
        >
          <BatchInfoCard
            referencetype={data.getBatchById.Reference.type}
            start_date={data.getBatchById.start_date}
            status={data.getBatchById.status}
            amount={data.getBatchById.amount}
          />
        </Grid>
        <Grid
          item
          lg={8}
          md={6}
          xs={12}
        >
          <SizeColorBatchInfo sizecolorinfo={data.getBatchById.SizeColorBatches} />
        </Grid>
      </Grid>

      {
        data.getBatchById.BatchBillProcesses.map(({
          id,
          StepsReference,
          OperatorBillProcesses,
          price_to_get,
          price_to_pay
        }) => (
          <Accordion
            key={id}
            sx={{
              p: 2,
              m: 2
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: '33%', flexShrink: 0 }}>
                {StepsReference.steps_order}
                /
                {data.getBatchById.BatchBillProcesses.length}
              </Typography>
              <Typography
                variant='h6'
              >
                {StepsReference.Step.description}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box
                sx={{
                  alignItems: 'center',
                  display: 'flex',
                  justifyContent: 'space-around',
                  flexWrap: 'wrap',
                  m: -1
                }}
              >
                <Typography
                  sx={{ m: 1 }}
                  variant="h6"
                  style={{ color: '#008000' }}
                >
                  {priceEnum['price_to_get']}:
                  {' '}
                  {price_to_get}
                </Typography>
                <Typography
                  sx={{ m: 1 }}
                  variant="h6"
                  style={{ color: '#e53935' }}
                >
                  {priceEnum['price_to_pay']}:
                  {' '}
                  {price_to_pay}
                </Typography>
              </Box>
              <Box sx={{ pt: 2 }}>
                <Grid
                  container
                  spacing={3}
                >
                  {
                    OperatorBillProcesses.map(({
                      Operator,
                      status,
                      total_units_worked
                    }) => (
                      <Grid
                        item
                        lg={3}
                        md={6}
                        xs={12}
                      >
                        <Card
                          sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%'
                          }}
                        >
                          <CardContent>
                            <Box
                              sx={{
                                alignItems: 'center',
                                display: 'flex',
                                flexDirection: 'column'
                              }}
                            >
                              <Typography
                                color="textPrimary"
                                gutterBottom
                                variant="h5"
                              >
                                {`${Operator.name} ${Operator.last_name}`}
                              </Typography>
                              <Typography
                                color="textSecondary"
                                variant="body2"
                              >
                                {obpStatusEnum[status]}
                              </Typography>
                            </Box>
                          </CardContent>
                          <Divider />
                          <Box
                            sx={{
                              alignItems: 'center',
                              display: 'flex',
                              flexDirection: 'column'
                            }}
                          >
                            <Typography
                              color="textPrimary"
                              gutterBottom
                              variant="h6"
                            >
                              Unidades trabajadas:
                              {' '}
                              {total_units_worked}
                            </Typography>
                          </Box>
                        </Card>
                      </Grid>
                    ))
                  }
                </Grid>
              </Box>
            </AccordionDetails>
          </Accordion>
        ))
      }
    </>
  )
}
