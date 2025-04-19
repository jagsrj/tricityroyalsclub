import * as express from 'express'
import { db } from '../db/client'
import { members } from '../db/schema'

const router = express.Router()

router.post('/', async (req: express.Request, res: express.Response) => {
  try {
    const { name, email, phone, sport, ageGroup, experience, notes } = req.body

    if (!name || !email || !phone || !sport || !ageGroup || !experience) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    await db.insert(members).values({
      name,
      email,
      phone,
      sport,
      ageGroup,
      experience,
      notes,
      status: 'pending',
    })

    res.status(201).json({ message: 'Signup request submitted. Awaiting admin approval.' })
  } catch (err) {
    console.error('[SIGNUP ERROR]', err)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

export default router
