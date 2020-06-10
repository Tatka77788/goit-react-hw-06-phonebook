import { createReducer } from '@reduxjs/toolkit';
import { filterContacts } from './filterActions';

const filter = '';

const filterReducer = createReducer(filter, {
  [filterContacts]: (state, { payload }) => payload,
});

export default filterReducer;
