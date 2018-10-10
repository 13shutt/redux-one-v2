import React from 'react'
import { Route, Switch, Link } from 'react-router-dom'

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import JokesList from '../JokesList'
import GitUser from '../GitUser'
  
const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

const AppContainer = (props) => {
  const { classes } = props;  
  return (
    <div>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            ¯\_(ツ)_/¯
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              My Simple App
            </Typography>
            <Button component={Link} color="inherit" to="/">Home</Button>
            <Button component={Link} color="inherit" to="/joke">Fetch one Joke</Button>
            <Button component={Link} color="inherit" to="/git">Git User</Button>
          </Toolbar>
        </AppBar>
      </div>
      <Switch>
        <Route exact path="/" render={() => <div>Simple homepage</div>} />
        <Route path="/joke" component={() => <JokesList />} />
        <Route path="/git" component={() => <GitUser />} />
      </Switch>
    </div>
  );
}

AppContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppContainer);
