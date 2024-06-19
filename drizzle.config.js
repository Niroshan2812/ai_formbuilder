import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./configs/schema.js",
  out: "./drizzle",
  dialect: 'postgresql',
  dbCredentials: {
   url: 'Edit THis one with your owan string',
   
    
  }
});
