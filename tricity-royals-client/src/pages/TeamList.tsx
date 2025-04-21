// src/pages/TeamList.tsx
import { useEffect, useState } from 'react'

interface Member {
  id: number
  name: string
  sport: string
  ageGroup: string
  experience: string
}

export default function TeamList() {
  const [members, setMembers] = useState<Member[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchApprovedMembers = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/approved-members?status=approved`)
        const data = await res.json()
        setMembers(data)
      } catch (err) {
        console.error('Error fetching approved members:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchApprovedMembers()
  }, [])

  const grouped = members.reduce((acc, member) => {
    const key = `${member.sport} - ${member.ageGroup}`
    if (!acc[key]) acc[key] = []
    acc[key].push(member)
    return acc
  }, {} as Record<string, Member[]>)

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-blue-800 mb-6 text-center">🏅 Active Team Rosters</h1>
      {loading ? (
        <p className="text-center text-gray-500">Loading team data...</p>
      ) : Object.keys(grouped).length === 0 ? (
        <p className="text-center text-red-600">No approved members found.</p>
      ) : (
        <div className="space-y-10">
          {Object.entries(grouped).map(([group, members]) => (
            <div key={group}>
              <h2 className="text-xl font-semibold text-blue-700 border-b mb-3 pb-1">{group}</h2>
              <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {members.map((m) => (
                  <li key={m.id} className="bg-white rounded-xl shadow p-4">
                    <h3 className="font-bold text-blue-800">{m.name}</h3>
                    <p className="text-sm text-gray-600">{m.experience}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
