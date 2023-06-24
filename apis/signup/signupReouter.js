const express = require("express");
const router = express.Router();

router.post(`/signup`, (req, res) => {
    const { first_name, last_name, gender, birth_date, user_name, phone_number, password } = req.body;
    res.status(200).send(req.body)
});

module.exports = router;
