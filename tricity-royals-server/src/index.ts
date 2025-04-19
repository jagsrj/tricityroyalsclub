// server/src/index.ts
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import signupRoute from './routes/signup'
import membersRoute from './routes/members'
import approvedMembersRoute from './routes/approvedMembers'

dotenv.config()
const app = express()

app.use(cors())
app.use(express.json())
app.use('/api/signup', signupRoute)
app.use('/api/members', membersRoute)
app.use('/api/approved-members', approvedMembersRoute)



const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`))
