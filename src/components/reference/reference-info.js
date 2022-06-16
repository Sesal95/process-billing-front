import { Box, Card, CardContent, Typography } from '@mui/material';
import { ReferenceInfoToolbar } from './reference-info-toolbar'

export const ReferenceInfo = ({ referencesteps }) => {
    console.log(referencesteps)
    return (
        <>
            <ReferenceInfoToolbar name={referencesteps.type} />

            {
                referencesteps.StepsReferences.map((step) => (
                    <Box sx={{ mt: 3 }}>
                        <Card>
                            <CardContent>
                                <Box sx={{
                                    alignItems: 'center',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    flexWrap: 'wrap',
                                    m: -1,
                                    pl: 4,
                                    pr: 4,
                                }}>
                                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                        {step.steps_order}
                                    </Typography>
                                    <Typography
                                        variant='h6'
                                    >
                                        {step.Step.description}
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Box>
                ))
            }
        </>
    )
}