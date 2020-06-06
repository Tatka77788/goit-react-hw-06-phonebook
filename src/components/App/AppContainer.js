import { connect } from 'react-redux';
import { getContactsFromLS } from '../../redux/contacts/contactsActions';
import { getContacts, getFilter } from '../../redux/selectors';
import App from './App';

const mapStateToProps = state => ({
  contacts: getContacts(state),
  filter: getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onGetContactsFromLS: contacts => dispatch(getContactsFromLS(contacts)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
