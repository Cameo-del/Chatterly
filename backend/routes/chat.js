const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.json({ message: "Chat API is working!" });
});

module.exports = router; // ✅ Ensure ONLY the router is exported
