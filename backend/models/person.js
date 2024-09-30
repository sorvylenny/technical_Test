import mongoose from 'mongoose';
const {Schema} = mongoose;

const personSchema = new Schema ({
  fullName: {type: String, required: false, default: ''},
  age: {type: String, required: false, default: ''},
  skills: [{type: Schema.Types.ObjectId, ref: 'Skills', required: true}],
});

const Persons = mongoose.model ('Persons', personSchema);

export default Persons;
