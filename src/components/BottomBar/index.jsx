import React from "react";
import "./styles.css";

export default function BottomBar() {
  return (
    <div className="bottom-bar">
      <div className="bottom-bar-option">
        <button className="option-button">
          <img
            src="https://via.placeholder.com/24"
            alt="Opção 1"
            className="option-icon"
          />
          <span className="option-label">Opção 1</span>
        </button>
      </div>
      <div className="bottom-bar-option">
        <button className="option-button">
          <img
            src="https://via.placeholder.com/24"
            alt="Opção 2"
            className="option-icon"
          />
          <span className="option-label">Opção 2</span>
        </button>
      </div>
      <div className="bottom-bar-option">
        <button className="option-button">
          <img
            src="https://via.placeholder.com/24"
            alt="Opção 3"
            className="option-icon"
          />
          <span className="option-label">Opção 3</span>
        </button>
      </div>
      <div className="bottom-bar-option">
        <button className="option-button">
          <img
            src="https://via.placeholder.com/24"
            alt="Opção 4"
            className="option-icon"
          />
          <span className="option-label">Opção 4</span>
        </button>
      </div>
    </div>
  );
}
