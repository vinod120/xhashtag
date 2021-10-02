import React from 'react';
import BitCoinCard from './bitCoinCard';
import BitCoinChart from './bitcoinChart';

function BitcionPages() {
  return (
    <div className="flexBoxSpaceBetween bitcoin_container">
      <div className="bitcoin_card">
        <BitCoinCard />
      </div>
      <div className="bitcoin_chart">
        <BitCoinChart />
      </div>
    </div>
  );
}

export default BitcionPages;
