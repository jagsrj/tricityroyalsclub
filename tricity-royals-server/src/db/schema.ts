import { pgTable, serial, varchar, text } from 'drizzle-orm/pg-core'

export const members = pgTable('members', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 100 }),
  email: varchar('email', { length: 100 }),
  phone: varchar('phone', { length: 20 }),
  sports: text('sports').array(), // ✅ <-- this is required
  ageGroup: varchar('age_group', { length: 50 }),
  experience: varchar('experience', { length: 50 }),
  notes: text('notes'),
  status: varchar('status', { length: 20 }).default('pending'),
})
