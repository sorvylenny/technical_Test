import skillService from '../services/skillService.js';

const skillController = {
  createSkill: async (req, res) => {
    await skillService.createSkill (req, res);
  },

  deleteSkill: async (req, res) => {
    await skillService.deleteSkill (req, res);
  },
};

export default skillController;
