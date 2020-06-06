import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('ADD_CONTACT');

const deleteContact = createAction('DELETE_CONTACT');

const getContactsFromLS = createAction('GET_CONTACTS');

export { addContact, deleteContact, getContactsFromLS };
