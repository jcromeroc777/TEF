import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './store/index.js';
import App from './App.jsx';
import './index.css';
import { SnackbarProvider } from 'notistack';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <SnackbarProvider maxSnack={3}>
        <App />
      </SnackbarProvider>
    </PersistGate>
  </Provider>,
);
