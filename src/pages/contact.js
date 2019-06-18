import React from "react"

import Layout from "../components/layout/layout"
import Head from "../components/head"

import { makeStyles } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"

import { Icon } from "semantic-ui-react"

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "95%",
  },
  button: {
    margin: theme.spacing(1),
    backgroundColor: "#ffe21f",
    color: "#373737"
  },
}))

const ContactPage = () => {
  const classes = useStyles()

  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact</h1>
      <form
        name="contact"
        method="POST"
        netlify-honeypot="bot-field"
        data-netlify="true"
      >
        <input type="hidden" name="contact" value="contact" />
        <TextField
          id="outlined-name"
          label="Name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-name"
          label="E-mail"
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-name"
          label="Phone"
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="standard-textarea"
          label="Comments"
          placeholder="leave your thoughts here..."
          className={classes.textField}
          multiline
          margin="normal"
        />
        <Button variant="contained" className={classes.button}>
          Send
          <Icon
            style={{
              marginLeft: "10px",
              marginBottom: "10px",
              color: "#373737",
            }}
            name="paper plane"
            className={classes.rightIcon}
          />
        </Button>
      </form>
    </Layout>
  )
}

export default ContactPage
