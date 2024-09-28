import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SideMenu from '../../components/SideMenu/index.jsx';
import DashboardContent from '../DashboardContent/index.jsx';
import Reload from '../Reload/index.jsx';
import Buy from '../Buy/index.jsx';

export default function Dashboard() {
  const [menuActive, setMenuActive] = useState('dashboard');
  return (
    <Box sx={{ display: 'flex' }}>
      <SideMenu setMenuActive={setMenuActive} menuActive={menuActive} />
      {/* Main content */}
      <Box
        component="main"
        sx={(theme) => ({
          flexGrow: 1,
          backgroundColor: theme.vars
            ? `rgba(${theme.vars.palette.background.defaultChannel} / 1)`
            : alpha(theme.palette.background.default, 1),
          overflow: 'auto',
        })}
      >
        {menuActive === 'dashboard' && <DashboardContent />}
        {menuActive === 'reload' && <Reload />}
        {menuActive === 'buy' && <Buy />}
      </Box>
    </Box>
  );
}
