/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import ContactForm from '../ContactForm/ContactFormContainer';
import Filter from '../Filter/FilterContainer';
import ContactList from '../ContactList/ContactListContainer';
import Alert from '../Alert/Alert';
import styles from './App.module.css';
import titleTransition from '../../transitions/title.module.css';
import popTransition from '../../transitions/pop.module.css';
import alertTransition from '../../transitions/alert.module.css';

const INITIAL_STATE = {
  isVisible: false,
  message: '',
};

export default class App extends Component {
  state = {
    ...INITIAL_STATE,
  };

  componentDidMount() {
    const { onGetContactsFromLS } = this.props;
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
      onGetContactsFromLS(JSON.parse(savedContacts));
    }
  }

  componentDidUpdate(prevState) {
    const { contacts } = this.props;
    if (prevState.contacts !== contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  setMessage = message => {
    this.setState({ isVisible: true, message });
    setTimeout(() => {
      this.setState({
        ...INITIAL_STATE,
      });
    }, 1500);
  };

  filterContacts = () => {
    const { contacts, filter } = this.props;
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  render() {
    const { contacts } = this.props;
    const { isVisible, message } = this.state;
    return (
      <div className={styles.container}>
        <CSSTransition in timeout={500} classNames={titleTransition} appear>
          <h2 className={styles.title}>Phonebook</h2>
        </CSSTransition>
        <ContactForm onSetMessage={this.setMessage} contacts={contacts} />
        <CSSTransition
          in={isVisible}
          timeout={250}
          unmountOnExit
          classNames={alertTransition}
        >
          <Alert message={message} />
        </CSSTransition>
        <CSSTransition
          in={this.props.contacts.length > 1}
          timeout={250}
          unmountOnExit
          classNames={popTransition}
        >
          <Filter />
        </CSSTransition>
        <ContactList contacts={this.filterContacts()} />
      </div>
    );
  }
}
