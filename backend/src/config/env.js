import dotenv from "dotenv";

dotenv.config();

export const ENV = {
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  DB_URL: process.env.DB_URL,
  CLERK_PUBLISHABLE_KEY: process.env.CLERK_PUBLISHABLE_KEY,
  CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
  INNGEST_SIGNING_KEY: process.env.INNGEST_SIGNING_KEY,
  CLODINARY_API_KEY: process.env.CLODINARY_API_KEY,
  CLODINARY_API_SECRET: process.env.CLODINARY_API_SECRET,
  CLODINARY_CLOUD_NAME: process.env.CLODINARY_CLOUD_NAME,
};
