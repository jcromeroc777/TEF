import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import { useForm } from 'react-hook-form';
import TextCustom from '../../components/TextCustom/index.jsx';

const Card = styled(MuiCard)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    width: '100%',
    padding: theme.spacing(4),
    gap: theme.spacing(2),
    margin: 'auto',
    boxShadow:
        'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
    [theme.breakpoints.up('sm')]: {
        width: '450px',
    },
    ...theme.applyStyles('dark', {
        boxShadow:
            'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
    }),
}));

const BuyContainer = styled(Stack)(({ theme }) => ({
    height: '100%',
    padding: 4,
    backgroundImage:
        'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
    backgroundRepeat: 'no-repeat',
    ...theme.applyStyles('dark', {
        backgroundImage:
            'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
    }),
}));

export default function Reload() {
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        defaultValues: {
        },
    });


    const handleSubmitForm = (data) => {
        //TODO implementar la llamada a la API
        console.log(data);
    };

    return (
        <BuyContainer direction="column" justifyContent="space-between">
            <Stack
                sx={{
                    justifyContent: 'center',
                    height: '100dvh',
                    p: 2,
                }}
            >
                <Card variant="outlined">
                    <Typography
                        component="h1"
                        variant="h4"
                        sx={{
                            width: '100%',
                            fontSize: 'clamp(2rem, 10vw, 2.15rem)',
                        }}
                    >
                        Comprar
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={handleSubmit((data) => handleSubmitForm(data))}
                        noValidate
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '100%',
                            gap: 2,
                        }}
                    >
                        <TextCustom
                            control={control}
                            name="amount"
                            label="Monto"
                            required
                            fullWidth
                            type="number"
                            errors={errors}
                            rules={{
                                required: 'El monto es requerido',
                                validate: value => value >= 0 || 'No se permiten números negativos',
                            }}
                        />
                        <TextCustom
                            control={control}
                            name="document"
                            label="Documento"
                            required
                            fullWidth
                            type="text"
                            errors={errors}
                            rules={{
                                required: 'El documento es requerido',
                            }}
                        />
                        <Button type="submit" fullWidth variant="contained">
                            Comprar
                        </Button>
                    </Box>
                </Card>
            </Stack>
        </BuyContainer>
    );
}
