import mongoose from 'mongoose';

const ArgumentSchema = new mongoose.Schema({
  debate: { type: mongoose.Schema.Types.ObjectId, ref: 'Debate', required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Argument', ArgumentSchema);
