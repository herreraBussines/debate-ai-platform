import mongoose from 'mongoose';

const ScoreSchema = new mongoose.Schema({
  argument: { type: mongoose.Schema.Types.ObjectId, ref: 'Argument', required: true },
  coherence: { type: Number, required: true, min: 0, max: 10 },
  logic: { type: Number, required: true, min: 0, max: 10 },
  persuasiveness: { type: Number, required: true, min: 0, max: 10 },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Score', ScoreSchema);
