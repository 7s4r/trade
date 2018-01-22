import React from 'react'

import { SimpleCard } from 'components'

const GlobalStatistics = () => (
  <SimpleCard title="Global statistics">
    Current price: 267.535$<br />
    Volume 1h: 3400 (+1%) (buy: 1893 sell: 1507)<br />
    Volume 24h: 166927 (+2%)<br />
    Change 1h: +5.2$ (+3%)<br />
    Change 24h: +3.45$ (+2%)<br />
    Change 7d: +11.87$ (+13%)<br />
    Low 24h: 257.32$<br />
    High 24h: 278.13$<br />
  </SimpleCard>
)

export default GlobalStatistics
