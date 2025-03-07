import { AppDataSource } from "../config/database.config";
import { InventoryResponseDTO } from "../dtos/inventory.dto";
import { OrderLineEntity } from "../entities/order-line.entity";
import { StockEntity } from "../entities/stock.entity";
import { InventoryRepository } from "../repositories/inventory.repository";

export class InventoryService {
    private inventoryRepository = new InventoryRepository();
    
  /**
   * Calcula los niveles de inventario considerando:
   * - booked: cantidad reservada para pedidos
   * - missing: cantidad faltante para cubrir la demanda
   * - available: stock restante después de reservas
   * @returns Lista de niveles de inventario por SKU
   */

    async calculateInventoryLevels(): Promise<InventoryResponseDTO[]> {  
      const stocks = await this.inventoryRepository.getAllStock();
      const orderLines = await this.inventoryRepository.getAllOrderLines();
  
      //? Calcula la demanda total por SKU
      const totalDemand: Record<string, number> = {};
      orderLines.forEach((line) => {
        if (!totalDemand[line.sku]) {
          totalDemand[line.sku] = 0;
        }
        totalDemand[line.sku] += line.quantity;
      });
  
      //? Calcula los valores de inventario para cada SKU
      const result = stocks.map((stock) => {
        const demanded = totalDemand[stock.sku] || 0;
        const availableForOrders = stock.count - stock.blocked;
        let booked = 0;
        let missing = 0;
  
        if (demanded <= availableForOrders) {
          booked = demanded;
        } else {
          booked = availableForOrders;
          missing = demanded - availableForOrders;
        }
  
        const available = availableForOrders - booked;
  
        return {
          sku: stock.sku,
          name: stock.name,
          count: stock.count,
          blocked: stock.blocked,
          booked,
          missing,
          available,
        };
      });
  
      return result;
    }
  }





