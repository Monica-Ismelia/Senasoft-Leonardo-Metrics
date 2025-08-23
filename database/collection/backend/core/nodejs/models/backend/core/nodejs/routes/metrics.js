const express = require('express');
const router = express.Router();
const Enrollment = require('../models/Enrollment');

// GET /metrics/detailed/by-center
router.get('/detailed/by-center', async (req, res) => {
  try {
    const result = await Enrollment.aggregate([
      { $group: { _id: "$trainingCenter", count: { $sum: 1 } } },
      { $project: { _id: 0, trainingCenter: "$_id", count: 1 } }
    ]);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /metrics/detailed/with-github
router.get('/detailed/with-github', async (req, res) => {
  try {
    const count = await Enrollment.countDocuments({ hasGitHub: true });
    res.json({ hasGitHub: count });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
feat(routes): añadidos endpoints detallados
