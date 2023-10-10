import React, { useState, useContext } from 'react';
import { AppContext } from "../../context/AppContext";
import "./styles.css";
import AppBasico from '../AppBasico';
import AppPremium from '../AppPremium';
export default function PlanoPopup() {

  const { selectedPlan } = useContext(AppContext);


  return (
    <div>
      {selectedPlan ? (
        <>
         <div key={selectedPlan.id} >
          <article className="data-card popup">
            <h3>{selectedPlan.title}</h3>
            <h4>{selectedPlan.price}</h4>
            <p>{selectedPlan.desc1}</p>
            <p>{selectedPlan.desc2}</p>
            <p>{selectedPlan.desc3}</p>
            <p>{selectedPlan.desc4}</p>
            <AppBasico />
            <p>{selectedPlan.desc5}</p>
            <AppPremium />
          </article>
        </div>
        </>
      ): (<p>Erro ao processar informações!</p>)}
    </div>
  );
}
