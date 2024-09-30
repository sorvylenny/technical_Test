import personService from '../services/personService.js';

const personController = {
  createPerson: async (req, res) => {
    console.log ('create Person Function');
    await personService.createPerson (req, res);
  },

  deletePerson: async (req, res) => {
    await personService.deletePerson (req, res);
  },
};

export default personController;
