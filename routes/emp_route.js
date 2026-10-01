let express = require('express');
let router = express.Router();

// Import models directly (note: folder name is 'models')
let users = require('../models/users');
let task = require('../models/task');

// POST /api/hr/assign-task
router.post("/assign-task", async (req, res) => {
    try {
        let data = req.body;
        let newtask = new task(data);
        let result = await newtask.save();
        res.status(201).send(result);
    } catch (error) {
        console.error("Database save error:", error);
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;