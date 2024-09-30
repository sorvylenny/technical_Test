import taskService from '../services/taskService.js';

const taskController = {
  createTask: async (req, res) => {
    await taskService.createTask (req, res);
  },

  deleteTask: async (req, res) => {
    await taskService.deleteTask (req, res);
  },

  getTasks: async (req, res) => {
    await taskService.getTasks (req, res);
  },
};

export default taskController;
