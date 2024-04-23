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
router.get("/", getAllPlans);
router.get("/:id", getPlanById);
router.post("/", authGuard, validate, createPlan);
router.put("/:id", authGuard, validate, updatePlan);
router.delete("/:id", authGuard, deletePlan);

module.exports = router;
