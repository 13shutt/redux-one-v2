import React, { Component } from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/icons/Link";
import Note from "@material-ui/icons/Note";
import People from "@material-ui/icons/People";
import PeopleOutline from "@material-ui/icons/PeopleOutline";
import TextField from "@material-ui/core/TextField";
import Chip from '@material-ui/core/Chip';

const styles = theme => ({
  marginBot: {
    margin: "0px 30px",
    marginBottom: "40px"
  },
  chip: {
    margin: theme.spacing.unit,
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 400
  },
  bigAvatar: {
    width: 150,
    height: 150
  },
  rootRow: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 4,
    paddingBottom: theme.spacing.unit * 4,
    margin: "50px 130px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  rootCol: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 4,
    paddingBottom: theme.spacing.unit * 4,
    margin: "50px 170px",
    display: "flex",
    flexDirection: "column",
  },
  text: {
    width: "100%",
    maxWidth: 500
  },
  userData: {
    margin: "0px 30px"
  },
  icon: {
    fontSize: 24,
    padding: "0px",
    marginLeft: "10px"
  },
  baseline: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "baseline"
  },
  repo: {
    display: "flex",
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between"
  }
});

class GitUser extends Component {
  constructor(props) {
    super(props)
  
    const { classes } = props;
    this.call = e => {
      e.preventDefault();
      props.actions.fetchProfile(
        e.target.children[0].children[1].children[0].value
      );
      console.log(e.target.children[0].children[1].children[0].value);
    };
      
    this.viewRepos = (from, to) => 
      props.github.repos.slice(from, to).map((item, index) => (
        <div className={classes.repo} key={index}> 
          <Button href={item.html_url} color="primary" className={classes.button}>
            {item.name}
          </Button>
          <div className={classes.repo} style={{width: "370px"}}>
            <Typography variant="overline">updated {item.updated_at} ago</Typography>
            <Chip
              label={item.language}
              className={classes.chip}
              color="primary"
            />
          </div>
        </div>
    ))
  }
  render() {
    return (
      <div>
        <form onSubmit={this.call} className={this.classes.container} autoComplete="off">
          <TextField
            name="username"
            label="username"
            defaultValue="13shutt"
            className={this.classes.textField}
            margin="normal"
          />
          <Button variant="outlined" color="primary" type="submit">
            Find user!
          </Button>
        </form>
        <Paper className={this.classes.rootRow} elevation={1}>
          <Avatar
            src={this.props.github.user.avatar_url}
            className={classNames(this.classes.avatar, this.classes.bigAvatar)}
          />
          <div className={this.classes.userData}>
            <Typography variant="h5" gutterBottom>
              Login: {this.props.github.user.login}
            </Typography>
            <Typography variant="h5" gutterBottom>
              Name: {this.props.github.user.name}
            </Typography>
            <Typography variant="h5" gutterBottom>
              Location: {this.props.github.user.location}
            </Typography>
            <Button href={this.props.github.user.html_url} variant="contained" color="primary">
              github.com
              <Link className={this.classes.icon} />
            </Button>
          </div>
          <div className={this.classes.marginBot}>
            <Typography variant="h6" gutterBottom className={this.classes.baseline}>
              Repos: {this.props.github.user.public_repos}
              <Note className={this.classes.icon} />
            </Typography>
            <Typography variant="h6" gutterBottom className={this.classes.baseline}>
              Followers: {this.props.github.user.followers}
              <People className={this.classes.icon} />
            </Typography>
            <Typography variant="h6" gutterBottom className={this.classes.baseline}>
              Following: {this.props.github.user.following}
              <PeopleOutline className={this.classes.icon} />
            </Typography>
          </div>
          <div className={this.classes.marginBot}>
            <Typography variant="overline" gutterBottom>
              Created: {this.props.github.user.created_at}
            </Typography>
            <Typography variant="overline" gutterBottom>
              Updated: {this.props.github.user.updated_at}
            </Typography>
          </div>
        </Paper>
        <Paper className={this.classes.rootCol} elevation={1}>
          {this.viewRepos(0, 5)}
          {this.props.github.user.public_repos > 5 ? (
          <Button color="primary" className={this.classes.button}>
            Load More
          </Button>) : null}
        </Paper>
      </div>
    );
  }
};

export default withStyles(styles)(GitUser);
