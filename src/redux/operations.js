import { Notify } from 'notiflix';
import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsAPI from 'API/contactsAPI';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    try {
      const contacts = await contactsAPI.fetchContacts();
      return contacts;
    } catch (error) {
      Notify.failure(`${error.message}`);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async contactData => {
    try {
      const contact = await contactsAPI.addContact(contactData);
      Notify.success(`${contactData.name} has been added to your contacts`);
      return contact;
    } catch (error) {
      Notify.failure(`${error.message}`);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async data => {
    try {
      await contactsAPI.deleteContact(data.id);
      Notify.success(`${data.name} has been deleted from your contacts`);
      return data.id;
    } catch (error) {
      Notify.failure(`${error.message}`);
    }
  }
);
