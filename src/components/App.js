import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import ItemList from './ItemList';
import axios from 'axios';
import './App.css';

class App extends Component {

  componentDidMount() {
    axios.get('https://5c99023942365600143931e4.mockapi.io/api/v1/tasks')
      .then(({ data }) => this.props.initSuccessListOfTask({ tasks: data }));
  }

  render() {
    const {
      onAddTask,
      onDoneTask,
      listOfTasks,
      onRemoveTask,
      currentTaskValue,
      activeStateButton,
      onTaskValueChange,
    } = this.props;

    return (
      <div className={ this.props.classes.paper }>
        <TextField
          type='text'
          autoFocus
          className={ this.props.classes.input }
          value={ currentTaskValue }
          placeholder='Enter new task..'
          onChange={ ({ target: { value } }) => onTaskValueChange({ value }) }
          onKeyPress={ ({ key }) => key === 'Enter' ? onAddTask({ task: currentTaskValue }) : null } />

        <Button
          color='primary'
          className={ this.props.classes.button }
          disabled={ activeStateButton }
          onClick={ () => onAddTask({ task: currentTaskValue }) }
          variant='contained'>
          Add
        </Button>

        <ItemList className='item-list' tasks={ listOfTasks } onRemoveItem={ onRemoveTask } onDoneTask={ onDoneTask } />
      </div>
    );
  }
}

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 3,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    flex: '1 0 auto',
    margin: theme.spacing.unit * 10,
  },
  input: {
    width: 180,
  },
  button: {
    marginLeft: 20,
  }
});

export default withStyles(styles)(App);
