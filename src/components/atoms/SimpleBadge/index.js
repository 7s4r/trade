import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, createStyleSheet } from 'material-ui/styles'
import Badge from 'material-ui/Badge'
import MailIcon from 'material-ui-icons/Mail'

const styleSheet = createStyleSheet(theme => ({
  badge: {
    margin: `0 ${theme.spacing.unit * 2}px`,
  },
}))

const SimpleBadge = ({ classes }) => (
  <div>
    <Badge className={classes.badge} badgeContent={4} color="accent">
      <MailIcon />
    </Badge>
  </div>
)

SimpleBadge.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styleSheet)(SimpleBadge)
