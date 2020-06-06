import { connect } from 'react-redux';
import { filterContacts } from '../../redux/filter/filterActions';
import Filter from './Filter';

const mapDispatchToProps = dispatch => ({
  onChange: filter => dispatch(filterContacts(filter)),
});

export default connect(null, mapDispatchToProps)(Filter);
