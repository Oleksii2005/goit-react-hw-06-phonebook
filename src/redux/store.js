import {
  configureStore,
  createAction,
  createReducer,
  createSlice,
} from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};
const persistedReducer = persistReducer(persistConfig, myValueSlice.reducer);
// export const increment = createAction("myValue/increment")
// export const decrement = createAction("myValue/decrement")

const myValueSlice = createSlice({
  name: 'myValue',
  initialState: 0,
  reducers: {
    increment(state, action) {
      return state + action.payload;
    },
    decrement(state, action) {
      return state - action.payload;
    },
  },
});
export const { increment, decrement } = myValueSlice.actions;
// const myReducer = createReducer(0,{
//     [increment]: (state, action) => state + action.payload,
//     [decrement]: (state, action) => state - action.payload,
// }) ;

export const store = configureStore({
  reducer: {
    myValue: myValueSlice.reducer,
  },
});
