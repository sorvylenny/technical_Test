import mongoose from "mongoose";
const { Schema } = mongoose;

const skillSchema = new Schema({
  name: { type: String, required: true }, 
});

const Skills = mongoose.model("Skills", skillSchema);

export default Skills; 