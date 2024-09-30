import Skill from '../models/skills.js';

const skillService = {
  createSkill: async (req, res) => {
    const {name} = req.body;
    const newSkill = new Skill ({
      name,
    });
    try {
      const savedSkill = await newSkill.save ();
      res.status (200).json (savedSkill);
    } catch (err) {
      res.status (500).json (err);
    }
  },

  deleteSkill: async (req, res) => {
    const {id} = req.params;
    try {
      const deletedSkill = await Skill.findByIdAndDelete (id);

      if (!deletedSkill) {
        return res.status (404).json ({error: 'Skill no encontrado'});
      }

      res.status (200).json ({message: 'Skill eliminado con éxito'});
    } catch (error) {
      console.error (error);
      res.status (500).json ({error: 'Error al eliminar el skill'});
    }
  },
};
export default skillService;
