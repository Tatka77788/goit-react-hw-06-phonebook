import React from 'react';
import PropTypes from 'prop-types';
import styles from './Alert.module.css';

const Alert = ({ message }) => (
  <div className={styles.Notification}>{message}</div>
);

Alert.propTypes = {
  message: PropTypes.string.isRequired,
};
export default Alert;
