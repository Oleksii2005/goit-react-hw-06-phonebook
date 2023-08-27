import { configureStore, createSlice } from '@reduxjs/toolkit';
const contactSlice = createSlice({
  name: 'userName',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    contacts(state, action) {
      state.contacts = action.payload;
    },
    filter(state, action) {
      state.filter = action.payload;
    },
  },
});
export const { initialState, contacts, filter } = contactSlice.actions;

export const store = configureStore({
  reducer: {
    myValue: contactSlice.reducer,
  },
});
