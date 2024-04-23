import React, { useState, useEffect } from "react";
import { settings } from "../../utils/carousel";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import "./styles.css";

export default function CrudPage() {
  const [items, setItems] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [desc1, setDesc1] = useState("");
  const [desc2, setDesc2] = useState("");
  const [desc3, setDesc3] = useState("");
  const [desc4, setDesc4] = useState("");
  const [desc5, setDesc5] = useState("");
  const [appBasico, setAppBasico] = useState(false);
  const [appPremium, setAppPremium] = useState(false);

  useEffect(() => {
    // Função para carregar os planos ao carregar a página
    loadPlans();
  }, []);

  const loadPlans = async () => {
    try {
      const response = await axios.get("/api/plans"); // Rota para buscar todos os planos
      setItems(response.data);
    } catch (error) {
      console.error("Erro ao carregar planos:", error);
    }
  };

  const handleEdit = (item) => {
    // Função para editar um plano
    setTitle(item.title);
    setPrice(item.price);
    setDesc1(item.desc1);
    setDesc2(item.desc2);
    setDesc3(item.desc3);
    setDesc4(item.desc4);
    setDesc5(item.desc5);
    setAppBasico(item.appBasico);
    setAppPremium(item.appPremium);
    setShowEditModal(true);
  };

  const handleSaveEdit = async () => {
    // Função para salvar as alterações feitas em um plano
    try {
      await axios.put(`/api/plans/${id}`, {
        title,
        price,
        desc1,
        desc2,
        desc3,
        desc4,
        desc5,
        appBasico,
        appPremium,
      });
      setShowEditModal(false);
      loadPlans();
    } catch (error) {
      console.error("Erro ao salvar edição:", error);
    }
  };

  const handleDelete = async () => {
    // Função para excluir um plano
    try {
      await axios.delete(`/api/plans/${id}`);
      setShowEditModal(false);
      loadPlans();
    } catch (error) {
      console.error("Erro ao excluir plano:", error);
    }
  };

  const onSubmit = async (data) => {
    // Função para criar um novo plano
    try {
      await axios.post("/api/plans", data);
      loadPlans();
    } catch (error) {
      console.error("Erro ao criar plano:", error);
    }
  };
  return (
    <section className="crud-page">
      <main id="planos" className="planos">
        <h2 className="planos-titulo">Editar Planos</h2>
        <Slider className="slider-container" {...settings}>
          {items.map((item) => (
            <div key={item.id} className="cards">
              <article className="data-card edit">
                <h3>{item.title}</h3>
                <h4>{item.price}</h4>
                <div className="plan-desc">
                  <p>{item.desc1}</p> <br />
                  <p>{item.desc2}</p> <br />
                  <p>{item.desc3}</p> <br />
                  <p>{item.desc4}</p> <br />
                  <p>{item.desc5}</p>
                </div>
                <Link className="link-text" onClick={() => handleEdit(item)}>
                  Editar
                </Link>
              </article>
            </div>
          ))}
        </Slider>
      </main>
      <div className="crud-container">
        {showEditModal && (
          <div className="edit-modal">
            <div className="edit-modal-content">
              <h2>Editar Item</h2>
              <div className="input-container">
                <label htmlFor="title">Título:</label>
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <span className="bar"></span>
              </div>
              <div className="input-container">
                <label htmlFor="price">Preço:</label>
                <input
                  type="text"
                  id="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
                <span className="bar"></span>
              </div>
              <div className="input-container">
                <label htmlFor="desc1">Descrição 1:</label>
                <input
                  type="text"
                  id="desc1"
                  value={desc1}
                  onChange={(e) => setDesc1(e.target.value)}
                />
                <span className="bar"></span>
              </div>
              <div className="input-container">
                <label htmlFor="desc2">Descrição 2:</label>
                <input
                  type="text"
                  id="desc2"
                  value={desc2}
                  onChange={(e) => setDesc2(e.target.value)}
                />
                <span className="bar"></span>
              </div>
              <div className="input-container">
                <label htmlFor="desc3">Descrição 3:</label>
                <input
                  type="text"
                  id="desc3"
                  value={desc3}
                  onChange={(e) => setDesc3(e.target.value)}
                />
                <span className="bar"></span>
              </div>
              <div className="input-container">
                <label htmlFor="desc4">Descrição 4:</label>
                <input
                  type="text"
                  id="desc4"
                  value={desc4}
                  onChange={(e) => setDesc4(e.target.value)}
                />
                <span className="bar"></span>
              </div>
              <div className="input-container">
                <label htmlFor="appBasico">App Básico:</label>
                <input
                  type="checkbox"
                  id="appBasico"
                  checked={appBasico}
                  onChange={(e) => setAppBasico(e.target.checked)}
                />
              </div>
              <div className="input-container">
                <label htmlFor="desc5">Descrição 5:</label>
                <input
                  type="text"
                  id="desc5"
                  value={desc5}
                  onChange={(e) => setDesc5(e.target.value)}
                />
                <span className="bar"></span>
              </div>
              <div className="input-container">
                <label htmlFor="appPremium">App Premium:</label>
                <input
                  type="checkbox"
                  id="appPremium"
                  checked={appPremium}
                  onChange={(e) => setAppPremium(e.target.checked)}
                />
              </div>
              <div className="buttons">
                <button onClick={handleSaveEdit}>Salvar</button>
                <button onClick={handleDelete}>Excluir</button>
                <button onClick={() => setShowEditModal(false)}>Fechar</button>
              </div>
            </div>
          </div>
        )}
        <div className="form-container">
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <h2>Criar Plano</h2>
            <div className="input-container">
              <label htmlFor="title">Título:</label>
              <input
                type="text"
                id="title"
                {...register("title", { required: true })}
              />
            </div>
            <div className="input-container">
              <label htmlFor="price">Preço:</label>
              <input
                type="text"
                id="price"
                {...register("price", { required: true })}
              />
            </div>
            <div className="input-container">
              <label htmlFor="desc1">Descrição 1:</label>
              <input
                type="text"
                id="desc1"
                {...register("desc1", { required: true })}
              />
            </div>
            <div className="input-container">
              <label htmlFor="desc2">Descrição 2:</label>
              <input
                type="text"
                id="desc2"
                {...register("desc2", { required: true })}
              />
            </div>
            <div className="input-container">
              <label htmlFor="desc3">Descrição 3:</label>
              <input
                type="text"
                id="desc3"
                {...register("desc3", { required: true })}
              />
            </div>
            <div className="input-container">
              <label htmlFor="desc4">Descrição 4:</label>
              <input
                type="text"
                id="desc4"
                {...register("desc4", { required: true })}
              />
            </div>
            <div className="input-container">
              <label htmlFor="appBasico">App Básico:</label>
              <input
                type="checkbox"
                id="appBasico"
                {...register("appBasico")}
              />
            </div>
            <div className="input-container">
              <label htmlFor="desc5">Descrição 5:</label>
              <input
                type="text"
                id="desc5"
                {...register("desc5", { required: true })}
              />
            </div>
            <div className="input-container">
              <label htmlFor="appPremium">App Premium:</label>
              <input
                type="checkbox"
                id="appPremium"
                {...register("appPremium")}
              />
            </div>
            <button type="submit">Criar</button>
          </form>
        </div>
      </div>
    </section>
  );
}
