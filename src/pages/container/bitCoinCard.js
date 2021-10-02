import React from 'react';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import AssessmentIcon from '@mui/icons-material/Assessment';

function BitCoinCard() {
  return (
    <div className="bitcoin_card_container">
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ marginRight: '8px' }}>
          <StarBorderIcon />
        </span>
        <span className="text_span">Bitcoin</span>
        <span
          style={{ marginLeft: '60px', marginRight: '5px' }}
          className="trends_heading"
        >
          #{' '}
        </span>{' '}
        Bitcoin
      </div>
      <div className="flexBoxSpaceBetween dark_gray_color small_font_size">
        <div className="rank">Rank #1</div>
        <div>Public/Partner</div>
        <div>
          <button>Community</button>
        </div>
      </div>
      <div className="dark_gray_color small_font_size">
        <div className="bottom_margin">Contacts</div>
        <div style={{ fontSize: '14px' , display:'flex', alignItems:'center'}}>
          0x1337ace33c2b3fc17d85f33dbd0ed73a896148b5 <span style={{marginLeft:'5px'}}><ContentCopyIcon /></span><span style={{marginLeft:'5px'}}><AssessmentIcon /></span>
        </div>
      </div>
      <div className="flexBoxSpaceBetween">
        <div>
          <span className="dark_gray_color small_font_size bottom_margin">
            #24hr Tweet Count
          </span>
          <br />
          <div className="flexBox">
            <span className="text_span">92137</span>
            <span className="text_color_green">21.31%</span>
          </div>
        </div>
        <div style={{marginRight:'50px'}}>
          <span className="dark_gray_color small_font_size bottom_margin">
            Rewards/Day
          </span>
          <br />
          <span className="text_span">200 XTAG</span>
        </div>
      </div>
      <div className="flexBoxSpaceBetween">
        <div>
          <span className="dark_gray_color small_font_size bottom_margin">
            Total XTAG Locked
          </span>
          <br />
          <span className="text_span">200</span>
        </div>
        <div >
          <span className="dark_gray_color small_font_size bottom_margin">
            #Circulating Supply
          </span>
          <div className="flexBox" style={{marginRight:'44px'}}>
            <span className="text_span">200</span>
            <span className="text_color_red">3.00%</span>
          </div>
        </div>
      </div>
      <div className="flexBoxSpaceBetween">
        <div>
          <span className="dark_gray_color small_font_size bottom_margin">
            #bitcoin Balance
          </span>
          <br />
          <span className="text_span">11</span>
        </div>
        <div style={{marginRight:'24px'}}>
          <span className="dark_gray_color small_font_size bottom_margin">
            #Circulating Supply
          </span>
          <br />
          <div>
            <span className="text_span">200</span>
          </div>
        </div>
      </div>
      <div className="flexBoxSpaceBetween">
        <div>
          <span className="dark_gray_color small_font_size top_margin ">
            Current Price
          </span>
          <br />
          <span className="text_span">1.1 XTAG</span>
        </div>
        <div className="margin_right">
          <button>BUY</button>
          <button>SELL</button>
        </div>
      </div>
    </div>
  );
}

export default BitCoinCard;
