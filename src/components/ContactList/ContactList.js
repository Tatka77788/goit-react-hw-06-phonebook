/* eslint-disable react/button-has-type */
import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import slideTransition from '../../transitions/slide.module.css';
import formatPhone from '../../helpers/phoneformatter';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <TransitionGroup component="ul" className={styles.list}>
      {contacts.map(({ name, number, id }) => (
        <CSSTransition
          key={id}
          timeout={250}
          unmountOnExit
          classNames={slideTransition}
        >
          <li className={styles.listItem} key={id} id={id}>
            <span className={styles.paragraph}>{name}</span>
            <span className={styles.paragraph}>
              {formatPhone(number.split(''))}
            </span>

            <button
              className={styles.button}
              onClick={() => onDeleteContact(id)}
            >
              &#215;
            </button>
          </li>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
