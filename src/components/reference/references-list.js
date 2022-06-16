import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Box, Card, CardContent, Grid, Typography, Divider, Button } from '@mui/material';
import ReferenceContext from "../../contexts/reference-context";

export const ReferencesList = ({ reference, ...props }) => {
  const { setReferenceData } = useContext(ReferenceContext)

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
      {...props}
    >
      <CardContent>
        <Grid
          container
          spacing={3}
        >
          <Grid item>
            <Typography
              color="textPrimary"
              variant="inherit"
              align="center"
            >
              {reference.type}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <Divider />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          pl: 3,
          pr: 3,
        }}
      >
        <Typography
          color="textPrimary"
          display="inline"
        >
          Pasos:
          {' '}
          {reference.StepsReferences.length}
        </Typography>
        <Typography
          color="textSecondary"
          display="inline"
          sx={{ pl: 1 }}
          variant="body2"
        >
          <Button
            variant='text'
            onClick={() => { setReferenceData(reference, false) }}
          >
            Detalles
          </Button>
        </Typography>
      </Box>
    </Card>
  )
};

ReferencesList.propTypes = {
  reference: PropTypes.object.isRequired
};
