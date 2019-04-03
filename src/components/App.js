import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import QuoteMediaCard from './QuoteMedaCard/QuoteMediaCard';
import { withStyles } from '@material-ui/core/styles';
import ItemList from './ItemList/ItemList';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import Paper from '@material-ui/core/Paper';
import Menu from './Menu/Menu';
import { withCookies } from 'react-cookie';

import './App.css';

class App extends Component {
  state = { quote: {} };

  async componentDidMount() {
    if (!this.props.cookies.get('authToken')) this.props.history.push('/login');

    const { data } = await axios.get('https://5c99023942365600143931e4.mockapi.io/api/v1/tasks');
    this.props.initSuccessListOfTask({ tasks: data });

    const { data: { author, quote } } = await axios.get('https://random-math-quote-api.herokuapp.com/');
    this.setState({ quote: { author, quote } });
  }

  render() {
    const {
      classes,
      listOfTasks,
      taskValueChange,
      currentTaskValue,
      activeStateButton,

      onSaveTask,
      onRemoveTask,
      onUpdateTask,
    } = this.props;

    return (
      <div id='main-page' className={ classes.root }>
        <Menu pageWrapId={ 'main-page-wrap' } outerContainerId={ 'main-page' } />
        <Grid
          id='main-page-wrap'
          container
          direction="row"
          justify="center"
          // alignItems="center"
          spacing={ 24 }>

          <Grid item xs={ 12 } sm={ 6 }>
            <Paper className={ classes.paper }>
              <TextField
                type='text'
                autoFocus
                className={ this.props.classes.input }
                value={ currentTaskValue }
                placeholder='Enter new task..'
                onChange={ ({ target: { value } }) => taskValueChange({ value }) }
                onKeyPress={ ({ key }) => key === 'Enter' ? onSaveTask({ task: currentTaskValue }) : null } />

              <Button
                color='primary'
                className={ this.props.classes.button }
                disabled={ activeStateButton }
                onClick={ () => onSaveTask({ task: currentTaskValue }) }
                variant='contained'>
                Add
              </Button>

              <ItemList
                className='item-list'
                tasks={ listOfTasks }
                onRemoveTask={ onRemoveTask }
                onUpdateTask={ onUpdateTask } />
            </Paper>

          </Grid>
          <Grid item xs={ 5 }>
            <Paper className={ classes.quote }>
              <QuoteMediaCard quote={ this.state.quote } />
            </Paper>
          </Grid>


        </Grid>
      </div>
    );
  }
}

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  quote: {
    padding: theme.spacing.unit,
    margin: theme.spacing.unit * 4,
    maxWidth: 300,
  },
  paper: {
    padding: theme.spacing.unit,
    margin: theme.spacing.unit * 4,
    maxWidth: 300,
    color: theme.palette.text.secondary,
    marginLeft: 95,
    textAlign: 'center',
    zIndex: 9999,
  },
  input: {
    width: 180,
  },
  button: {
    marginLeft: 20,
  }
});

export default withCookies(withStyles(styles)(App));
