const express = require("express");
const router = express.Router();

router.post(`/resetPassword`, (req, res) => {
    const { resetToken, new_password } = req.body;
    res.status(200).send(req.body);
});

module.exports = router;

