import React, { useState, useContext } from "react";
import "./styles.css";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ShoppingBagRoundedIcon from "@mui/icons-material/ShoppingBagRounded";
import Person2RoundedIcon from "@mui/icons-material/Person2Rounded";
import MenuIcon from "@mui/icons-material/Menu";
import Sun from "@mui/icons-material/LightMode";
import Moon from "@mui/icons-material/Brightness3";
import { AppContext } from "../../context/AppContext";
export default function BottomBar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const { toggleTheme, isActive } = useContext(AppContext);

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
          <ShoppingBagRoundedIcon className="icon" />
          <span className="option-label">Planos</span>
        </a>
      </div>
      <div className="bottom-bar-option">
        <a className="option-button client-button" href="">
          <Person2RoundedIcon className="icon" />
          <span className="option-label">Cliente</span>
        </a>
      </div>
      <div className="bottom-bar-option">
        <a className="option-button" href="#contato">
          <WhatsAppIcon className="icon" />
          <span className="option-label">Contato</span>
        </a>
      </div>
      <div className="bottom-bar-option">
        <div className="dropdown">
          <a
            className="option-button"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <MenuIcon className="icon" />
            <span className="option-label">Opções</span>
          </a>
        </div>
        <div className={showDropdown ? "dropdown-hidden" : "dropdown-content"}>
          <button className="dropdown-btn" onClick={toggleTheme}>
            {isActive ? (
              <Sun sx={{ color: "#ffffff" }} className="icon" />
            ) : (
              <Moon sx={{ color: "#3b3b3b" }} className="icon" />
            )}
            
          </button>
          {/* <button className="dropdown-btn">Opção 2</button> */}
        </div>
      </div>
    </div>
  );
}
