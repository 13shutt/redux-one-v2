import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import IconButton from '@material-ui/core/IconButton';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import DeleteIcon from '@material-ui/icons/DeleteOutlined'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginLeft: 100,
    marginRight: 100,
    marginTop: 20,
  },
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

const JokesList = (props) => {
  const { classes } = props;
  return (    
    <div>
      <Paper className={classes.root} elevation={4}>
        <Typography variant="h5" component="h3">
          Get some Chuck Norris jokes from API
        </Typography>
        <Typography component="p">
          <Button onClick={props.actions.fetchJoke} variant="contained" color="primary" className={classes.button}>
            Get Joke! :D
          </Button>
            <ol>
              {props.jokes.items.map(
                (item, index) => 
                <ListItem key={index}>
                  <ListItemText
                    primary={item.value.joke}
                  /> 
                  <ListItemSecondaryAction  onClick={() => props.actions.deleteJoke(index)}>
                    <IconButton aria-label="Delete">
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              )}
            </ol>
        </Typography>
      </Paper>
    </div>
  );
}

JokesList.propTypes = {
  classes: PropTypes.object.isRequired,
};
 
export default withStyles(styles)(JokesList);