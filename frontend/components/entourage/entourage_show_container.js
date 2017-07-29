import { connect } from 'react-redux';
import EntourageShow from './entourage_show';
import {requestEntourage} from '../../actions/entourage_actions';

const mapStateToProps = (state) => ({
  entourage: state.entourage
});

const mapDispatchToProps = dispatch => ({
  requestEntourage: id => dispatch(requestEntourage(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EntourageShow);
