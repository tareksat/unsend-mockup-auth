const express = require("express");
const router = express.Router();

router.post(`/verifyResetPasswordCode`, (req, res) => {
    const { code, user_name } = req.body;
    res.status(200).send(req.body);
});

module.exports = router;
