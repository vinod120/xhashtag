import React from 'react';

function Footer() {
  return (
    <div className="flexBoxSpaceBetween footer">
      <div className="flexBoxSpaceBetween">
        <div className="footer_social_icons">
          <img
            src="https://uploads-ssl.webflow.com/5fa2604519dfa44038b301b3/5fa26045e9c0a0ba318744d2_twitter-line%201.svg"
            alt=""
            width="20px"
            height="20px"
          />
        </div>
        <div className="footer_social_icons">
          <img
            src="https://uploads-ssl.webflow.com/611df21432d316830ac40060/612132f1a762302822b5f073_med.svg"
            alt=""
            width="20px"
            height="20px"
          />
        </div>
        <div className="footer_social_icons">
          <img
            src="https://uploads-ssl.webflow.com/611df21432d316830ac40060/612096fa8b22994d81c0f36e_tele.svg"
            alt=""
            width="20px"
            height="20px"
          />
        </div>
      </div>
      <div style={{color:'#8a8989'}}>2021 All right reserved</div>
    </div>
  );
}

export default Footer;
