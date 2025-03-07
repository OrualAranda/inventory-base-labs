import { Router } from "express";
import { InventoryController } from "../controllers/inventory.controller";

const router = Router();
const controller = new InventoryController();

/**
 * @swagger
 * tags:
 *   name: Inventory
 *   description: Operaciones relacionadas con inventario
 */

/**
 * @swagger
 * /inventory-levels:
 *   get:
 *     summary: Obtiene los niveles de inventario
 *     tags: [Inventory]
 *     description: Devuelve una lista con los niveles de inventario calculados.
 *     responses:
 *       200:
 *         description: Éxito, devuelve los datos de inventario.
 *       500:
 *         description: Error interno del servidor.
 */
router.get("/inventory-levels", (req, res) =>
  controller.getInventoryLevels(req, res)
);

export default router;