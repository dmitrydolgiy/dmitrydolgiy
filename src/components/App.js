import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import ItemList from './ItemList';
import axios from 'axios';
import './App.css';

class App extends Component {

  componentDidMount() {
    setInterval(async () => {
      const { data } = await axios.get('https://5c99023942365600143931e4.mockapi.io/api/v1/tasks');
      this.props.initSuccessListOfTask({ tasks: data });
    }, 2000);
  }

  render() {
    const {
      listOfTasks,
      taskValueChange,
      currentTaskValue,
      activeStateButton,

      onSaveTask,
      onRemoveTask,
      onUpdateTask,

    } = this.props;

    return (
      <div className='task-app'>
        <div className={ this.props.classes.paper }>
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
        </div>
      </div>
    );
  }
}

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    flex: '1 0 auto',
    margin: theme.spacing.unit,
    zIndex: 9999,
  },
  input: {
    width: 180,
  },
  button: {
    marginLeft: 20,
  }
});

export default withStyles(styles)(App);
