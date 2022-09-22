import React from 'react';
import { CloseOutline, CheckOutline } from 'antd-mobile-icons';
import ECookLogo from '../../images/ecook.svg';
import classes from './navBar.module.css';

function NavBar() {
  return (
      <div className={classes.navigation}>

        <CloseOutline style={{ fontSize: "28px"}}/>
        <ECookLogo  />
        <CheckOutline  style={{ fontSize: "28px"}}/>

      </div>
  
  );
}

export default NavBar;
