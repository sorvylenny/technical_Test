import {Router} from 'express';
import personController from '../controllers/person.js';

const router = Router ();

router.post ('/createPerson', personController.createPerson);
router.delete ('/deletePerson/:id', personController.deletePerson);

// Ruta comodín para manejar rutas no definidas
router.get ('*', (req, res) => {
  res.status (404).send ('Esta página no existe :(');
});

export default router;
