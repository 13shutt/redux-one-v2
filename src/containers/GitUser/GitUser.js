import React from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/icons/Link';

const styles = theme => ({
  bigAvatar: {
    width: 150,
    height: 150,
  },
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 4,
    paddingBottom: theme.spacing.unit * 4,
    margin: '50px 200px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    width: '100%',
    maxWidth: 500,
  },
  userData: {
    margin: '0px 30px'
  },
  button: {
    margin: '0px',
  },
  icon: {
    fontSize: 24,
    padding: '0px',
    marginLeft: '10px',
  },
});

const GitUser = (props) => {
  const { classes } = props;
  const call = (e) => {
    e.preventDefault()
    props.actions.fetchProfile(e.target.children[0].value)
    console.log(e.target.children[0].value)
  }

  return (
    <div>
      <form onSubmit={call}>
        <input type="text" defaultValue="13shutt"/>
        <button>Find user!</button>
      </form>
      <Paper className={classes.root} elevation={1}>
        <Avatar
          src={props.github.user.avatar_url}
          className={classNames(classes.avatar, classes.bigAvatar)}
        />
        <div className={classes.userData}>
          <Typography variant="h5" gutterBottom>Login: {props.github.user.login}</Typography>
          <Typography variant="h5" gutterBottom>Name: {props.github.user.name}</Typography>
          <Typography variant="h5" gutterBottom>Location: {props.github.user.location}</Typography>
          <Button href={props.github.user.html_url} variant="contained" color="primary" className={classes.button}>
            github.com
            <Link className={classes.icon} />
          </Button>
        </div>
      </Paper>
    </div>
  );
}
 
export default withStyles(styles)(GitUser)