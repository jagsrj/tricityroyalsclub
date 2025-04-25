// src/components/ProtectedRoute.tsx
import { useEffect, useState } from 'react'
import { useLocation } from 'wouter'

export default function ProtectedRoute({ component: Component }: { component: React.FC }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [, setLocation] = useLocation()

  useEffect(() => {
    //const isAdmin = localStorage.getItem('trc_admin_logged_in') === 'true'
    const isAdmin = sessionStorage.getItem('trc_admin_logged_in') === 'true'

    setIsLoggedIn(isAdmin)

    if (!isAdmin) {
      setLocation('/admin-login')
    }
  }, [])

  return isLoggedIn ? <Component /> : null
}
