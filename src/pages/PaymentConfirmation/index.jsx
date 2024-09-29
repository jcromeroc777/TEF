import React, {useEffect} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {useSelector} from "react-redux";
import {instanceWithToken} from "../../api/index.js";
import {useSnackbar} from "notistack";


export  default function PaymentConfirmation() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get('token');
    const sessionId = queryParams.get('sessionId');
    const tokenApi = useSelector((state) => state.auth.token);
    const api = instanceWithToken(tokenApi);
    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate();

    const navigateToDashboard = () => {
        navigate('/dashboard');
    };

    const validatePayment = async () => {
        try {
            const data = {
                "token": token,
                "session_id": sessionId
            }
            const response = await api.put('/wallet/payment', data);
            if (response.data.status === 404) {
                throw new Error('No se encontró la orden de compra');
            }
            enqueueSnackbar("Su compra fue procesada exitosamente", {variant: 'success'});
            setTimeout(() => {
                navigateToDashboard();
            }, 5000);

        } catch (error) {
            enqueueSnackbar('Orden de compra no encontrada', {variant: 'error'});
            setTimeout(() => {
                navigateToDashboard();
            }, 5000);
        }
    }

    useEffect(() => {
        validatePayment();
    }, [])


    return(
        <>
            <h1>Procesando pago...</h1>
        </>
    );
}