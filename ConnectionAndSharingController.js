const express = require('express');
const router = express.Router();
const ConnectionAndSharing = require('./models/ConnectionAndSharingModel'); // Import the model



router.get('/get-connection-and-sharing', async (req, res) => {
    try {
      const data = await ConnectionAndSharing.findOne();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  
  router.post('/update-connection-and-sharing', async (req, res) => {
    try {
      const { isAirplaneMode, isHotspot, isBluetooth } = req.body;
      const data = await ConnectionAndSharing.findOneAndUpdate();
  
      if (data) {
        data.isAirplaneMode = isAirplaneMode;
        data.isHotspot = isHotspot;
        data.isBluetooth = isBluetooth;
        await data.save();
      } else {
        const newData = new ConnectionAndSharing({ isAirplaneMode, isHotspot, isBluetooth });
        await newData.save();
      }
  
      res.status(200).json({ message: 'State updated successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  module.exports = router;
  