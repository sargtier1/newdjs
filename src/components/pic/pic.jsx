import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Divider from "@material-ui/core/Divider"
import Typography from "@material-ui/core/Typography"
import Avatar from "@material-ui/core/Avatar"

import { useStaticQuery, graphql } from "gatsby"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    margin: "auto",
  },
  bottom: {
    textAlign: "center",
  },
  bigAvatar: {
    margin: "auto",
    width: "150px",
    height: "150px",
  },
}))

export default function Pic() {
  const data = useStaticQuery(graphql`
    query {
      contentfulLandingPage {
        title
        bio
        headshot {
          fluid {
            src
          }
        }
      }
    }
  `)

  const classes = useStyles()
  const pic = data.contentfulLandingPage

  return (
    <div className={classes.root}>
      <div className={classes.section1}>
        <Avatar
          alt="Remy Sharp"
          src={pic.headshot.fluid.src}
          className={classes.bigAvatar}
        />
      </div>
      <br />
      <Divider variant="middle" />
      <br />
      <div className={classes.section2}>
        <Typography
          gutterBottom
          color="textSecondary"
          variant="body2"
          className={classes.bottom}
        >
          {pic.bio}
        </Typography>
      </div>
    </div>
  )
}
