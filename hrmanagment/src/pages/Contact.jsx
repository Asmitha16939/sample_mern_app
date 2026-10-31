import { useState } from "react";
import { Link } from "react-router-dom";
import "./contact.css";

const initialForm = {
    name: "",
    email: "",
    subject: "",
    message: "",
};

const contactMethods = [
    {
        title: "Email",
        detail: "Placeholder: add a verified email address",
        description: "For questions about the platform and HR workflows.",
        icon: (
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m4 7 8 6 8-6" />
            </svg>
        ),
    },
    {
        title: "Phone",
        detail: "Placeholder: add a verified phone number",
        description: "Phone support details will be shared when available.",
        icon: (
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7.2 3.5H5a1.5 1.5 0 0 0-1.5 1.7A16.3 16.3 0 0 0 18.8 20a1.5 1.5 0 0 0 1.7-1.5v-2.2l-4.1-1.1-1.2 2a13 13 0 0 1-6.4-6.4l2-1.2-1.1-4.1z" />
            </svg>
        ),
    },
    {
        title: "Address",
        detail: "Placeholder: add a verified business address",
        description: "Visit information will be shared when available.",
        icon: (
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" />
                <circle cx="12" cy="10" r="2.3" />
            </svg>
        ),
    },
];

function Contact() {
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [formStatus, setFormStatus] = useState("");

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm((currentForm) => ({ ...currentForm, [name]: value }));
        setErrors((currentErrors) => ({ ...currentErrors, [name]: "" }));
        setFormStatus("");
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const nextErrors = {};
        if (!form.name.trim()) {
            nextErrors.name = "Please enter your full name.";
        }
        if (!form.email.trim()) {
            nextErrors.email = "Please enter your email address.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
            nextErrors.email = "Please enter a valid email address.";
        }
        if (!form.subject.trim()) {
            nextErrors.subject = "Please enter a subject.";
        }
        if (!form.message.trim()) {
            nextErrors.message = "Please enter a message.";
        }

        setErrors(nextErrors);
        if (Object.keys(nextErrors).length > 0) {
            setFormStatus("");
            return;
        }

        setFormStatus(
            "This form is not connected to a message service yet. Your message has not been sent.",
        );
    };

    return (
        <main className="contact-page">
            <section className="contact-hero" aria-labelledby="contact-hero-title">
                <div className="container">
                    <nav className="contact-breadcrumb" aria-label="Breadcrumb">
                        <Link to="/">Home</Link>
                        <span aria-hidden="true">/</span>
                        <span aria-current="page">Contact</span>
                    </nav>
                    <div className="row align-items-center g-5">
                        <div className="col-12 col-lg-7">
                            <span className="contact-eyebrow">
                                <span aria-hidden="true" />
                                WE’RE HERE TO HELP
                            </span>
                            <h1 id="contact-hero-title">Contact Us</h1>
                            <p>
                                Let&apos;s connect. Have a question about HR Management? We&apos;d
                                be glad to hear from you. Explore the contact options below.
                            </p>
                        </div>
                        <div className="col-12 col-lg-5">
                            <div className="contact-hero-art" aria-hidden="true">
                                <div className="contact-art-ring contact-art-ring-one" />
                                <div className="contact-art-ring contact-art-ring-two" />
                                <div className="contact-art-message">
                                    <span className="contact-art-message-icon">✉</span>
                                    <span className="contact-art-message-lines">
                                        <i />
                                        <i />
                                        <i />
                                    </span>
                                </div>
                                <span className="contact-art-node contact-art-node-one">People</span>
                                <span className="contact-art-node contact-art-node-two">Support</span>
                                <span className="contact-art-node contact-art-node-three">HR</span>
                                <span className="contact-art-spark contact-art-spark-one">✦</span>
                                <span className="contact-art-spark contact-art-spark-two">✦</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact-methods contact-section" aria-labelledby="contact-methods-title">
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-12 col-lg-7">
                            <span className="contact-section-label">GET IN TOUCH</span>
                            <h2 className="contact-section-title" id="contact-methods-title">
                                We&apos;re happy to hear from you
                            </h2>
                            <p className="contact-section-intro">
                                Contact information is shown as a replaceable placeholder until
                                verified details are available.
                            </p>
                        </div>
                    </div>
                    <div className="row g-4 mt-2">
                        {contactMethods.map((method) => (
                            <div className="col-12 col-md-4" key={method.title}>
                                <article className="contact-method-card h-100">
                                    <span className="contact-method-icon">{method.icon}</span>
                                    <h3>{method.title}</h3>
                                    <p className="contact-method-detail">{method.detail}</p>
                                    <p className="contact-method-description">{method.description}</p>
                                </article>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="contact-form-section contact-section" aria-labelledby="contact-form-title">
                <div className="container">
                    <div className="row g-5 align-items-start">
                        <div className="col-12 col-lg-5">
                            <span className="contact-section-label">SEND A MESSAGE</span>
                            <h2 className="contact-section-title" id="contact-form-title">
                                Tell us what&apos;s on your mind
                            </h2>
                            <p className="contact-section-intro text-start">
                                Share a little about your question or the HR workflows you&apos;d
                                like to learn about.
                            </p>
                            <div className="contact-form-aside">
                                <span className="contact-aside-icon" aria-hidden="true">✦</span>
                                <div>
                                    <h3>A note about this form</h3>
                                    <p>
                                        Message submission is not connected yet. Submitting will
                                        validate your details but will not send or store your message.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-7">
                            <form className="contact-form-card" onSubmit={handleSubmit} noValidate>
                                <div className="row g-3">
                                    <div className="col-12 col-md-6">
                                        <label className="form-label" htmlFor="contact-name">Full Name</label>
                                        <input
                                            className={`form-control${errors.name ? " is-invalid" : ""}`}
                                            id="contact-name"
                                            name="name"
                                            type="text"
                                            autoComplete="name"
                                            placeholder="Your full name"
                                            value={form.name}
                                            onChange={handleChange}
                                            aria-invalid={Boolean(errors.name)}
                                            aria-describedby={errors.name ? "contact-name-error" : undefined}
                                            required
                                        />
                                        {errors.name && <div className="invalid-feedback" id="contact-name-error">{errors.name}</div>}
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <label className="form-label" htmlFor="contact-email">Email Address</label>
                                        <input
                                            className={`form-control${errors.email ? " is-invalid" : ""}`}
                                            id="contact-email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            placeholder="you@example.com"
                                            value={form.email}
                                            onChange={handleChange}
                                            aria-invalid={Boolean(errors.email)}
                                            aria-describedby={errors.email ? "contact-email-error" : undefined}
                                            required
                                        />
                                        {errors.email && <div className="invalid-feedback" id="contact-email-error">{errors.email}</div>}
                                    </div>
                                    <div className="col-12">
                                        <label className="form-label" htmlFor="contact-subject">Subject</label>
                                        <input
                                            className={`form-control${errors.subject ? " is-invalid" : ""}`}
                                            id="contact-subject"
                                            name="subject"
                                            type="text"
                                            placeholder="What can we help with?"
                                            value={form.subject}
                                            onChange={handleChange}
                                            aria-invalid={Boolean(errors.subject)}
                                            aria-describedby={errors.subject ? "contact-subject-error" : undefined}
                                            required
                                        />
                                        {errors.subject && <div className="invalid-feedback" id="contact-subject-error">{errors.subject}</div>}
                                    </div>
                                    <div className="col-12">
                                        <label className="form-label" htmlFor="contact-message">Message</label>
                                        <textarea
                                            className={`form-control${errors.message ? " is-invalid" : ""}`}
                                            id="contact-message"
                                            name="message"
                                            rows="5"
                                            placeholder="Write your message..."
                                            value={form.message}
                                            onChange={handleChange}
                                            aria-invalid={Boolean(errors.message)}
                                            aria-describedby={errors.message ? "contact-message-error" : undefined}
                                            required
                                        />
                                        {errors.message && <div className="invalid-feedback" id="contact-message-error">{errors.message}</div>}
                                    </div>
                                    <div className="col-12">
                                        <button className="btn contact-submit-button" type="submit">
                                            Validate message <span aria-hidden="true">→</span>
                                        </button>
                                    </div>
                                </div>
                                {formStatus && (
                                    <div className="alert alert-warning contact-form-status mt-3 mb-0" role="status" aria-live="polite">
                                        {formStatus}
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact-friendly">
                <div className="container">
                    <div className="contact-friendly-content">
                        <span className="contact-friendly-mark" aria-hidden="true">✦</span>
                        <div>
                            <h2>People questions are always worth asking.</h2>
                            <p>
                                Whether you&apos;re exploring the platform or looking for a simpler
                                way to manage HR, we&apos;re glad you stopped by.
                            </p>
                        </div>
                        <Link className="btn contact-friendly-link" to="/about">
                            About the platform <span aria-hidden="true">→</span>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Contact;
