import React from "react"
import Img from "gatsby-image"

import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Typography from "@material-ui/core/Typography"

import styled from "styled-components"

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    margin: "1rem",
  },
})

const BlogPost = props => {
  const classes = useStyles()
  return (
    <Card key={props.key} className={classes.card}>
      <CardActionArea>
        <CardMedia>
          <Img
            style={{
              height: "140px",
              objectFit: "cover",
              overFlow: "hidden"
            }}
            fluid={props.image}
          />
        </CardMedia>
        <CardContent>
          <Typography variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography
            gutterBottom
            variant="caption"
            color="primary"
            component="p"
          >
            {props.publishedDate}
          </Typography>
          <Typography variant="caption" color="textSecondary" component="p">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

const CardBottom = styled.p`
  color: darkgrey;
  font-size: 0.75rem;
  font-style: italic;
`

export default BlogPost
