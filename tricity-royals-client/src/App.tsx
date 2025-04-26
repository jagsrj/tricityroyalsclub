import Navbar from './components/Navbar'
import { Route, Switch } from 'wouter'

import Home from './pages/Home'
import About from './pages/About'
import Teams from './pages/Teams'
import Tournaments from './pages/Tournaments'
import Sponsors from './pages/Sponsors'
import Contact from './pages/Contact'
import MemberSignUp from './pages/MemberSignUp'
import AdminDashboard from './pages/AdminDashboard'
import AdminLogin from './pages/AdminLogin'
import TeamList from './pages/TeamList'

import ProtectedRoute from './components/ProtectedRoute' // ✅ import

export default function App() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen font-sans bg-gray-50 text-gray-800">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/teams" component={Teams} />
          <Route path="/tournaments" component={Tournaments} />
          <Route path="/sponsors" component={Sponsors} />
          <Route path="/contact" component={Contact} />
          <Route path="/signup" component={MemberSignUp} />
          <Route path="/admin-login" component={AdminLogin} />
          <Route path="/admin" component={() => <ProtectedRoute component={AdminDashboard} />} /> {/* ✅ Protected */}
          <Route path="/TeamList" component={TeamList} />
          <Route>404 – Page not found</Route>
        </Switch>
      </div>
    </>
  )
}
