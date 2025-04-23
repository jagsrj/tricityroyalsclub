import { Router, Request, Response } from 'express'
import { db } from '../db/client'
import { members } from '../db/schema'

const router = Router()

router.post('/', async (req: Request, res: Response) => {
  try {
    const {
      name,
      email,
      phone,
      sports,
      ageGroup,
      experience,
      notes,
    } = req.body

    // Validate required fields
    if (
      !name ||
      !email ||
      !phone ||
      !Array.isArray(sports) ||
      sports.length === 0 ||
      !ageGroup ||
      !experience
    ) {
      console.log('[DEBUG] Incomplete form data:', req.body)
      return res.status(400).json({ error: 'Missing required fields' })
    }

    // Insert into DB
    await db.insert(members).values({
      name,
      email,
      phone,
      sports,
      ageGroup,
      experience,
      notes,
    })

    return res.json({ success: true })
  } catch (err) {
    console.error('[SIGNUP ERROR]', err)
    return res.status(500).json({ error: 'Internal Server Error' })
  }
})

export default router
