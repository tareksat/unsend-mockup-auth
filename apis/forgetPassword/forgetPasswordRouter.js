const express = require("express");
const router = express.Router();

router.post(`/forgetPassword`, (req, res) => {
    const {username} = req.body;
    res.status(200).send(req.body);
});

module.exports = router;
