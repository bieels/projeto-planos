import React, { useState, useContext } from 'react';
import { AppContext } from "../../context/AppContext";
export default function PlanoPopup() {

  const { selectedPlan } = useContext(AppContext);


  return (
    <div>
      {selectedPlan ? (
        <>
         <div key={selectedPlan.id} className="cards" >
          <article className="data-card">
            <h3>{selectedPlan.title}</h3>
            <h4>{selectedPlan.price}</h4>
            <p>{selectedPlan.desc1}</p>
            <p>{selectedPlan.desc2}</p>
            <p>{selectedPlan.desc3}</p>
            <p>{selectedPlan.desc4}</p>
            <p>{selectedPlan.desc5}</p>
          </article>
        </div>
        </>
      ): (<p style={color="red"}>Erro ao processar informações!</p>)}
    </div>
  );
}
