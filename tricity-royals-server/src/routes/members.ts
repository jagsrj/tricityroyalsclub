// server/src/routes/members.ts
import express, { Request, Response } from 'express'
import { db } from '../db/client'
import { members } from '../db/schema'
import { eq } from 'drizzle-orm'

const router = express.Router()

// GET /api/members?status=pending
router.get('/', async (req: Request, res: Response) => {
  try {
    const status = req.query.status as string | undefined
    const result = status
      ? await db.select().from(members).where(eq(members.status, status))
      : await db.select().from(members)

    res.json(result)
  } catch (err) {
    console.error('[GET MEMBERS ERROR]', err)
    res.status(500).json({ error: 'Failed to fetch members' })
  }
})

// PUT /api/members/:id { status: "approved" | "rejected" }
router.put('/:id', async (req: Request, res: Response) => {
  try {
    const memberId = Number(req.params.id)
    const { status } = req.body

    if (!['approved', 'rejected'].includes(status)) {
      return res.status(400).json({ error: 'Invalid status value' })
    }

    await db.update(members)
      .set({ status })
      .where(eq(members.id, memberId))

    res.status(200).json({ message: `Member ${memberId} marked as ${status}` })
  } catch (err) {
    console.error('[UPDATE MEMBER STATUS ERROR]', err)
    res.status(500).json({ error: 'Failed to update member status' })
  }
})

export default router
