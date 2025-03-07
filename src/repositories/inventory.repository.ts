import { AppDataSource } from "../config/database.config";
import { OrderLineEntity } from "../entities/order-line.entity";
import { StockEntity } from "../entities/stock.entity";

export class InventoryRepository {
    private stockRepository = AppDataSource.getRepository(StockEntity);
    private orderLineRepository = AppDataSource.getRepository(OrderLineEntity);
  
    async getAllStock() {
      return await this.stockRepository.find();
    }
  
    async getAllOrderLines() {
      return await this.orderLineRepository.find();
    }
  }