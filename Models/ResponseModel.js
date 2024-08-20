import mongoose from "mongoose";

const responseSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  answers: [
    {
      q_id: Number,
      question: String,
      selectedOption: String,
    },
  ],
  score: { type: Number, default: 0 },
  emailSent: { type: Boolean, default: false },
  cronjobdone: { type: Boolean, default: false },

});

const Response = mongoose.model('Response', responseSchema);

export default Response;
