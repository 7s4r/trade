/* eslint-disable react/no-multi-comp */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles, createStyleSheet } from 'material-ui/styles'
import SwipeableViews from 'react-swipeable-views'
import AppBar from 'material-ui/AppBar'
import Tabs, { Tab } from 'material-ui/Tabs'

import { SimpleCard, ExchangeCard } from 'components'

const TabContainer = props => (
  <div style={{ padding: 24 }}>
    {props.children}
  </div>
)

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
}

const styleSheet = createStyleSheet(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
}))

class FullWidthTabs extends Component {
  state = {
    index: 0,
  }

  handleChange = (event, index) => {
    this.setState({ index })
  }

  handleChangeIndex = (index) => {
    this.setState({ index })
  }

  render() {
    const classes = this.props.classes

    return (
      <div className={classes.root} style={{ width: '100%' }}>
        <AppBar position="static" color="default">
          <Tabs
            index={this.state.index}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            fullWidth
          >
            <Tab label="ETHEREUM" />
            <Tab label="BITCOIN" />
          </Tabs>
        </AppBar>
        <SwipeableViews index={this.state.index} onChangeIndex={this.handleChangeIndex}>
          <TabContainer>
            <SimpleCard title="Global statistics">
              Current price: 267.535$<br />
              Volume 1h: 3400 (buy: 1893 sell: 1507)<br />
              Volume 24h: 166927<br />
              Change 1h: 5.2$ (3%)<br />
              Change 24h: 3.45$ (2%)<br />
              Change 7d: 11.87$ (13%)<br />
              Low 24h: 257.32$<br />
              High 24h: 278.13$<br />
            </SimpleCard>
            <SimpleCard title="Global market depth">
              highchart
            </SimpleCard>
            <ExchangeCard name="kraken" title="Kraken" />
            <ExchangeCard name="bitfinex" title="Bitfinex" />
            <ExchangeCard name="Gdax" title="Gdax" />
          </TabContainer>
          <TabContainer>
            {'BTC'}
          </TabContainer>
        </SwipeableViews>
      </div>
    )
  }
}

FullWidthTabs.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styleSheet)(FullWidthTabs)
