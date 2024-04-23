const mongoose = require("mongoose");
const Plan = require("../models/Plan");

async function createPlan(title, price, desc1, desc2, desc3, appBasico, appPremium) {
    try {
        const newPlan = new Plan({
            title,
            price,
            desc1,
            desc2,
            desc3,
            appBasico,
            appPremium
        });
        const savedPlan = await newPlan.save();
        console.log("Novo plano criado:", savedPlan);
        return savedPlan;
    } catch (error) {
        console.error("Erro ao criar plano:", error);
        throw error;
    }
}

// Função para buscar todos os planos
async function getAllPlans() {
    try {
        const plans = await Plan.find();
        console.log("Todos os planos:", plans);
        return plans;
    } catch (error) {
        console.error("Erro ao buscar planos:", error);
        throw error;
    }
}

// Função para buscar um plano pelo ID
async function getPlanById(planId) {
    try {
        const plan = await Plan.findById(planId);
        if (!plan) {
            console.log("Plano não encontrado");
            return null;
        }
        console.log("Plano encontrado:", plan);
        return plan;
    } catch (error) {
        console.error("Erro ao buscar plano por ID:", error);
        throw error;
    }
}

// Função para atualizar um plano pelo ID
async function updatePlan(planId, updatedFields) {
    try {
        const updatedPlan = await Plan.findByIdAndUpdate(planId, updatedFields, { new: true });
        if (!updatedPlan) {
            console.log("Plano não encontrado");
            return null;
        }
        console.log("Plano atualizado:", updatedPlan);
        return updatedPlan;
    } catch (error) {
        console.error("Erro ao atualizar plano:", error);
        throw error;
    }
}

// Função para excluir um plano pelo ID
async function deletePlan(planId) {
    try {
        const deletedPlan = await Plan.findByIdAndDelete(planId);
        if (!deletedPlan) {
            console.log("Plano não encontrado");
            return null;
        }
        console.log("Plano excluído:", deletedPlan);
        return deletedPlan;
    } catch (error) {
        console.error("Erro ao excluir plano:", error);
        throw error;
    }
}

// Exemplo de uso
async function testCrud() {
    try {
        // Criar um novo plano
        const createdPlan = await createPlan("Plano Teste", "R$ 99,99", "Descrição 1", "Descrição 2", "Descrição 3", true, false);

        // Buscar todos os planos
        const allPlans = await getAllPlans();

        // Buscar um plano pelo ID
        const planById = await getPlanById(createdPlan._id);

        // Atualizar um plano pelo ID
        const updatedPlan = await updatePlan(createdPlan._id, { price: "R$ 149,99" });

        // Excluir um plano pelo ID
        const deletedPlan = await deletePlan(createdPlan._id);
    } catch (error) {
        console.error("Erro no teste do CRUD:", error);
    }
}


module.exports = {
    createPlan,
    getAllPlans,
    getPlanById,
    updatePlan,
    deletePlan,
}