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
  const { register, handleSubmit, reset } = useForm();

  const [items, setItems] = useState([]);
  const [idToEdit, setIdToEdit] = useState("");
  const [showEditModal, setShowEditModal] = useState(false);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [desc1, setDesc1] = useState("");
  const [desc2, setDesc2] = useState("");
  const [desc3, setDesc3] = useState("");
  const [desc4, setDesc4] = useState("");
  const [appBasico, setAppBasico] = useState(false);
  const [desc5, setDesc5] = useState("");
  const [appPremium, setAppPremium] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://json-server-dw.vercel.app/plans"
        );
        setItems(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }

    fetchData();
  }, []);

  const onSubmit = async (data) => {
    try {
      const newItem = { ...data };
      const response = await axios.post(
        "https://json-server-dw.vercel.app/plans",
        newItem
      );
      newItem.id = response.data.id;
      setItems([...items, newItem]);
      reset();
    } catch (error) {
      console.error("Error creating item: ", error);
    }
  };

  const handleEdit = (item) => {
    setIdToEdit(item.id);
    setTitle(item.title);
    setPrice(item.price);
    setDesc1(item.desc1);
    setDesc2(item.desc2);
    setDesc3(item.desc3);
    setDesc4(item.desc4);
    setAppBasico(item.appBasico);
    setDesc5(item.desc5);
    setAppPremium(item.appPremium);
    setShowEditModal(true);
  };

  const handleSaveEdit = async () => {
    try {
      const updatedItem = {
        title,
        price,
        desc1,
        desc2,
        desc3,
        desc4,
        appBasico,
        desc5,
        appPremium,
      };
      await axios.put(
        `https://json-server-dw.vercel.app/plans/${idToEdit}`,
        updatedItem
      );

      const updatedItems = items.map((item) =>
        item.id === idToEdit ? { ...item, ...updatedItem } : item
      );

      setItems(updatedItems);
      clearForm();
    } catch (error) {
      setShowEditModal(false);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`https://json-server-dw.vercel.app/plans/${idToEdit}`);
      const updatedItems = items.filter((item) => item.id !== idToEdit);
      setItems(updatedItems);
      clearForm();
    } catch (error) {
      setShowEditModal(false);
    }
  };

  const clearForm = () => {
    setIdToEdit("");
    setTitle("");
    setPrice("");
    setDesc1("");
    setDesc2("");
    setDesc3("");
    setDesc4("");
    setAppBasico(false);
    setDesc5("");
    setAppPremium(false);
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
