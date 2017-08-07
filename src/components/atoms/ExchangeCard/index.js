import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, createStyleSheet } from 'material-ui/styles'
import Card, { CardActions, CardContent } from 'material-ui/Card'
import Button from 'material-ui/Button'
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
  pos: {
    marginBottom: 12,
    color: theme.palette.text.secondary,
  },
  button: {
    margin: theme.spacing.unit,
  },
}))

const ExchangeCard = ({ title, classes }) => (
  <div>
    <Card className={classes.card}>
      <CardContent>
        <Typography type="headline" component="h2">
          {title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button raised color="primary" className={classes.button}>
          BUY
        </Button>
        <Button raised color="accent" className={classes.button}>
          SELL
        </Button>
      </CardActions>
    </Card>
  </div>
)

ExchangeCard.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
}

export default withStyles(styleSheet)(ExchangeCard)
