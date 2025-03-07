import  express from "express";
import cors from "cors";
import morgan from "morgan";
import inventoryRoutes from "./routes/inventory.routes";
import swaggerDocument from "../swagger.json";
import swaggerUi from 'swagger-ui-express';
import { errorHandler } from "./middlewares/errorHandler";
import { swaggerSpec } from "./config/swagger.condig";

class App {
    public app: express.Application;

    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
        this.swagger();
    }

    private middlewares(): void {
        this.app.use(express.json());
        this.app.use(express.urlencoded({
            extended: true
        }));
        this.app.use(morgan("dev"));
        this.app.use(cors());
        this.app.use(errorHandler);
    }

    private routes(): void {
        this.app.use("/api/inventory", inventoryRoutes);
    }

    private swagger(): void {
        this.app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    }    
}


export default new App().app;