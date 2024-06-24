import './App.css'
import { Route } from './routes'
import AuthProvider from './context/AuthContext'
function App() {
  return (
    <>
      <AuthProvider>
        <Route />
      </AuthProvider>
    </>
  )
}

export default App
