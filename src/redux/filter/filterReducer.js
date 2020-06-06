import { createReducer } from '@reduxjs/toolkit';
import { filterContacts } from './filterActions';

const filter = '';

const filterReducer = createReducer(filter, {
  // eslint-disable-next-line no-return-assign
  [filterContacts]: (state, { payload }) => (state = payload),
});

export default filterReducer;
