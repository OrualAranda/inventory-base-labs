import dotenv from "dotenv";

dotenv.config();

export const config = {
  database: {
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    name: process.env.DATABASE_NAME,
  },
  server: {
    port: process.env.API_PORT || 3000,
  },
};
