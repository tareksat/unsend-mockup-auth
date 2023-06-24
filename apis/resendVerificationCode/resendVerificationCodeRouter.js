const express = require("express");
const router = express.Router();

router.post(`/resendVerificationCode`, (req, res) => {
    const { phone } = req.body;
    res.status(200).send(req.body);
});

module.exports = router;
