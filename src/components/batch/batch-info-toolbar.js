import { useContext } from 'react';
import {
  Box,
  Button,
  Typography,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import BatchContext from "../../contexts/batch-context";

export const BatchInfoToolbar = (props) => {
  const { setNewData } = useContext(BatchContext)

  return (
    <Box {...props}>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          m: -1
        }}
      >
        <Typography
          sx={{ m: 3 }}
          variant="h4"
        >
          {props.name}
        </Typography>
        <Box sx={{ m: 1 }}>
          <Button
            sx={{ mr: 1 }}
            startIcon={<ArrowBackIcon fontSize="small" />}
            onClick={() => { setNewData('', true) }}
          >
            Regresar a lotes
          </Button>
        </Box>
      </Box>
    </Box>
  )
};
