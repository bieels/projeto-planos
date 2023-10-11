import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.css";
import Slider from "react-slick";
import { settings } from "../../utils/carousel";
import { AppContext } from "../../context/AppContext";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


export default function Planos() {
  const { setShowModal, setSelectedPlan } = useContext(AppContext);
  const [plans, setPlans] = useState([]);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://json-server-dw.vercel.app/plans");
        const plansData = response.data || [];
        setPlans(plansData);
      } catch (error) {
        console.error('Erro ao carregar os dados:', error);
      }
    };
    fetchData();
  }, []);
  
  const handlePlanSelect = (planId) => {
    const selectedPlan = plans.find(plan => plan.id === planId);
    setSelectedPlan(selectedPlan);
  };
  

  return (
    <>
      <section id="planos" className="planos">
      <h2 className="planos-titulo">Nossos Planos</h2>
        <Slider className="slider-container" {...settings}>
          {plans.map((plan) => (
            <div key={plan.id} className="cards">
              <article className="data-card">
                <h3>{plan.title}</h3>
                <h4>{plan.price}</h4>
                <div className="plan-desc">
                  {" "}
                  <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--fonte-preta)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 9l-5 5-5-5M12 12.8V2.5" />
                    </svg>
                    {plan.desc1}
                  </p>{" "}
                  <br />
                  <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--fonte-preta)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="9 11 12 14 22 4"></polyline>
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                    </svg>
                    {plan.desc2}
                  </p>{" "}
                  <br />
                  <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--fonte-preta)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 8l-5-5-5 5M12 4.2v10.3" />
                    </svg>
                    {plan.desc3}
                  </p>
                </div>
                <Link className="link-text" onClick={() => {setShowModal(true); handlePlanSelect(plan.id)}}>
                  Confira Agora
                  <svg
                    width="25"
                    height="16"
                    viewBox="0 0 25 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M17.8631 0.929124L24.2271 7.29308C24.6176 7.68361 24.6176 8.31677 24.2271 8.7073L17.8631 15.0713C17.4726 15.4618 16.8394 15.4618 16.4489 15.0713C16.0584 14.6807 16.0584 14.0476 16.4489 13.657L21.1058 9.00019H0.47998V7.00019H21.1058L16.4489 2.34334C16.0584 1.95281 16.0584 1.31965 16.4489 0.929124C16.8394 0.538599 17.4726 0.538599 17.8631 0.929124Z"
                      fill="var(--fonte-preta)"
                    />
                  </svg>
                </Link>
              </article>
            </div>
          ))}
        </Slider>
      </section>
    </>
  );
}
