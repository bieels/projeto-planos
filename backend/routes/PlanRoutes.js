const express = require("express");
const router = express.Router();

const {
    createPlan,
    getAllPlans,
    getPlanById,
    updatePlan,
    deletePlan,
} = require("../controllers/PlanController");

// Middlewares 
const authGuard = require("../middlewares/authGuard");
const validate = require("../middlewares/handleValidations");

// Routes
router.get("/plans", getAllPlans);
router.get("/plans/:id", getPlanById);
router.post("/plans",  createPlan);
router.put("/plans/:id",  updatePlan);
router.delete("/plans/:id", deletePlan);

module.exports = router;
