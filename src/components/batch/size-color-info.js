import {
  Box,
  Typography,
  Card,
  CardContent,
} from '@mui/material';

export const SizeColorBatchInfo = (props) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        pt: 2
      }}
    >
      {props.sizecolorinfo.map(({
        id,
        total_amount,
        Color,
        Size,
      }) => (
        <Card
          {...props}
          sx={{
            p: 2
          }}
          key={id}
        >
          <CardContent>
            <Box
              key={id}
              sx={{
                p: 1,
                textAlign: 'center'
              }}
            >
              <Typography
                color="textPrimary"
                gutterBottom
                variant="h5"
              >
                {Size.size_character}
              </Typography>
              <Typography
                color="textPrimary"
                variant="body1"
              >
                {Color.color_name}
              </Typography>
              <Typography
                variant="h4"
              >
                {total_amount}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};
