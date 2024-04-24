const express = require("express");
const router = express();

router.use("/api/users", require("./UserRoutes"))
router.use("/api/plans", require("./PlanRoutes"))

//test router
router.get("/", (req, res) => {
    res.send("funfou carai")
})

router.get("/plans", (req, res) => {
    res.send("tem planos")
})

module.exports = router;
