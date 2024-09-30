import { Router } from "express";
import skillController from "../controllers/skill.js"; 

const router = Router();

router.post("/createSkill", skillController.createSkill);
router.delete("/deleteSkill/:id", skillController.deleteSkill);
// Ruta comodín para manejar rutas no definidas
router.get("*", (req, res) => {
    res.status(404).send("Esta página no existe :(");
});
export default router; 
