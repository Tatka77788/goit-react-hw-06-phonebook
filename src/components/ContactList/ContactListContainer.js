import { connect } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contactsActions';
import ContactList from './ContactList';

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(deleteContact(id)),
});

export default connect(null, mapDispatchToProps)(ContactList);
