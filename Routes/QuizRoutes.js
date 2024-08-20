import express from 'express'
const router = express.Router();
import Response from '../Models/ResponseModel.js';

// POST endpoint to save quiz responses
router.post('/api/submit-quiz', async (req, res) => {
  try {
    const { user, answers } = req.body;

    // Create a new response document
    const newResponse = new Response({
      user,
      answers,
      cronjobdone: false,
    });

    // Save the response to the database
    await newResponse.save();

    res.status(201).json({ message: 'Quiz responses saved successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while saving responses.' });
  }
});

export default router
