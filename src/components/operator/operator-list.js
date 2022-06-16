import { useQuery } from "@apollo/client";
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import {
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography
} from '@mui/material';
import { GET_ALL_OPERATORS } from '../../graphql/operator';

export const OperatorList = ({ customers, ...rest }) => {
  const { loading, error, data } = useQuery(GET_ALL_OPERATORS);

  if (loading) return <p>Loading...</p>;

  if (error) {
    return (<p>Error :(</p>)
  }

  return (
    <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Nombre
                </TableCell>
                <TableCell>
                  Identificación
                </TableCell>
                <TableCell>
                  Total de la semana
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.getAllOperators.map((operator) => (
                <TableRow
                  hover
                  key={operator.id}
                >
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex'
                      }}
                    >
                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        {`${operator.name} ${operator.last_name}`}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {operator.dni}
                  </TableCell>
                  <TableCell>
                    {`${operator.total_week} / 360000`}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
    </Card >
  );
};

OperatorList.propTypes = {
  customers: PropTypes.array.isRequired
};
