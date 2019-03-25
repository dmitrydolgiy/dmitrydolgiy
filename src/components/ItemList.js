import React, { Component } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import InputBase from '@material-ui/core/InputBase';
import { withStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

const styles = theme => ({
  root: {
    color: theme.palette.text.primary
  },
  label: {
    color: 'primary',
  },
  icon: {
    padding: 0,
    marginLeft: -15,
    marginTop: 8,
  },
  input: {
    cursor: 'pointer',
    textDecoration: 'line-through',
  }
});


class ItemList extends Component {
  onRemoveButton = id => {
    this.props.onRemoveItem({ id });
  };

  onDoneTask = id => {
    this.props.onDoneTask({ id });
  };

  render() {
    const { classes, tasks } = this.props;

    return tasks.map(({ task, state, id }) => {
      return (
        <div className={ classes.icon } key={ id }>
          <Checkbox className={ classes.label }
                    checked={ state } color='primary'
                    onClick={ () => this.onDoneTask(id) } />
          <InputBase value={ task } className={ state ? classes.input : null } />
          <IconButton onClick={ () => this.onRemoveButton(id) }>
            <DeleteIcon className={ classes.root } />
          </IconButton>
        </div>
      );
    });
  }
}

export default withStyles(styles)(ItemList);