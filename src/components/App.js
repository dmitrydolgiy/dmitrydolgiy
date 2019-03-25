import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
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
      <div className='global-wrapper-fragment'>
        <TextField
          type='text'
          className='task-text-field'
          value={ currentTaskValue }
          placeholder='Enter new task..'
          onChange={ ({ target: { value } }) => onTaskValueChange({ value }) }
          onKeyPress={ ({ key }) => key === 'Enter' ? onAddTask({ task: currentTaskValue }) : null } />

        <Button
          color='primary'
          className='add-button'
          disabled={ activeStateButton }
          onClick={ () => onAddTask({ task: currentTaskValue }) }
          variant='contained'>
          Add
        </Button>

        <ItemList tasks={ listOfTasks } onRemoveItem={ onRemoveTask } onDoneTask={ onDoneTask } />
      </div>
    );
  }
}

export default App;
