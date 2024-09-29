import React, {useState, useEffect} from 'react';
import CardBalance from '../../components/CardBalance/index.jsx';
import Grid from "@mui/material/Grid2";
import { instanceWithToken } from './../../api/index.js';
import {useSelector} from "react-redux";
import {useSnackbar} from "notistack";

export default function DashboardContent() {
    const [data, setData] = useState([{
        title: 'Balance',
        value: '0',
        trend: 'up',
    }]);
    const token = useSelector((state) => state.auth.token);
    const user = useSelector((state) => state.auth.user);
    const api = instanceWithToken(token);
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get(`/wallet/funds/${user.document}/${user.phone}`);
                setData([{
                    title: 'Balance',
                    value: response.data.data.amount,
                    trend: 'up',
                }]);
            } catch (error) {
                enqueueSnackbar(error.response.data.error, {variant: 'error'});
            }
        };

        fetchData();
    }, []);

  return (
    <div>
      <h1>Dashboard</h1>
        {data.map((card, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, lg: 3 }}>
                <CardBalance {...card} />
            </Grid>
        ))}
    </div>
  );
}
