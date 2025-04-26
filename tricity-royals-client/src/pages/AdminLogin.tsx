import { useState } from 'react'
import { useLocation } from 'wouter'

export default function AdminLogin() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [, navigate] = useLocation()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD

    if (password === adminPassword) {
      localStorage.setItem('trc_admin_logged_in', 'true')
      localStorage.removeItem('trc_admin_cooldown')
      navigate('/admin') // 👉 Redirect immediately
    } else {
      setError('Incorrect password')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm space-y-4"
      >
        <h1 className="text-2xl font-bold text-center text-blue-800">Admin Login</h1>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter admin password"
          className="border rounded w-full p-2"
          required
        />
        {error && <p className="text-red-600 text-sm">{error}</p>}
        <button type="submit" className="bg-blue-700 text-white w-full py-2 rounded hover:bg-blue-800">
          Login
        </button>
      </form>
    </div>
  )
}
