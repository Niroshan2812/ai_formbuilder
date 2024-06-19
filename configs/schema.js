// Create databace table 

import { pgTable } from "drizzle-orm/pg-core";

export const FsonFoms = pgTable('FsonFoms',{
    id:serial('id').primaryKey(),
    jsonform:text ('jsonform').notNull(),
    createdBy:varchar('createdBy').notNull(),
    createdAt:varchar('createdAt').notNull()
})