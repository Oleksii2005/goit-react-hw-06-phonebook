import { configureStore } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import storage from 'redux-persist/lib/storage';
import contactsSlice from '../components/slice/userSlice';
const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, contactsSlice);
export const store = configureStore({
  reducer: persistedReducer,
});
export const persistor = persistStore(store);
