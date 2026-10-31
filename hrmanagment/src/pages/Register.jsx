import { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css";

const initialForm = {
    name: "",
    email: "",
    password: "",
    role: "",
};

function Register() {
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm((currentForm) => ({ ...currentForm, [name]: value }));
        setErrors((currentErrors) => ({ ...currentErrors, [name]: "" }));
        setMessage("");
    };

    const handleRegister = async (event) => {
        event.preventDefault();
        setMessage("");

        const nextErrors = {};
        if (!form.name.trim()) {
            nextErrors.name = "Please enter your full name.";
        }
        if (!form.email.trim()) {
            nextErrors.email = "Please enter your email address.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
            nextErrors.email = "Please enter a valid email address.";
        }
        if (!form.password) {
            nextErrors.password = "Please enter a password.";
        }
        if (!form.role) {
            nextErrors.role = "Please choose a role.";
        }

        setErrors(nextErrors);
        if (Object.keys(nextErrors).length > 0) {
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch("http://localhost:3002/api/emp/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: form.name,
                    emailid: form.email,
                    password: form.password,
                    role: form.role,
                }),
            });

            if (!response.ok) {
                let errorMessage = `Registration failed with status ${response.status}`;
                if (response.headers.get("content-type")?.includes("application/json")) {
                    const errorData = await response.json();
                    if (typeof errorData.msg === "string" && errorData.msg) {
                        errorMessage = errorData.msg;
                    } else if (typeof errorData.message === "string" && errorData.message) {
                        errorMessage = errorData.message;
                    }
                }
                throw new Error(errorMessage);
            }

            setMessage("Registration successful.");
            setMessageType("success");
            setForm(initialForm);
        } catch (error) {
            console.error("Registration failed:", error);
            setMessage(
                error instanceof Error
                    ? error.message
                    : "Registration failed. Check that the server is running and try again.",
            );
            setMessageType("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="register-page">
            <div className="container">
                <div className="row align-items-center justify-content-center g-5 register-layout">
                    <div className="col-12 col-lg-5">
                        <section className="register-intro" aria-labelledby="register-welcome-title">
                            <span className="register-eyebrow">
                                <span aria-hidden="true" />
                                JOIN YOUR HR WORKSPACE
                            </span>
                            <h1 id="register-welcome-title">
                                Make people operations <span>feel simpler.</span>
                            </h1>
                            <p>
                                Create your account to access the HR Management platform and
                                connect with the tools that support your day-to-day work.
                            </p>
                            <div className="register-visual" aria-hidden="true">
                                <div className="register-visual-orbit register-orbit-one" />
                                <div className="register-visual-orbit register-orbit-two" />
                                <div className="register-visual-core">
                                    <span>✦</span>
                                    <small>PEOPLE<br />IN FOCUS</small>
                                </div>
                                <div className="register-visual-chip register-chip-one">
                                    <span className="register-chip-icon">◎</span>
                                    <span>Employee<br /><strong>workspace</strong></span>
                                </div>
                                <div className="register-visual-chip register-chip-two">
                                    <span className="register-chip-icon">✓</span>
                                    <span>HR tasks<br /><strong>in one place</strong></span>
                                </div>
                            </div>
                            <div className="register-intro-note">
                                <span />
                                A connected start for your HR journey.
                            </div>
                        </section>
                    </div>

                    <div className="col-12 col-lg-7">
                        <section className="register-card" aria-labelledby="register-form-title">
                            <div className="register-card-heading">
                                <span className="register-card-mark" aria-hidden="true">✦</span>
                                <div>
                                    <span className="register-card-kicker">HR MANAGEMENT</span>
                                    <h2 id="register-form-title">Create your account</h2>
                                    <p>Enter your details to get started.</p>
                                </div>
                            </div>

                            <form onSubmit={handleRegister} noValidate>
                                <div className="row g-3">
                                    <div className="col-12 col-md-6">
                                        <label className="form-label" htmlFor="register-name">Full Name</label>
                                        <div className={`register-input-wrap${errors.name ? " has-error" : ""}`}>
                                            <span className="register-input-icon" aria-hidden="true">
                                                <svg viewBox="0 0 24 24">
                                                    <circle cx="12" cy="8" r="3.5" />
                                                    <path d="M5 20v-1.5a7 7 0 0 1 14 0V20z" />
                                                </svg>
                                            </span>
                                            <input
                                                className="form-control"
                                                id="register-name"
                                                name="name"
                                                type="text"
                                                autoComplete="name"
                                                placeholder="Your full name"
                                                value={form.name}
                                                onChange={handleChange}
                                                aria-invalid={Boolean(errors.name)}
                                                aria-describedby={errors.name ? "register-name-error" : undefined}
                                                required
                                            />
                                        </div>
                                        {errors.name && <div className="register-field-error" id="register-name-error">{errors.name}</div>}
                                    </div>

                                    <div className="col-12 col-md-6">
                                        <label className="form-label" htmlFor="register-email">Email Address</label>
                                        <div className={`register-input-wrap${errors.email ? " has-error" : ""}`}>
                                            <span className="register-input-icon" aria-hidden="true">
                                                <svg viewBox="0 0 24 24">
                                                    <rect x="3" y="5" width="18" height="14" rx="2" />
                                                    <path d="m4 7 8 6 8-6" />
                                                </svg>
                                            </span>
                                            <input
                                                className="form-control"
                                                id="register-email"
                                                name="email"
                                                type="email"
                                                autoComplete="email"
                                                placeholder="name@example.com"
                                                value={form.email}
                                                onChange={handleChange}
                                                aria-invalid={Boolean(errors.email)}
                                                aria-describedby={errors.email ? "register-email-error" : undefined}
                                                required
                                            />
                                        </div>
                                        {errors.email && <div className="register-field-error" id="register-email-error">{errors.email}</div>}
                                    </div>

                                    <div className="col-12 col-md-6">
                                        <label className="form-label" htmlFor="register-password">Password</label>
                                        <div className={`register-input-wrap${errors.password ? " has-error" : ""}`}>
                                            <span className="register-input-icon" aria-hidden="true">
                                                <svg viewBox="0 0 24 24">
                                                    <rect x="4" y="10" width="16" height="11" rx="2" />
                                                    <path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3" />
                                                </svg>
                                            </span>
                                            <input
                                                className="form-control"
                                                id="register-password"
                                                name="password"
                                                type={showPassword ? "text" : "password"}
                                                autoComplete="new-password"
                                                placeholder="Create a password"
                                                value={form.password}
                                                onChange={handleChange}
                                                aria-invalid={Boolean(errors.password)}
                                                aria-describedby={errors.password ? "register-password-error" : undefined}
                                                required
                                            />
                                            <button
                                                className="register-password-toggle"
                                                type="button"
                                                onClick={() => setShowPassword((isVisible) => !isVisible)}
                                                aria-label={showPassword ? "Hide password" : "Show password"}
                                                aria-pressed={showPassword}
                                            >
                                                {showPassword ? "Hide" : "Show"}
                                            </button>
                                        </div>
                                        {errors.password && <div className="register-field-error" id="register-password-error">{errors.password}</div>}
                                    </div>

                                    <div className="col-12 col-md-6">
                                        <label className="form-label" htmlFor="register-role">Role</label>
                                        <div className={`register-input-wrap register-select-wrap${errors.role ? " has-error" : ""}`}>
                                            <span className="register-input-icon" aria-hidden="true">
                                                <svg viewBox="0 0 24 24">
                                                    <circle cx="9" cy="8" r="3" />
                                                    <path d="M3.5 20v-1.5a5.5 5.5 0 0 1 11 0V20zM16 5.5a3 3 0 0 1 0 5.8M17 13a5 5 0 0 1 3.5 5v2" />
                                                </svg>
                                            </span>
                                            <select
                                                className="form-select"
                                                id="register-role"
                                                name="role"
                                                value={form.role}
                                                onChange={handleChange}
                                                aria-invalid={Boolean(errors.role)}
                                                aria-describedby={errors.role ? "register-role-error" : undefined}
                                                required
                                            >
                                                <option value="">Choose your role</option>
                                                <option value="HR">HR</option>
                                                <option value="EMPLOYEE">EMPLOYEE</option>
                                            </select>
                                        </div>
                                        {errors.role && <div className="register-field-error" id="register-role-error">{errors.role}</div>}
                                    </div>

                                    <div className="col-12">
                                        <button className="btn register-submit-button" type="submit" disabled={isSubmitting}>
                                            {isSubmitting ? (
                                                <>
                                                    <span className="spinner-border spinner-border-sm" aria-hidden="true" />
                                                    Registering...
                                                </>
                                            ) : (
                                                <>Create account <span aria-hidden="true">→</span></>
                                            )}
                                        </button>
                                    </div>
                                </div>

                                {message && (
                                    <div
                                        className={`alert ${messageType === "success" ? "alert-success" : "alert-danger"} register-message mt-3 mb-0`}
                                        role="status"
                                        aria-live="polite"
                                    >
                                        {message}
                                    </div>
                                )}
                            </form>

                            <div className="register-card-footer">
                                <span>Already have an account?</span>
                                <Link to="/login">Sign in</Link>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Register;
