import {
    Grid,
    Typography,
    Container,
} from '@mui/material';
import { useQuery } from "@apollo/client";
import { ReferencesList } from './references-list';
import { GET_ALL_REFERENCES } from '../../graphql/reference';

export const AllReferences = () => {
    const { loading, error, data } = useQuery(GET_ALL_REFERENCES);

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
                Referencias
            </Typography>

            <Container maxWidth={false}>
                <Grid
                    container
                    spacing={3}
                >
                    {data.getAllReferences.map((ref) => (
                        <Grid
                            item
                            key={ref.id}
                            lg={3}
                            sm={6}
                            xl={3}
                            xs={12}
                        >
                            <ReferencesList reference={ref}/>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    );
}
