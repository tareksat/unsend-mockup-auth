const express = require("express");
const router = express.Router();

router.post(`/changePassword`, (req, res) => {
    const { old_password, new_password } = req.body;
    res.status(200).send(req.body);
});

module.exports = router;
