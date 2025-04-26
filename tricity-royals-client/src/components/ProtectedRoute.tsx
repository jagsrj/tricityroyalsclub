// src/components/ProtectedRoute.tsx
import { useEffect } from 'react'
import { useLocation } from 'wouter'

interface ProtectedRouteProps {
  component: React.ComponentType
}

export default function ProtectedRoute({ component: Component }: ProtectedRouteProps) {
  const [, navigate] = useLocation()

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('trc_admin_logged_in') === 'true'
    if (!isLoggedIn) {
      navigate('/admin-login') // 🚀 Redirect if not logged in
    }
  }, [navigate])

  return <Component />
}
