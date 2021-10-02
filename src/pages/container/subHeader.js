import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import AppleIcon from '@mui/icons-material/Apple';

function SubHeader() {
  return (
    <div className="sub_header_container">
      <h2 style={{ color: 'white' }}>
        A STOCK EXCHANGE FOR <span className="trends_heading"> #TRENDS</span>
      </h2>
      <div className="flexBoxSpaceBetween search_bar">
        <div className="flexBoxSpaceBetween">
          <div>
            <SearchIcon color="primary" />
          </div>
          <input type="text" placeholder="Bitcoin" />
        </div>
        <div className="arrow_icon">
          <KeyboardArrowRightIcon />
        </div>
      </div>
      <div className="flexBox search_examples">
        <div style={{ marginRight: '8px' }}>Search examples :</div>
        <div className="flexBoxSpaceBetween examples_icons">
          <div className="flexBoxSpaceBetween">
            <div className="exmaples_names">
              <AppleIcon />
            </div>
            <div>Bitcoin</div>
          </div>
          <div className="flexBoxSpaceBetween">
            <div className="exmaples_names">
              <AppleIcon />
            </div>
            <div>Olympics</div>
          </div>
          <div className="flexBoxSpaceBetween">
            <div className="exmaples_names">
              <AppleIcon />
            </div>
            <div>BTS</div>
          </div>
        </div>{' '}
      </div>
    </div>
  );
}

export default SubHeader;
