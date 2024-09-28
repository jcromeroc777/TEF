import { createSlice, configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialStateTheme = {
  mode: 'dark',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState: initialStateTheme,
  reducers: {
    toggleTheme(state, action) {
      state.mode = action.payload;
    },
  },
});

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  theme: themeSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export const { toggleTheme } = themeSlice.actions;

export default store;
