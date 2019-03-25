import { connect } from 'react-redux';
import App from '../components/App';
import * as actionCreators from '../actions';

const mapStateToProps = ({ currentTaskValue, activeStateButton, listOfTasks, }) =>
  ({ currentTaskValue, activeStateButton, listOfTasks });

export default connect(mapStateToProps, actionCreators)(App);