import { connect } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contactsActions';
import ContactList from './ContactList';
import { getFilteredContacts } from '../../redux/selectors';

const mapStateToProps = state => ({
  contacts: getFilteredContacts(state),
});
const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
