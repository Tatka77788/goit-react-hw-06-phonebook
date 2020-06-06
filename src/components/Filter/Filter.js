import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';

const Filter = ({ onChange }) => (
  <div className={styles.container}>
    <label className={styles.label}>
      Find contact by name
      <input
        className={styles.input}
        type="text"
        name="filter"
        onChange={e => onChange(e.target.value)}
      />
    </label>
  </div>
);
Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};
export default Filter;
