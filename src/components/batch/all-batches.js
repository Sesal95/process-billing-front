import {
    Box,
    Grid,
    Typography,
} from '@mui/material';
import { useQuery } from "@apollo/client";
import { BatchCard } from './batch-card';
import { GET_ALL_BATCHES_BY_STATUS } from '../../graphql/batch';

export const AllBatches = () => {
    const { loading, error, data } = useQuery(GET_ALL_BATCHES_BY_STATUS, {
        variables: {
            input: {
                status: "IN_PROGRESS"
            }
        }
    });

    if (loading) return <p>Loading...</p>;

    if (error) {
        return (<p>Error :(</p>)
    }

    return (
        <>
            <Typography
                sx={{ m: 2 }}
                variant="h4"
            >
                Lotes
            </Typography>

            <Box sx={{ pt: 3 }}>
                <Grid
                    container
                    spacing={3}
                >
                    {data.getAllBatchesByStatus.map((batch) => (
                        <Grid
                            item
                            key={batch.id}
                            lg={4}
                            md={6}
                            xs={12}
                        >
                            <BatchCard batch={batch} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    );
}
