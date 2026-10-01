let express = require('express');
let router = express.Router();
let { users } = require('../models/users');
let { task } = require('../models/task');

// POST /api/hr/assign-task
router.post("/assign-task", async (req, res) => {
    try {
        let data = req.body;
        let newtask = new task(data);
        let result = await newtask.save();
        res.status(201).send(result);
    } catch (error) {
        console.error("Error creating task:", error);
        res.status(500).json({ error: error.message });
    }
});

// GET /api/hr/viewemp
router.get("/viewemp", async (req, res) => {
    try {
        let result = await users.find();
        res.send(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET /api/hr/viewtasks
router.get("/viewtasks", async (req, res) => {
    try {
        let result = await task.find();   
        res.send(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// DELETE /api/hr/deleteemp/:id
router.delete("/deleteemp/:id", async (req, res) => {
    try {
        let result = await users.findByIdAndDelete(req.params.id);
        if (result) {
            res.send("record deleted success");
        } else {
            res.status(404).send("User not found");
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;