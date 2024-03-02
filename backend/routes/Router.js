const express = require("express");
const router = express();

router.use("/api/users", require("./UserRoutes"))

//test router
router.get("/", (req, res) => {
    res.send("funfou carai")
})

module.exports = router;
