import React from 'react';
import ChartPage from './chartsPage';

function BitCoinChart() {
  return (
    <div className="bitcoin_chart_container">
      <div>
        <span className="trends_heading" style={{ marginRight: '5px' }}>
          #
        </span>
        BITCOIN CHART
      </div>
      <div className="flexBoxSpaceBetween">
        <div className="flexBox">
          <div className="chart_properties active">Price</div>
          <div className="chart_properties">Market Cap</div>
          <div className="chart_properties">Trading View</div>
        </div>
        <div className="flexBox">
          <div className="chart_dimensions">1H</div>
          <div  className="chart_dimensions">1D</div>
          <div  className="chart_dimensions">1W</div>
          <div  className="chart_dimensions">1M</div>
        </div>
      </div>
      <div>
        <ChartPage />
      </div>
      <div>
          <h5>LIVE TWEETS COMING IN</h5>
      </div>
      <div className="chart_card"></div>
    </div>
  );
}

export default BitCoinChart;
