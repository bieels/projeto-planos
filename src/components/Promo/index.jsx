import "./styles.css";

export default function Promo() {
  return (
    <div className="promo-container">
      <div className="promo-content">
        <img className="promo-img" src="img/router.png" alt="" />
        <div className="promo-text">
          <h2 className="promo-title">Roteador em Comodato</h2>
          <p className="promo-desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa pariatur perspiciatis eos reiciendis rerum accusamus fuga nobis dolorum itaque vitae quisquam ipsum, minima sequi ipsa in sed vero maxime aliquam!</p>
          <button className="promo-btn">Falar com Atendente</button>
        </div>
      </div>
    </div>
  );
}
