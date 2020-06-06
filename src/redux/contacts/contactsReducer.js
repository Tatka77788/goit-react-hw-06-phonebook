import { createReducer } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  getContactsFromLS,
} from './contactsActions';

const contacts = [];

const contactsReducer = createReducer(contacts, {
  [addContact]: (state, { payload }) => [...state, payload],
  [deleteContact]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
  [getContactsFromLS]: (state, { payload }) => payload,
});

export default contactsReducer;
