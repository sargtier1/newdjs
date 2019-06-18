import React from "react"

import Layout from "../components/layout/layout"
import Head from "../components/head"

import contactStyles from "./contact.module.scss"
// Connect to CMS to update inqueries

const ContactPage = () => {
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
        <p>
          <label>Your Name: </label>
          <input className={contactStyles.form} type="text" name="name" />
        </p>
        <p>
          <label>Your Email:</label>
          <input type="email" name="email" />
        </p>
        <p>
          <label> Your Number: </label>
          <input type="tel" name="telephone" />
        </p>
        <p>
          <label>Message:</label>
          <textarea name="message" />
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </Layout>
  )
}

export default ContactPage
