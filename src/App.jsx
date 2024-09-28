import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import SignIn from './pages/SignIn/index.jsx';
import SignUp from './pages/SignUp/index.jsx';
import TemplateFrame from './TemplateFrame.jsx';
import { toggleTheme } from './store';
import { useDispatch, useSelector } from 'react-redux';

export default function App() {
  const mode = useSelector((state) => state.theme.mode);
  const defaultTheme = createTheme({ palette: { mode } });
  const dispatch = useDispatch();

  const toggleColorMode = () => {
    const newMode = mode === 'dark' ? 'light' : 'dark';
    dispatch(toggleTheme(newMode));
  };

  return (
    <TemplateFrame mode={mode} toggleColorMode={toggleColorMode}>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline enableColorScheme />
        <Router>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </TemplateFrame>
  );
}
