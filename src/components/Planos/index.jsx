import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import "./styles.css";
import Slider from "react-slick";
import { settings } from "../../utils/carousel";
import { AppContext } from "../../context/AppContext";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import PlanoPopup from "../PlanoPopup";

export default function Planos() {
  const { setShowModal, setSelectedPlan, setModalContent } =
    useContext(AppContext);
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://json-server-dw.vercel.app/plans");
        const highlightsData = response.data || [];
        setPlans(highlightsData);
      } catch (error) {
        console.error('Erro ao carregar os dados:', error);
      }
    };
    fetchData();
  }, []);

  const handlePlanSelect = (planId) => {
    const selectedPlan = plans.find((plan) => plan._id === planId);
    setSelectedPlan(selectedPlan);
  };

  return (
    <section id="plans" className="planos">
      <h2 className="planos-titulo">Os melhores planos de internet fibra</h2>
      <Slider className="slider-container" {...settings}>
        {plans.map((plan) => (
          <div key={plan._id} className="cards">
            <article className="data-card">
              <h3>{plan.title}</h3>
              <h4>{plan.price}</h4>
              <div className="plan-desc">
                <p>{plan.desc1}</p>
                <br />
                <p>{plan.desc2}</p>
                <br />
                <p>{plan.desc3}</p>
              </div>
              <Link
                className="link-text button"
                onClick={() => {
                  handlePlanSelect(plan._id); 
                  setShowModal(true);
                  setModalContent(<PlanoPopup selectedPlan={plan} />);
                  console.log(plan._id);
                }}
              >
                Confira Agora
                <ArrowForwardRoundedIcon className="arrow-icon" />
              </Link>
            </article>
          </div>
        ))}
      </Slider>
    </section>
  );
}
