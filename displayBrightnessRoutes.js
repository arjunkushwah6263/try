const express = require('express');
const router = express.Router();
const DisplayBrightnessState = require('./models/displayBrightnessState');

// Route to retrieve Display and Brightness state
router.get('/get-display-brightness', async (req, res) => {
  try {
    const initialState = {
      brightness: 50,
      mode: 'light',
      isAutobrightness: false,
      isEyecomfort: false,
      isAutorotate: false,
      isOsi: false,
    };
    const data = await DisplayBrightnessState.findOne().sort({ _id: -1 });
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(200).json(initialState);
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to update Display and Brightness state
router.post('/update-display-brightness', async (req, res) => {
  try {
    const {
      brightness,
      mode,
      isAutobrightness,
      isEyecomfort,
      isAutorotate,
      isOsi,
    } = req.body;
    const data = await DisplayBrightnessState.findOne().sort({ _id: -1 });

    if (data) {
      data.brightness = brightness;
      data.mode = mode;
      data.isAutobrightness = isAutobrightness;
      data.isEyecomfort = isEyecomfort;
      data.isAutorotate = isAutorotate;
      data.isOsi = isOsi;
      await data.save();
    } else {
      const newData = new DisplayBrightnessState({
        brightness,
        mode,
        isAutobrightness,
        isEyecomfort,
        isAutorotate,
        isOsi,
      });
      await newData.save();
    }

    res.status(200).json({ message: 'State updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
