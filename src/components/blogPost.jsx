import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { getThemeProps } from '@material-ui/styles'

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    margin: '1rem'
  }
})

const BlogPost = props => {
  const classes = useStyles()

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia>
          <Img
            style={{
              height: '100%',
              width: '100%',
              objectFit: 'cover',
              overFlow: 'hidden',
              borderBottomLeftRadius: '0.28571429rem',
              borderTopLeftRadius: '0.28571429rem'
            }}
            fluid={props.image}
          />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            Lizard
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size='small' color='primary'>
          Share
        </Button>
        <Button size='small' color='primary'>
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}

export default BlogPost
