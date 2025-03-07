import http from "http";
import app from "./app";
import { AppDataSource } from "./config/database.config";

const server = http.createServer(app);

class ServerBootstrap {

    private apiPort: number;
    private apiServer: string;

    constructor() {
        this.apiPort = process.env.API_PORT ? Number(process.env.API_PORT) : 3000;
        this.apiServer = process.env.API_SERVER ? process.env.API_SERVER : "localhost";

        this.initializeDatabase();
    }

    private async initializeDatabase(): Promise<void> {
        try {
            await AppDataSource.initialize();
            console.log("Base de datos iniciada exitosamente");
            this.listen();
        } catch (error) {
            console.error("Error al conectar a la base de datos", error);
            process.exit(1);
        }
    }

    private listen(): void {
        server.listen(this.apiPort, () => {
            console.log("Servidor Iniciado Correctamente");
            console.log(`http://${this.apiServer}:${this.apiPort}/api`);
            //? URL para ingresar al Swagger
            console.log(`Swagger UI disponible en: http://${this.apiServer}:${this.apiPort}/api/docs`);
        });
    }
}

new ServerBootstrap();
