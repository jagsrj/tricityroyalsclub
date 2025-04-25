// src/pages/AdminLogin.tsx
import { useState } from 'react'
import { useLocation } from 'wouter'

const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD || 'trcadmin123'

export default function AdminLogin() {
  const [, setLocation] = useLocation()
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      //localStorage.setItem('trc_admin_logged_in', 'true')
      sessionStorage.setItem('trc_admin_logged_in', 'true')

      setLocation('/admin')
    } else {
      setError('Invalid password')
    }
  }

  return (
    <div className="max-w-md mx-auto mt-24 p-6 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold text-center text-blue-800 mb-4">🔐 Admin Login</h1>
      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="password"
          className="w-full border p-2 rounded"
          placeholder="Enter admin password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="text-red-600 text-sm">{error}</p>}
        <button
          type="submit"
          className="w-full bg-blue-800 text-white py-2 rounded hover:bg-blue-900"
        >
          Login
        </button>
      </form>
    </div>
  )
}
