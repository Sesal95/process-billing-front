import PropTypes from 'prop-types';
import { useContext } from 'react';
import moment from 'moment';
import { Box, Card, CardContent, Divider, Grid, Typography, Button } from '@mui/material';
import BatchContext from "../../contexts/batch-context";
import { statusEnum } from './constants/index'

export const BatchCard = ({ batch, ...rest }) => {
  const { setNewData } = useContext(BatchContext)

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
      {...rest}
    >
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pb: 3
          }}
        >
        </Box>
        <Typography
          align="center"
          color="textPrimary"
          gutterBottom
          variant="h5"
        >
          {batch.name}
        </Typography>
        <Typography
          align="center"
          color="textPrimary"
          variant="body1"
        >
          Referencia:
          {' '}
          {batch.Reference.type}
        </Typography>
        <Typography
          align="center"
          color="textPrimary"
          variant="body1"
        >
          Fecha inicio:
          {' '}
          {moment(batch.start_date).format('DD/MM/YYYY')}
        </Typography>
      </CardContent>
      <Box sx={{ flexGrow: 1 }} />
      <Divider />
      <Box sx={{ p: 2 }}>
        <Grid
          container
          spacing={2}
          sx={{ justifyContent: 'space-between' }}
        >
          <Grid
            item
            sx={{
              alignItems: 'center',
              display: 'flex'
            }}
          >
            <Typography
              color="textSecondary"
              display="inline"
              sx={{ pl: 1 }}
              variant="body2"
            >
              Total:
              {' '}
              {batch.amount}
            </Typography>
          </Grid>
          <Grid
            item
            sx={{
              alignItems: 'center',
              display: 'flex'
            }}
          >
            <Typography
              color="textSecondary"
              display="inline"
              sx={{ pl: 1 }}
              variant="body2"
            >
              {statusEnum[batch.status]}
            </Typography>
          </Grid>
          <Grid
            item
            sx={{
              alignItems: 'center',
              display: 'flex'
            }}
          >
            <Typography
              color="textSecondary"
              display="inline"
              sx={{ pl: 1 }}
              variant="body2"
            >
              <Button
                variant='text'
                onClick={() => { setNewData(batch.id, false) }}
              >
                Detalles
              </Button>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
}

BatchCard.propTypes = {
  batch: PropTypes.object.isRequired
};
