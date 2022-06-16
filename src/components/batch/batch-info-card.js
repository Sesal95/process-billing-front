import {
  Box,
  Card,
  CardContent,
  Divider,
  Typography
} from '@mui/material';
import moment from 'moment';
import { statusEnum } from './constants/index'

export const BatchInfoCard = (props) => (
  <Card {...props}>
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
          {props.referencetype}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body2"
        >
          Inicio:
          {' '}
          {moment(props.start_date).format('DD/MM/YYYY')}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body2"
        >
          {statusEnum[props.status]}
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
        variant="h5"
      >
        Total:
        {' '}
        {props.amount}
      </Typography>
    </Box>
  </Card>
);
