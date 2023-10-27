const express = require('express');
const router = express.Router();
const LocationMode = require('./models/locationModeModel'); 

router.get('/get-location-mode', async (req, res) => {
  try {
    const latestState = await LocationMode.findOne().sort({ _id: -1 });
    if (latestState) {
      res.status(200).json({ isLocationMode: latestState.isLocationMode });
    } else {
      res.status(200).json({ isLocationMode: false }); 
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/update-location-mode', async (req, res) => {
  try {
    const { isLocationMode } = req.body;
    const latestState = await LocationMode.findOne().sort({ _id: -1 });

    if (latestState) {
      latestState.isLocationMode = isLocationMode;
      await latestState.save();
    } else {
      const newLocationMode = new LocationMode({ isLocationMode });
      await newLocationMode.save();
    }

    res.status(200).json({ message: 'Location Mode updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
