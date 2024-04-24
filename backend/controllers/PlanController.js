const mongoose = require("mongoose");
const Plan = require("../models/Plan");

async function createPlan(req, res) {
    const { title, price, desc1, desc2, desc3, appBasico, appPremium } = req.body;

    try {
        const newPlan = await Plan.create({
            title,
            price,
            desc1,
            desc2,
            desc3,
            appBasico,
            appPremium
        });

        res.status(201).json(newPlan);
    } catch (error) {
        console.error("Erro ao criar plano:", error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function getAllPlans(req, res) {
    try {
        const plans = await Plan.find();
        res.status(200).json(plans);
    } catch (error) {
        console.error("Erro ao buscar planos:", error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function getPlanById(req, res) {
    const { id } = req.params;

    try {
        const plan = await Plan.findById(id);
        if (!plan) {
            res.status(404).json({ error: 'Plano não encontrado' });
            return;
        }
        res.status(200).json(plan);
    } catch (error) {
        console.error("Erro ao buscar plano por ID:", error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function updatePlan(req, res) {
    const { id } = req.params;
    const updatedFields = req.body;

    try {
        const updatedPlan = await Plan.findByIdAndUpdate(id, updatedFields, { new: true });
        if (!updatedPlan) {
            res.status(404).json({ error: 'Plano não encontrado' });
            return;
        }
        res.status(200).json(updatedPlan);
    } catch (error) {
        console.error("Erro ao atualizar plano:", error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function deletePlan(req, res) {
    const { id } = req.params;

    try {
        const deletedPlan = await Plan.findByIdAndDelete(id);
        if (!deletedPlan) {
            res.status(404).json({ error: 'Plano não encontrado' });
            return;
        }
        res.status(200).json(deletedPlan);
    } catch (error) {
        console.error("Erro ao excluir plano:", error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = {
    createPlan,
    getAllPlans,
    getPlanById,
    updatePlan,
    deletePlan,
};
