import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";
import { api, requestConfig } from "../../utils/config";

const CrudPlans = () => {
  const [plans, setPlans] = useState([]);
  const [form, setForm] = useState({
    title: "",
    price: "",
    desc1: "",
    desc2: "",
    desc3: "",
    appBasico: false,
    appPremium: false,
  });
  const [editingPlanId, setEditingPlanId] = useState(null);

  const fetchPlans = async () => {
    try {
      const response = await axios.get(api);
      setPlans(response.data);
    } catch (error) {
      console.error("Error fetching plans:", error);
    }
  };

  const createPlan = async () => {
    try {
      const response = await axios.post(api , form);
      setPlans([...plans, response.data]);
      setForm({
        title: "",
        price: "",
        desc1: "",
        desc2: "",
        desc3: "",
        appBasico: false,
        appPremium: false,
      });
    } catch (error) {
      console.error("Error creating plan:", error);
    }
  };

  const updatePlan = async () => {
    try {
      const response = await axios.put(`http://localhost:5000/api/plans/${editingPlanId}`, form);
      setPlans(plans.map(plan => (plan._id === editingPlanId ? response.data : plan)));
      setForm({
        title: "",
        price: "",
        desc1: "",
        desc2: "",
        desc3: "",
        appBasico: false,
        appPremium: false,
      });
      setEditingPlanId(null);
    } catch (error) {
      console.error("Error updating plan:", error);
    }
  };

  const deletePlan = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/plans/${id}`);
      setPlans(plans.filter(plan => plan._id !== id));
    } catch (error) {
      console.error("Error deleting plan:", error);
    }
  };

  useEffect(() => {
    fetchPlans();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingPlanId) {
      updatePlan();
    } else {
      createPlan();
    }
  };

  const handleEdit = (plan) => {
    setForm({
      title: plan.title,
      price: plan.price,
      desc1: plan.desc1,
      desc2: plan.desc2,
      desc3: plan.desc3,
      appBasico: plan.appBasico,
      appPremium: plan.appPremium,
    });
    setEditingPlanId(plan._id);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="container">
      <h1 className="title">CRUD Plans</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
        />
        <input
          className="input"
          type="text"
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
        />
        <input
          className="input"
          type="text"
          name="desc1"
          placeholder="Description 1"
          value={form.desc1}
          onChange={handleChange}
        />
        <input
          className="input"
          type="text"
          name="desc2"
          placeholder="Description 2"
          value={form.desc2}
          onChange={handleChange}
        />
        <input
          className="input"
          type="text"
          name="desc3"
          placeholder="Description 3"
          value={form.desc3}
          onChange={handleChange}
        />
        <div className="checkbox">
          <input
            type="checkbox"
            name="appBasico"
            checked={form.appBasico}
            onChange={handleChange}
          />
          <label>App Básico</label>
        </div>
        <div className="checkbox">
          <input
            type="checkbox"
            name="appPremium"
            checked={form.appPremium}
            onChange={handleChange}
          />
          <label>App Premium</label>
        </div>
        <button className="button" type="submit">
          {editingPlanId ? "Update" : "Create"}
        </button>
      </form>
      <ul className="plan-list">
        {plans.map((plan) => (
          <li className="plan-item" key={plan._id}>
            <div className="plan-text"><strong>Title:</strong> {plan.title}</div>
            <div className="plan-text"><strong>Price:</strong> {plan.price}</div>
            <div className="plan-text"><strong>Description 1:</strong> {plan.desc1}</div>
            <div className="plan-text"><strong>Description 2:</strong> {plan.desc2}</div>
            <div className="plan-text"><strong>Description 3:</strong> {plan.desc3}</div>
            <div className="plan-text"><strong>App Básico:</strong> {plan.appBasico ? "Yes" : "No"}</div>
            <div className="plan-text"><strong>App Premium:</strong> {plan.appPremium ? "Yes" : "No"}</div>
            <div className="plan-actions">
              <button className="button" onClick={() => handleEdit(plan)}>Edit</button>
              <button className="button button-delete" onClick={() => deletePlan(plan._id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CrudPlans;
