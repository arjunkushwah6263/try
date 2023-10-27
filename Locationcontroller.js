const express = require('express');
const router = express.Router();
const AirplaneMode = require('./models/AirplaneModeModel'); 

router.get('/get-airplane-mode', async (req, res) => {
  try {
    const latestState = await AirplaneMode.findOne().sort({ _id: -1 });
    if (latestState) {
      res.status(200).json({ isAirplaneMode: latestState.isAirplaneMode });
    } else {
      res.status(200).json({ isAirplaneMode: false }); 
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


router.post('/update-airplane-mode', async (req, res) => {
  try {
    const { isAirplaneMode } = req.body;
    const latestState = await AirplaneMode.findOne().sort({ _id: -1 });

    if (latestState) {
      latestState.isAirplaneMode = isAirplaneMode;
      await latestState.save();
    } else {
      const newAirplaneMode = new AirplaneMode({ isAirplaneMode });
      await newAirplaneMode.save();
    }

    res.status(200).json({ message: 'State updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
