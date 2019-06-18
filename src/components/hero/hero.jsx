import React from "react"

import styled from "styled-components"

const Hero = props => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${props.image})`,
          backgroundPosition: `top left`,
          backgroundAttachment: `fixed`,
        }}
      >
        <div
          style={{
            display: "flex",
            height: "150px",
            lineHeight: "1",
            justifyContent: "space-around",
            alignItems: "left",
            flexDirection: "column",
          }}
        >
          <h1
            className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
            style={{
              color: "white",
              lineHeight: "1",
              padding: "1em",
              margin: "auto",
            }}
          >
            {props.title}
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Hero
