import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './login.css'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()

  const handleLogin = async (event) => {
    event.preventDefault()
    setMessage('')

    const nextEmailError = !email.trim()
      ? 'Please enter your email address.'
      : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
        ? 'Please enter a valid email address.'
        : ''
    const nextPasswordError = !password ? 'Please enter your password.' : ''

    setEmailError(nextEmailError)
    setPasswordError(nextPasswordError)

    if (nextEmailError || nextPasswordError) {
      return
    }

    setIsSubmitting(true)

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
    <main className="login-page">
      <div className="container">
        <div className="row align-items-center justify-content-center g-0 login-shell">
          <div className="col-12 col-lg-6">
            <section className="login-intro" aria-labelledby="login-welcome-title">
              <span className="login-eyebrow">
                <span aria-hidden="true" />
                YOUR HR WORKSPACE
              </span>
              <h1 id="login-welcome-title">
                Welcome back to <span>better HR.</span>
              </h1>
              <p>
                Sign in to access your HR Management workspace and the tools that help keep
                your people operations moving.
              </p>
              <div className="login-visual" aria-hidden="true">
                <div className="login-visual-orbit login-orbit-one" />
                <div className="login-visual-orbit login-orbit-two" />
                <div className="login-visual-core">
                  <span>✦</span>
                  <small>PEOPLE<br />IN FOCUS</small>
                </div>
                <div className="login-visual-chip login-chip-one">
                  <span className="login-chip-symbol">✓</span>
                  <span>Workflows<br /><strong>in sync</strong></span>
                </div>
                <div className="login-visual-chip login-chip-two">
                  <span className="login-chip-symbol">◎</span>
                  <span>One connected<br /><strong>workspace</strong></span>
                </div>
              </div>
              <div className="login-intro-footer">
                <span className="login-intro-line" />
                <span>People first. Process made simple.</span>
              </div>
            </section>
          </div>

          <div className="col-12 col-lg-6">
            <section className="login-card" aria-labelledby="login-form-title">
              <div className="login-card-heading">
                <span className="login-card-mark" aria-hidden="true">✦</span>
                <div>
                  <span className="login-card-kicker">HR MANAGEMENT</span>
                  <h2 id="login-form-title">Sign in to your account</h2>
                  <p>Enter your details to continue.</p>
                </div>
              </div>

              <form onSubmit={handleLogin} noValidate>
                <div className="mb-3">
                  <label className="form-label" htmlFor="login-email">Email address</label>
                  <div className={`login-input-wrap${emailError ? ' has-error' : ''}`}>
                    <span className="login-input-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24">
                        <rect x="3" y="5" width="18" height="14" rx="2" />
                        <path d="m4 7 8 6 8-6" />
                      </svg>
                    </span>
                    <input
                      className="form-control"
                      id="login-email"
                      name="email"
                      type="email"
                      value={email}
                      onChange={(event) => {
                        setEmail(event.target.value)
                        setEmailError('')
                        setMessage('')
                      }}
                      placeholder="name@example.com"
                      autoComplete="email"
                      aria-invalid={Boolean(emailError)}
                      aria-describedby={emailError ? 'login-email-error' : undefined}
                      required
                    />
                  </div>
                  {emailError && <div className="login-field-error" id="login-email-error">{emailError}</div>}
                </div>

                <div className="mb-2">
                  <label className="form-label" htmlFor="login-password">Password</label>
                  <div className={`login-input-wrap${passwordError ? ' has-error' : ''}`}>
                    <span className="login-input-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24">
                        <rect x="4" y="10" width="16" height="11" rx="2" />
                        <path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3" />
                      </svg>
                    </span>
                    <input
                      className="form-control"
                      id="login-password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(event) => {
                        setPassword(event.target.value)
                        setPasswordError('')
                        setMessage('')
                      }}
                      placeholder="Enter your password"
                      autoComplete="current-password"
                      aria-invalid={Boolean(passwordError)}
                      aria-describedby={passwordError ? 'login-password-error' : undefined}
                      required
                    />
                    <button
                      className="login-password-toggle"
                      type="button"
                      onClick={() => setShowPassword((isVisible) => !isVisible)}
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                      aria-pressed={showPassword}
                    >
                      {showPassword ? 'Hide' : 'Show'}
                    </button>
                  </div>
                  {passwordError && <div className="login-field-error" id="login-password-error">{passwordError}</div>}
                </div>

                {message && (
                  <div className="alert alert-danger login-message" role="alert" aria-live="polite">
                    {message}
                  </div>
                )}

                <button className="btn login-submit-button" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <span className="spinner-border spinner-border-sm" aria-hidden="true" />
                      Signing in...
                    </>
                  ) : (
                    <>Login <span aria-hidden="true">→</span></>
                  )}
                </button>
              </form>

              <div className="login-card-footer">
                <span>New to HR Management?</span>
                <Link to="/register">Create an account</Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Login
