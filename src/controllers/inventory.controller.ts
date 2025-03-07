import { Request, Response } from "express";
import { InventoryService } from "../services/inventory.services";
import formatResponse from "../utils/formatResponse";
const { formatSuccessResponse, formatErrorResponse } = formatResponse;


export class InventoryController {
  private inventoryService: InventoryService;

  constructor() {
    this.inventoryService = new InventoryService();
  }

  /**
   * @description Obtiene los niveles de inventario.
   * @route GET /inventory-levels
   * @returns Devuelve una lista con los niveles de inventario actuales.
   */

  public async getInventoryLevels(req: Request, res: Response): Promise<void> {
    try {
      const inventoryLevels = await this.inventoryService.calculateInventoryLevels();
      res.status(200).json(formatSuccessResponse(inventoryLevels));
    } catch (error) {
      console.error("Error al calcular niveles de inventario:", error);
      res.status(500).json(formatErrorResponse("Error interno del servidor"));
    }
  }
}