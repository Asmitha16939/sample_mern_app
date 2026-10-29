import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const navigate = useNavigate()

  const handleLogin = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)
    setMessage('')

    try {
      const response = await fetch('http://localhost:3000/api/emp/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ emailid: email, password }),
      })
      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.msg || `Login failed with status ${response.status}`)
      }

      if (data.msg !== 'login success' || !data.user) {
        setMessage(data.msg || 'Login failed.')
        return
      }

      if (data.user.role === 'HR') {
        navigate('/hrhome')
      } else if (data.user.role === 'EMPLOYEE') {
        navigate('/emphome')
      } else if (data.user.role === 'ADMIN') {
        navigate('/adminhome')
      } else {
        setMessage('Login succeeded, but this account has an unsupported role.')
      }
    } catch (error) {
      console.error('Login failed:', error)
      setMessage(error instanceof Error ? error.message : 'Login failed. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter your email"
          autoComplete="email"
          required
        />
        <br />
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Enter your password"
          autoComplete="current-password"
          required
        />
        <br />
        <button className="btn btn-primary mt-3" type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Signing in...' : 'Login'}
        </button>
      </form>
      <p role="status" aria-live="polite">{message}</p>
    </div>
  )
}

export default Login