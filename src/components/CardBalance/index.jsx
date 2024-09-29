import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

function StatCard({ title, value, trend }) {
    const labelColors = {
        up: 'success',
        down: 'error',
        neutral: 'default',
    };

    const color = labelColors[trend];

    return (
        <Card variant="outlined" sx={{ height: '100%', flexGrow: 1 }}>
            <CardContent>
                <Typography variant="h3" component="p">
                    {title}
                </Typography>
                <Stack
                    direction="column"
                    sx={{ justifyContent: 'space-between', flexGrow: '1', gap: 1, marginTop: '20px' }}
                >
                    <Stack sx={{ justifyContent: 'space-between' }}>
                        <Stack
                            direction="row"
                            sx={{ justifyContent: 'space-between', alignItems: 'center' }}
                        >
                            <Typography variant="h5">
                                Dispones de:
                                <Chip
                                    size="medium"
                                    color={color}
                                    label={`${value} $`}
                                    sx={{
                                        height: '40px',
                                        width: '200px',
                                        fontSize: '1.5rem',
                                        marginLeft: '10px',
                                    }}
                                />
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
    );
}

export default StatCard;