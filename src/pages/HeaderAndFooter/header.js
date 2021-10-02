import React from 'react';
import './styles.css';
import logo from '../../images/logo.jpeg';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

function Header() {
  return (
    <div className="flexBoxSpaceBetween header_container">
      <div>
        <img src={logo} alt="logo" width="42px" height="30px" />
      </div>
      <div className="flexBoxSpaceBetween">
          <div>My Hashtag</div>
          <div className="flexBoxSpaceBetween header_wallet">
              <div>
                  <AccountBalanceWalletIcon />
              </div>
              <div style={{fontSize:'14px', marginLeft:'10px'}}>Connect Your Wallet</div>
          </div>
      </div>
    </div>
  );
}

export default Header;
