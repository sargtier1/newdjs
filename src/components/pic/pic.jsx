import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },

  bigAvatar: {
    margin: "auto",
    width: "80px",
    height: "80px"
  }
}));

export default function Pic() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.section1}>
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          className={classes.bigAvatar}
        />
      </div>
      <br />
      <Divider variant="middle" />
      <br />
      <div className={classes.section2}>
        <Typography gutterBottom variant="body2">
          Lorum Ipsum Ipusum Lorem. This is the scary parrt BTW
          askhjdasfhkjdfsjlk fdjhkdfsjlkafdsjlkdfs dfljkljkfdsjkldfs
          ljkfdsljkdfsjlk ljkdfs
        </Typography>
      </div>
    </div>
  );
}
