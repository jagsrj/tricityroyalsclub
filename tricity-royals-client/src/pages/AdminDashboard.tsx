import { useEffect, useState } from 'react'
import { useLocation } from 'wouter'

interface Member {
  id: number
  name: string
  email: string
  phone: string
  sports: string[]
  ageGroup: string
  experience: string
  notes: string | null
  status: string
}

export default function AdminDashboard() {
  const [members, setMembers] = useState<Member[]>([])
  const [loading, setLoading] = useState(true)
  const [, navigate] = useLocation()

  useEffect(() => {
    const loggedIn = localStorage.getItem('trc_admin_logged_in')
    const cooldownUntil = localStorage.getItem('trc_admin_cooldown')

    if (cooldownUntil && Date.now() < parseInt(cooldownUntil)) {
      navigate('/admin-login') // 🚫 If locked, push back to login
      return
    }

    if (!loggedIn) {
      navigate('/admin-login') // 🚫 If not logged in, push to login
      return
    }

    fetchPending()
  }, [navigate])

  const [serverError, setServerError] = useState(false)

  const fetchPending = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/members?status=pending`)
      if (!res.ok) {
        throw new Error('Server error')
      }
      const data = await res.json()
      setMembers(data)
    } catch (err) {
      console.error('Error fetching members:', err)
      setServerError(true) // 🛡️ server unreachable
    } finally {
      setLoading(false)
    }
  }
  

  const updateStatus = async (id: number, status: 'approved' | 'rejected') => {
    try {
      await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/members/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status })
      })
      setMembers(members.filter((m) => m.id !== id))
    } catch (err) {
      console.error('Status update failed:', err)
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-blue-800 mb-6 text-center">🔐 Admin Dashboard</h1>
      {serverError ? (
  <p className="text-center text-red-600">Server is not reachable. Please try again later.</p>
) :
      loading ? (
        <p className="text-center text-gray-500">Loading pending members...</p>
      ) : members.length === 0 ? (
        <p className="text-center text-green-600">🎉 No pending members right now!</p>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-xl border shadow-md p-5 space-y-3 hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold text-blue-700">{member.name}</h2>
              <p className="text-sm text-gray-600">{member.email} • {member.phone}</p>
              <div>
                <strong>Sports:</strong>
                <div className="flex flex-wrap gap-1 mt-1">
                  {member.sports.length > 0 ? (
                    member.sports.map((sport, idx) => (
                      <span key={idx} className="bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full">
                        {sport}
                      </span>
                    ))
                  ) : (
                    <span className="text-sm text-gray-500">No sports selected</span>
                  )}
                </div>
              </div>
              <p><strong>Age Group:</strong> {member.ageGroup}</p>
              <p><strong>Experience:</strong> {member.experience}</p>
              {member.notes && <p className="text-gray-600"><strong>Notes:</strong> {member.notes}</p>}

              <div className="flex gap-3 pt-3">
                <button
                  onClick={() => updateStatus(member.id, 'approved')}
                  className="flex-1 py-2 rounded bg-green-600 text-white hover:bg-green-700 text-sm"
                >
                  ✅ Approve
                </button>
                <button
                  onClick={() => updateStatus(member.id, 'rejected')}
                  className="flex-1 py-2 rounded bg-red-600 text-white hover:bg-red-700 text-sm"
                >
                  ❌ Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
