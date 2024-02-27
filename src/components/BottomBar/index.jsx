import React from "react";
import "./styles.css";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ShoppingBagRoundedIcon from '@mui/icons-material/ShoppingBagRounded';
import Person2RoundedIcon from '@mui/icons-material/Person2Rounded';

export default function BottomBar() {

  return (
    <div className="bottom-bar">
      <div className="bottom-bar-option">
        <a className="option-button" href="#home">
         <HomeRoundedIcon className="icon" />
          <span className="option-label">Ínicio</span>
        </a>
      </div>
      <div className="bottom-bar-option">
        <a className="option-button" href="#plans">
          <ShoppingBagRoundedIcon className="icon"/>
          <span className="option-label">Planos</span>
        </a>
      </div>
      <div className="bottom-bar-option">
        <a className="option-button" href="#contato">
          <WhatsAppIcon className="icon"/>
          <span className="option-label">Contato</span>
        </a>
      </div>
      <div className="bottom-bar-option">
        <a className="option-button" >
         <Person2RoundedIcon className="icon"/>
          <span className="option-label">Cliente</span>
        </a>
      </div>
    </div>
  );
}
