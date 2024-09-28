import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import TemplateFrame from './TemplateFrame.jsx';
import { toggleTheme } from './store';
import { useDispatch, useSelector } from 'react-redux';
import PublicRoutes from './components/PublicRoute/index.jsx';
import PrivateRoutes from './components/PrivateRoute/index.jsx';

export default function App() {
  const mode = useSelector((state) => state.theme.mode);
  const defaultTheme = createTheme({ palette: { mode } });
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.token);

  const toggleColorMode = () => {
    const newMode = mode === 'dark' ? 'light' : 'dark';
    dispatch(toggleTheme(newMode));
  };

  return (
    <TemplateFrame mode={mode} toggleColorMode={toggleColorMode}>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline enableColorScheme />
        <Router>
          {isAuthenticated && <PrivateRoutes />}
          {!isAuthenticated && <PublicRoutes />}
        </Router>
      </ThemeProvider>
    </TemplateFrame>
  );
}
