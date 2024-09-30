import Task from '../models/task.js';
import Skills from '../models/skills.js';
import Person from '../models/person.js';

const taskService = {
  createTask: async (req, res) => {
    const {limitDate} = req.body;
    const date = new Date (limitDate);
    req.body.limitDate = date;
    const newTask = new Task (req.body);
    try {
      const savedTask = await newTask.save ();
      res.status (200).json (savedTask);
    } catch (err) {
      res.status (500).json (err);
    }
  },

  deleteTask: async (req, res) => {
    const {id} = req.params;
    try {
      const deletedTask = await Task.findByIdAndDelete (id);
      if (!deletedTask) {
        return res.status (404).json ({error: 'Task not found'});
      }
      res.status (200).json ({message: 'Task deleted successfully'});
    } catch (err) {
      res.status (500).json (err);
    }
  },

  getTasks: async (req, res) => {
    try {
      const status = req.query.status;

      const tasks = await Task.find (status ? {status} : {});

      res.status (200).json (tasks);
    } catch (error) {
      console.error ('Error al obtener tareas:', error);
      res.status (500).json ({message: 'Error al obtener tareas'});
    }
  },
};

export default taskService;
