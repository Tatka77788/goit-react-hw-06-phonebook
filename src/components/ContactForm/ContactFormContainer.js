import { connect } from 'react-redux';
import { addContact } from '../../redux/contacts/contactsActions';
import ContactForm from './ContactForm';

const mapDispatchToProps = dispatch => ({
  onAddContact: contact => dispatch(addContact(contact)),
});

export default connect(null, mapDispatchToProps)(ContactForm);
