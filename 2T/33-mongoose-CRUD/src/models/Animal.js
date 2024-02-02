import mongoose from "mongoose";

const { Schema } = mongoose;

const animalSubSchema = new Schema({
  data: Schema.Types.Mixed
}, { _id: false});

const animalSchema =new Schema({
  name: { type: String, require: true, unique: true},
  type: {
    name: String, enum: ['A', 'B', 'C']
  },
  color: String,
  legs: Number,
  hasTail: Boolean,
  age: Number,
  data: animalSubSchema,
  data2: {
    data: Schema.Types.Mixed
  }
});

const model = mongoose.model('Animal', animalSchema);

export default mongoose.model('Animal', animalSchema);
