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
        bio {
          bio
        }
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
          The standard Lorem Ipsum passage, used since the 1500s "Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum."
        </Typography>
      </div>
    </div>
  )
}
