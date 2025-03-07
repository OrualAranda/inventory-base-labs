import { AppDataSource } from "./config/database.config";
import { StockEntity } from "./entities/stock.entity";
import { OrderLineEntity } from "./entities/order-line.entity";

async function seedDatabase() {
  await AppDataSource.initialize();
  const stockRepository = AppDataSource.getRepository(StockEntity);
  const orderLineRepository = AppDataSource.getRepository(OrderLineEntity);

  //? Datos de ejemplo para Stock
  const stockData = [
    { sku: "A01", name: "Apple",count: 12, blocked: 0 },
    { sku: "A02", name: "Banana",count: 10, blocked: 2 },
    { sku: "A03", name: "Cocount",count: 8, blocked: 0 }
  ];

  for (const data of stockData) {
    const stock = stockRepository.create(data);
    await stockRepository.save(stock);
  }

  //? Datos de ejemplo para OrderLine
  const orderLineData = [
    { sku: "A01", quantity: 1 },
    { sku: "A02", quantity: 20 },
    { sku: "A01", quantity: 1 }
  ];

  for (const data of orderLineData) {
    const orderLine = orderLineRepository.create(data);
    await orderLineRepository.save(orderLine);
  }

  console.log("Datos insertados exitosamente.");
  process.exit();
}

seedDatabase().catch((error) => {
  console.error("Error al insertar datos:", error);
  process.exit(1);
});