const express = require('express');
const router = express.Router();
const SoundAndVibration = require('./models/SoundAndVibrationModel'); 


router.get('/get-sound-and-vibration', async (req, res) => {
  try {
    const initialState = {
      mediaVolume: 50,
      ringtoneVolume: 50,
      alarmVolume: 50,
      notificationVolume: 50,
      soundMode: 'ringing',
    };
    const data = await SoundAndVibration.findOne().sort({ _id: -1 });
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(200).json(initialState);
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


router.post('/update-sound-and-vibration', async (req, res) => {
  try {
    const { mediaVolume, ringtoneVolume, alarmVolume, notificationVolume, soundMode } = req.body;
    const data = await SoundAndVibration.findOne().sort({ _id: -1 });

    if (data) {
      data.mediaVolume = mediaVolume;
      data.ringtoneVolume = ringtoneVolume;
      data.alarmVolume = alarmVolume;
      data.notificationVolume = notificationVolume;
      data.soundMode = soundMode;
      await data.save();
    } else {
      const newData = new SoundAndVibration({
        mediaVolume,
        ringtoneVolume,
        alarmVolume,
        notificationVolume,
        soundMode,
      });
      await newData.save();
    }

    res.status(200).json({ message: 'State updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
