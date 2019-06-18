import React from "react"
import ExpansionPanel from "@material-ui/core/ExpansionPanel"
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary"
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails"
import Typography from "@material-ui/core/Typography"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"

const Panel = props => {
  return (
    <div>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{props.title1}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>{props.blurb1}</Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>{props.title2}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>{props.blurb2}</Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>{props.title3}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>{props.blurb3}</Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  )
}

export default Panel
