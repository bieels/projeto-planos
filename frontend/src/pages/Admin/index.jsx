import React, { useState, useEffect } from "react";
import axios from "axios";

const CrudComponent = () => {
  const [plans, setPlans] = useState([]);
  const [newPlan, setNewPlan] = useState({});

  const fetchPlans = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/plans/plans");
      setPlans(response.data);
    } catch (error) {
      console.error("Error fetching plans:", error);
    }
  };

  const createPlan = async () => {
    try {
      await axios.post("http://localhost:5000/api/plans/plans", newPlan);
      setNewPlan({});
      fetchPlans();
    } catch (error) {
      console.error("Error creating plan:", error);
    }
  };

  const deletePlan = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/plans/plans/${id}`);
      fetchPlans();
    } catch (error) {
      console.error("Error deleting plan:", error);
    }
  };

  useEffect(() => {
    fetchPlans();
  }, []);

  return (
    <div>
      <h2>Plans</h2>
      <ul>
        {plans.map((plan) => (
          <li key={plan.id}>
            {plan.name}
            <button onClick={() => deletePlan(plan.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <h2>Create New Plan</h2>
      <input
        type="text"
        placeholder="Name"
        value={newPlan.name || ""}
        onChange={(e) => setNewPlan({ ...newPlan, name: e.target.value })}
      />
      <button onClick={createPlan}>Create</button>
    </div>
  );
};

export default CrudComponent;
