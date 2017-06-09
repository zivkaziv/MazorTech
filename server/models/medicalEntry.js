import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const schema = new Schema({
  condition: { type: 'String', required: true },
  rights: { type: 'Object', required: true },
  dateAdded: { type: 'Date', default: Date.now, required: true }
});

export default mongoose.model('MedicalEntry', schema);
