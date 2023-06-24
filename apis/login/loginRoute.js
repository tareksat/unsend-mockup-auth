const express = require("express");
const router = express.Router();

router.post(`/login`, (req, res) => {
    const { user_name, password } = req.body;
    res.status(200).send({ user_name, password })
});

module.exports = router;