import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import { useForm } from 'react-hook-form';
import TextCustom from '../../components/TextCustom/index.jsx';
import {instanceWithToken} from "../../api/index.js";
import {useSnackbar} from "notistack";
import {useSelector} from "react-redux";

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

const ReloadContainer = styled(Stack)(({ theme }) => ({
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
    const token = useSelector((state) => state.auth.token);
    const api = instanceWithToken(token);
    const { enqueueSnackbar } = useSnackbar();


    const handleSubmitForm = async (data) => {
        try {
            data.amount = Math.floor(data.amount);
            const response = await api.post('/wallet/charge', data);
            if (response.data.status === 404) {
                throw new Error('No se encontró el usuario');
            }
            enqueueSnackbar("Saldo recargado", {variant: 'success'});
            setTimeout(() => {
                window.location.reload();
            }, 2000);

        } catch (error) {
            enqueueSnackbar('Los datos no son correctos', {variant: 'error'});
        }
    };

    return (
        <ReloadContainer direction="column" justifyContent="space-between">
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
                        Recargar saldo
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
                        <TextCustom
                            control={control}
                            name="phone"
                            label="Teléfono"
                            required
                            fullWidth
                            type="text"
                            errors={errors}
                            rules={{
                                required: 'El teléfono es requerido',
                            }}
                        />
                        <Button type="submit" fullWidth variant="contained">
                            Recargar
                        </Button>
                    </Box>
                </Card>
            </Stack>
        </ReloadContainer>
    );
}
