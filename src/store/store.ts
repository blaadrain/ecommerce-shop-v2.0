import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import products from './products/slice';
import filters from './filters/slice';

export const store = configureStore({
  reducer: { products, filters },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootType = ReturnType<typeof store.getState>;
