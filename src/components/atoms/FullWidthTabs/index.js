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
            <GlobalStatistics />
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
