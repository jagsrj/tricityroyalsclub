// server/src/db/schema.ts
import { pgTable, serial, varchar, text } from 'drizzle-orm/pg-core'

export const members = pgTable('members', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 100 }).notNull(),
  email: varchar('email', { length: 100 }).notNull(),
  phone: varchar('phone', { length: 20 }).notNull(),
  sport: varchar('sport', { length: 50 }).notNull(),
  ageGroup: varchar('age_group', { length: 20 }).notNull(),
  experience: varchar('experience', { length: 50 }).notNull(),
  notes: text('notes'),
  status: varchar('status', { length: 20 }).default('pending').notNull(),
})
