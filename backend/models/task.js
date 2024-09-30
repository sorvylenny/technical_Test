import mongoose from 'mongoose';
const {Schema} = mongoose;

const taskSchema = new Schema ({
  title: {type: String, required: true},
  limitDate: {type: Date, required: true},
  persons: [{type: Schema.Types.ObjectId, ref: 'Persons'}],
  status: {type: String, required: true, default: 'pendiente'},
  createdAt: {type: Date, default: Date.now},
});
taskSchema.pre ('find', function () {
  this.populate ({
    path: 'persons',
    populate: {
      path: 'skills',
      model: 'Skills',
    },
  });
});

taskSchema.index ({createdAt: -1, status: 1});

const Task = mongoose.model ('Task', taskSchema);

export default Task;
