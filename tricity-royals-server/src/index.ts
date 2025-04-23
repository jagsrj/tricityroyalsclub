// server/src/index.ts
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import signupRoute from './routes/signup'
import membersRoute from './routes/members'
import approvedMembersRoute from './routes/approvedMembers'

dotenv.config()
const app = express()

// ✅ Allow only frontend domain in production
app.use(cors({
  origin: process.env.CLIENT_URL || '*', // use your frontend domain in prod
  methods: ['GET', 'POST', 'PUT'],
}))

app.use(express.json())

// ✅ API routes
app.use('/api/signup', signupRoute)
app.use('/api/members', membersRoute)
app.use('/api/approved-members', approvedMembersRoute)

// ✅ Root health check (optional)
app.get('/', (req, res) => res.send('🟢 TRC API running'))

// ✅ Start server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`))
