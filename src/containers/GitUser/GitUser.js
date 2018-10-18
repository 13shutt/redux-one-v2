import React from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/icons/Link';
import Note from '@material-ui/icons/Note';
import People from '@material-ui/icons/People';
import PeopleOutline from '@material-ui/icons/PeopleOutline';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  marginBot: {
    margin: '0px 30px',
    marginBottom: '40px'
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 400,
  },
  bigAvatar: {
    width: 150,
    height: 150,
  },
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 4,
    paddingBottom: theme.spacing.unit * 4,
    margin: '50px 170px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    width: '100%',
    maxWidth: 500,
  },
  userData: {
    margin: '0px 30px',
  },
  icon: {
    fontSize: 24,
    padding: '0px',
    marginLeft: '10px',
  },
  baseline: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'baseline',
  }
});

const GitUser = (props) => {
  const { classes } = props;
  const call = (e) => {
    e.preventDefault()
    props.actions.fetchProfile(e.target.children[0].children[1].children[0].value)
    console.log(e.target.children[0].children[1].children[0].value)
  }

  return (
    <div>
      <form onSubmit={call} className={classes.container} autoComplete="off">
        <TextField
          name="username"
          label="username"
          defaultValue="13shutt"
          className={classes.textField}
          margin="normal"
        />
        <Button variant="outlined" color="primary" type="submit">
          Find user!
        </Button>
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
          <Button href={props.github.user.html_url} variant="contained" color="primary">
            github.com
            <Link className={classes.icon} />
          </Button>
        </div>
        <div className={classes.marginBot}>
          <Typography variant="h6" gutterBottom  className={classes.baseline}>
            Repos: {props.github.user.public_repos}
            <Note className={classes.icon} />
          </Typography>
          <Typography variant="h6" gutterBottom  className={classes.baseline}>
            Followers: {props.github.user.followers}
            <People className={classes.icon} />
          </Typography>
          <Typography variant="h6" gutterBottom  className={classes.baseline}>
            Following: {props.github.user.following}
            <PeopleOutline className={classes.icon} />
          </Typography>
        </div>
        <div className={classes.marginBot}>
        <Typography variant="overline" gutterBottom>
          Created: {props.github.user.created_at}
        </Typography>
        <Typography variant="overline" gutterBottom>
          Updated: {props.github.user.updated_at}
        </Typography>
        </div>
      </Paper>
    </div>
  );
}
 
export default withStyles(styles)(GitUser)