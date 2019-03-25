import React, { Component } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import InputBase from '@material-ui/core/InputBase';
import { withStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const styles = theme => ({
  root: {
    color: theme.palette.text.primary
  },
  label: {
    color: 'primary',
  },
  icon: {
    padding: 0,
    marginLeft: -10,
    marginTop: 6,
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
          <ReactCSSTransitionGroup
            transitionName="anim"
            transitionAppear={ true }
            transitionAppearTimeout={ 2000 }
            transitionLeaveTimeout={ 5000 }
            transitionEnterTimeout={ 5000 }
            transitionEnter={ false }
            transitionLeave={ true }>

            <Checkbox className={ classes.label }
                      checked={ state } color='primary'
                      onClick={ () => this.onDoneTask(id) } />

            <InputBase value={ task } className={ state ? classes.input : null } />

            <IconButton onClick={ () => this.onRemoveButton(id) }>
              <DeleteIcon className={ classes.root } />
            </IconButton>

          </ReactCSSTransitionGroup>
        </div>
      );
    });
  }
}

export default withStyles(styles)(ItemList);