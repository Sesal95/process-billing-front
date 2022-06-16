import { useContext } from 'react';
import {
  Box,
  Button,
  Typography,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ReferenceContext from "../../contexts/reference-context";

export const ReferenceInfoToolbar = (props) => {
  const { setReferenceData } = useContext(ReferenceContext)

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
            onClick={() => { setReferenceData({}, true) }}
          >
            Regresar a referencias
          </Button>
        </Box>
      </Box>
    </Box>
  )
};
