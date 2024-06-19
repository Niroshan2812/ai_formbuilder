import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./configs/schema.js",
  out: "./drizzle",
  dialect: 'postgresql',
  dbCredentials: {
   url: 'postgresql://AiFormGen_owner:ciJW1OBbjhM7@ep-dry-cherry-a5vf2nnu.us-east-2.aws.neon.tech/AIFormBuilder?sslmode=require',
   
    
  }
});
