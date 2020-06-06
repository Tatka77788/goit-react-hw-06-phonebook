import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import InputMask from 'react-input-mask';
import styles from './ContactForm.module.css';

const INITIAL_STATE = {
  name: '',
  number: '',
};

export default class ContactForm extends Component {
  static propTypes = {
    onAddContact: PropTypes.func.isRequired,
    onSetMessage: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
      }),
    ).isRequired,
  };

  state = {
    ...INITIAL_STATE,
  };

  handleChangeName = ({ target: { value } }) => {
    this.setState({
      name: value,
    });
  };

  handleChangeNumber = ({ target: { value } }) => {
    const phoneNumber = value.replace(/\D+/g, '');
    this.setState({
      number: phoneNumber,
    });
  };

  handleSubmit = e => {
    const { number, name } = this.state;
    const { contacts } = this.props;

    e.preventDefault();

    if (number.length === 12) {
      if (contacts.find(contact => contact.name === name)) {
        this.props.onSetMessage('Contact already exists!');
        this.setState({
          ...INITIAL_STATE,
        });
      } else {
        this.props.onAddContact(
          { ...this.state, id: uuidv4() },

          this.setState({
            ...INITIAL_STATE,
          }),
        );
      }
    } else {
      this.props.onSetMessage('Incomplete number entered!');
    }
  };

  render() {
    const { name, number } = this.state;

    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <input
          className={styles.input}
          type="text"
          placeholder="Enter name..."
          required
          value={name}
          onChange={this.handleChangeName}
        />

        <InputMask
          className={styles.input}
          mask="+99(999)999-99-99"
          placeholder="Enter number 99(999)999-99-99"
          required
          value={number}
          onChange={this.handleChangeNumber}
        />

        <button className={styles.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
