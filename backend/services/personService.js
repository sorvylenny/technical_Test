import Person from '../models/person.js';

const personService = {
  createPerson: async (req, res) => {
    const {fullName, age, skills} = req.body;
    const newPerson = new Person ({
      fullName,
      age,
      skills,
    });
    try {
      const savedPerson = await newPerson.save ();
      res.status (200).json (savedPerson);
    } catch (err) {
      res.status (500).json (err);
    }
  },

  deletePerson: async (req, res) => {
    const {id} = req.params;
    try {
      const person = await Person.findById (id);
      if (!person) {
        return res.status (404).json ({error: 'Person not found'});
      }
      for (let i = 0; i < person.skills.length; i++) {
        const skillId = person.skills[i];
        try {
          await Skills.findByIdAndDelete (skillId);
        } catch (error) {
          console.error (
            `Error al eliminar la habilidad con ID ${skillId}:`,
            error
          );
        }
      }

      const deletedPerson = await Person.findByIdAndDelete (id);

      if (!deletedPerson) {
        return res.status (404).json ({error: 'Person not found'});
      }

      res.status (200).json ({message: 'Person deleted successfully'});
    } catch (err) {
      res.status (500).json (err);
    }
  },
};

export default personService;
