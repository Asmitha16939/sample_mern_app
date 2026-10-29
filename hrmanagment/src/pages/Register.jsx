import { useState } from "react"

function Register()
{    
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [role,setRole]=useState("")
    const [message,setMessage]=useState("")
    const [isSubmitting,setIsSubmitting]=useState(false)
    
    const handleRegister=async (event)=>{
      event.preventDefault()
      setIsSubmitting(true)
      setMessage("")

      try {
        const response=await fetch("http://localhost:3002/api/emp/register",
          {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({name,emailid:email,password,role})
          })

        if (!response.ok) {
          throw new Error(`Registration failed with status ${response.status}`)
        }

        setMessage("Registration successful.")
        setName("")
        setEmail("")
        setPassword("")
        setRole("")
      } catch (error) {
        console.error("Registration failed:", error)
        setMessage("Registration failed. Check that the server is running and try again.")
      } finally {
        setIsSubmitting(false)
      }
    }

    return(
        <div>
        <h1>Register</h1>
        <form onSubmit={handleRegister}>
            <input type="text"
            onChange={(event)=>setName(event.target.value)}
            value={name}
            required
           placeholder="Enter name"></input><br/>

            <input type="email"
            onChange={(event)=>setEmail(event.target.value)}
            value={email}
            required
            placeholder="Enter Email"></input><br/>

            <input type="password"
            onChange={(event)=>setPassword(event.target.value)}
            value={password}
            required
            placeholder="Enter your password"></input><br/>

            <select 
              onChange={(event)=>setRole(event.target.value)}
            value={role}
            required
             >
                <option value="">Choose your role</option>
                <option value="HR">HR</option>
                <option value="EMPLOYEE">EMPLOYEE</option>
            </select><br/>
            <button className="btn btn-primary mt-3" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Registering..." : "Register"}
            </button>
        </form>
        <p role="status" aria-live="polite">{message}</p>
        </div>
    )
}
export default Register