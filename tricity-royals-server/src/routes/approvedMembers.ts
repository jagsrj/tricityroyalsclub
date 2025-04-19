// server/src/routes/approvedMembers.ts
import express, { Request, Response } from 'express'
import { db } from '../db/client'
import { members } from '../db/schema'
import { and, eq } from 'drizzle-orm'

const router = express.Router()

// GET /api/approved-members?status=approved&sport=Cricket
router.get('/', async (req: Request, res: Response) => {
  try {
    const status = req.query.status as string | undefined
    const sport = req.query.sport as string | undefined

    const conditions = []
    if (status) conditions.push(eq(members.status, status))
    if (sport) conditions.push(eq(members.sport, sport))

    const result = await db
      .select()
      .from(members)
      .where(and(...conditions))

    res.json(result)
  } catch (err) {
    console.error('[GET APPROVED MEMBERS ERROR]', err)
    res.status(500).json({ error: 'Failed to fetch approved members' })
  }
})

export default router
