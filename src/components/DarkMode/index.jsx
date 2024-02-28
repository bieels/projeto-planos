import "./styles.css";
import Sun from "@mui/icons-material/LightMode";
import Moon from "@mui/icons-material/Brightness3";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
export default function DarkMode() {
  const { toggleTheme, isActive } = useContext(AppContext);
  

  return (
    <div className="dark_mode">
      <button className="dark_mode_button" onClick={toggleTheme}>
        {isActive ? (
          <Sun sx={{ color: "#ffffff" }} className="icon" />
        ) : (
          <Moon sx={{ color: "#3b3b3b" }} className="icon" />
        )}
      </button>
    </div>
  );
}
