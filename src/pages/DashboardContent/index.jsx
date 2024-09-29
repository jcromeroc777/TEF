import React, {useState} from 'react';
import CardBalance from '../../components/CardBalance/index.jsx';
import Grid from "@mui/material/Grid2";

export default function DashboardContent() {
    const [data, setData] = useState([{
        title: 'Balance',
        value: '14k',
        trend: 'up',
    }]);
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
