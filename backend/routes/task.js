import {Router} from 'express';
import taskController from '../controllers/task.js';

const router = Router ();

router.post ('/createTask', taskController.createTask);
router.delete ('/deleteTask/:id', taskController.deleteTask);
router.get ('/getTask', taskController.getTasks);

// Ruta comodín para manejar rutas no definidas
router.get ('*', (req, res) => {
  res.status (404).send ('Esta página no existe :(');
});

export default router;
