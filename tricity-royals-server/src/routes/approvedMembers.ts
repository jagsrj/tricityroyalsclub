import { Router, Request, Response } from 'express'
import { db } from '../db/client'
import { members } from '../db/schema'
import { eq, and, sql } from 'drizzle-orm'

const router = Router()

router.get('/', async (req: Request, res: Response) => {
  try {
    const status = req.query.status as string | undefined
    const sport = req.query.sport as string | undefined

    const conditions = []

    if (status) {
      conditions.push(eq(members.status, status))
    }

    if (sport) {
      // Check if the sport exists in the text[] array using PostgreSQL syntax
      conditions.push(sql`${members.sports} @> ARRAY[${sport}]::text[]`)
    }

    const results = await db.select().from(members).where(and(...conditions))

    res.json(results)
  } catch (err) {
    console.error('[APPROVED MEMBERS ERROR]', err)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

export default router
