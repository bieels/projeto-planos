import { about } from "../../Data.json";
import "./styles.css";
import React from 'react'

export default function Diferenciais() {
  return (
    <>
      <section class="diferenciais container">
      <ul className="diferenciais__lista">
            {about.map((about) => (           
                <li className="diferenciais__item diferenciais__item--tempo">
                <h2 className="item__titulo">{about.title}</h2>
                <p className="item__texto" dangerouslySetInnerHTML={{ __html: about.desc }}/>
            </li>
            ))}
           </ul>
      </section>
    </>
  )
}
