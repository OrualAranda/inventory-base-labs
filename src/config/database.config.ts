import { DataSource } from "typeorm";
import { config } from "./env.config";
import { StockEntity } from "../entities/stock.entity";
import { OrderLineEntity } from "../entities/order-line.entity";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: config.database.host,
  port: config.database.port,
  username: config.database.user,
  password: config.database.password,
  database: config.database.name,
  entities: [StockEntity, OrderLineEntity],
  synchronize: false,
  logging: true,
});
