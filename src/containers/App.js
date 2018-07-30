import { connect } from 'react-redux';
import App from '../components/App';
import * as actionCreators from '../actions';

const mapStateToProps = ({ counter }) => {
    const props = { counter };
    return props;
};

export default connect(mapStateToProps, actionCreators)(App);