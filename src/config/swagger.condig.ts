import swaggerJSDoc from "swagger-jsdoc";

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API de Inventario",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:3000/api/inventory",
      },
    ],
  },
  apis: ["./src/routes/*.ts"], 
};

export const swaggerSpec = swaggerJSDoc(options);
