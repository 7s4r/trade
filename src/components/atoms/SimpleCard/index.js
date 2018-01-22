import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, createStyleSheet } from 'material-ui/styles'
import Card, { CardActions, CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'

const styleSheet = createStyleSheet(theme => ({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
    color: theme.palette.text.secondary,
  },
  pos: {
    marginBottom: 12,
    color: theme.palette.text.secondary,
  },
}))

const SimpleCard = ({ title, classes, children }) => (
  <div>
    <Card className={classes.card}>
      <CardContent>
        <Typography type="body1" className={classes.title}>
          {title}
        </Typography>
        <Typography component="p">
          {children}
        </Typography>
      </CardContent>
    </Card>
  </div>
)

SimpleCard.propTypes = {
  title: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired,
}

export default withStyles(styleSheet)(SimpleCard)
