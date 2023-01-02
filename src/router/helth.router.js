const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    return res.status(201).json("ok");
});

module.exports = router;