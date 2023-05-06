import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const pending = state => {
  state.isLoading = true;
  state.error = null;
};

const fulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

const rejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const contacts = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending]: pending,
    [fetchContacts.fulfilled]: (state, action) => {
      state.items = action.payload;
      fulfilled(state);
    },
    [fetchContacts.rejected]: rejected,

    [addContact.pending]: pending,
    [addContact.fulfilled]: (state, action) => {
      state.items.push(action.payload);
      fulfilled(state);
    },
    [addContact.rejected]: rejected,

    [deleteContact.pending]: pending,
    [deleteContact.fulfilled]: (state, action) => {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
      fulfilled(state);
    },
    [deleteContact.rejected]: rejected,
  },
});
