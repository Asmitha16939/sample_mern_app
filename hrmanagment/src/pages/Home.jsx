import { Link } from "react-router-dom";
import "./home.css";

const features = [
    {
        title: "Employee Management",
        description: "Keep employee information organized and easy to access.",
        icon: (
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="9" cy="8" r="3" />
                <path d="M3.5 19v-1.5a5.5 5.5 0 0 1 11 0V19zM16 5.5a3 3 0 0 1 0 5.8M17 13a5 5 0 0 1 3.5 5v1" />
            </svg>
        ),
    },
    {
        title: "Attendance Management",
        description: "Get a clearer view of schedules, time, and attendance.",
        icon: (
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3.5" y="5" width="17" height="16" rx="2" />
                <path d="M7.5 3v4M16.5 3v4M3.5 10h17M8 14l2.5 2.5 5-5" />
            </svg>
        ),
    },
    {
        title: "Leave Management",
        description: "Make leave requests and approvals easier to follow.",
        icon: (
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7 3.5h7l4 4V20a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 20V5a1.5 1.5 0 0 1 1-1.5Z" />
                <path d="M14 3.5V8h4M9 13h6M9 16.5h6" />
            </svg>
        ),
    },
    {
        title: "Payroll Management",
        description: "Bring payroll workflows into one organized workspace.",
        icon: (
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 9h18M7 14h4M16 14h1M8 3v2M16 3v2" />
            </svg>
        ),
    },
    {
        title: "Performance Tracking",
        description: "Support meaningful conversations about goals and growth.",
        icon: (
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 20V11M10 20V5M16 20v-7M22 20H2" />
                <path d="m3 8 6-4 6 5 6-6" />
            </svg>
        ),
    },
    {
        title: "Recruitment Management",
        description: "Keep hiring activities and candidate progress in view.",
        icon: (
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="7" width="18" height="13" rx="2" />
                <path d="M8 7V5.5A1.5 1.5 0 0 1 9.5 4h5A1.5 1.5 0 0 1 16 5.5V7M3 12h18M10 12v2h4v-2" />
            </svg>
        ),
    },
];

const platformHighlights = [
    {
        label: "Employee lifecycle",
        detail: "From recruitment to professional growth",
        icon: "01",
    },
    {
        label: "Everyday operations",
        detail: "Attendance, leave, and payroll workflows",
        icon: "02",
    },
    {
        label: "People-centered",
        detail: "A connected view of essential HR tasks",
        icon: "03",
    },
];

const benefits = [
    {
        title: "Easy workforce management",
        description: "Keep day-to-day people operations straightforward.",
    },
    {
        title: "Centralized employee records",
        description: "Find key employee information in one place.",
    },
    {
        title: "Simplified HR processes",
        description: "Bring recurring workflows into a clearer routine.",
    },
    {
        title: "Convenient access",
        description: "Reach essential HR tools through a single platform.",
    },
];

function Home() {
    return (
        <main className="home-page">
            <section className="home-hero">
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-12 col-lg-6">
                            <span className="home-eyebrow">
                                <span className="home-eyebrow-dot" aria-hidden="true" />
                                A more connected way to work
                            </span>
                            <h1 className="home-hero-title">
                                Simplify Your Workforce <span>Management</span>
                            </h1>
                            <p className="home-hero-copy">
                                Bring employee records and essential HR workflows together in one
                                intuitive platform, so your team can spend less time on admin and
                                more time supporting people.
                            </p>
                            <div className="d-flex flex-column flex-sm-row gap-3 home-hero-actions">
                                <Link className="btn home-btn-primary" to="/register">
                                    Get Started <span aria-hidden="true">→</span>
                                </Link>
                                <a className="btn home-btn-outline" href="#features">
                                    Explore Features
                                </a>
                            </div>
                            <p className="home-hero-note">
                                Purpose-built tools for the people behind your organization.
                            </p>
                        </div>

                        <div className="col-12 col-lg-6">
                            <div className="home-dashboard" aria-label="Illustration of an HR workspace">
                                <div className="home-dashboard-glow" />
                                <div className="home-dashboard-window">
                                    <div className="home-dashboard-topbar">
                                        <div className="home-dashboard-dots" aria-hidden="true">
                                            <span />
                                            <span />
                                            <span />
                                        </div>
                                        <span>PEOPLE OPERATIONS</span>
                                        <span className="home-dashboard-status">
                                            <i aria-hidden="true" /> In focus
                                        </span>
                                    </div>
                                    <div className="home-dashboard-content">
                                        <div className="home-dashboard-welcome">
                                            <div>
                                                <span className="home-dashboard-kicker">YOUR WORKSPACE</span>
                                                <h2>People, in sync.</h2>
                                                <p>A clearer view of the work that matters.</p>
                                            </div>
                                            <div className="home-dashboard-orbit" aria-hidden="true">
                                                <span className="orbit orbit-one" />
                                                <span className="orbit orbit-two" />
                                                <span className="orbit orbit-three" />
                                                <span className="orbit-core">✦</span>
                                            </div>
                                        </div>
                                        <div className="home-dashboard-cards">
                                            <div className="home-dashboard-card">
                                                <span className="home-mini-icon mini-cyan" aria-hidden="true">✦</span>
                                                <span>Employee records</span>
                                                <strong>Organized</strong>
                                            </div>
                                            <div className="home-dashboard-card">
                                                <span className="home-mini-icon mini-blue" aria-hidden="true">◷</span>
                                                <span>Time &amp; leave</span>
                                                <strong>On track</strong>
                                            </div>
                                        </div>
                                        <div className="home-dashboard-bottom">
                                            <span>Connected workflows</span>
                                            <div className="home-workflow-line" aria-hidden="true">
                                                <i />
                                                <i />
                                                <i />
                                                <i />
                                                <i />
                                            </div>
                                            <span>People-first, by design</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="home-float-card home-float-left">
                                    <span className="home-float-symbol" aria-hidden="true">✓</span>
                                    <span>Workflows<br /><strong>made clearer</strong></span>
                                </div>
                                <div className="home-float-card home-float-right">
                                    <span className="home-float-symbol" aria-hidden="true">↗</span>
                                    <span>Focus on<br /><strong>your people</strong></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="home-features home-section" id="features" aria-labelledby="features-title">
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-12 col-lg-7">
                            <span className="home-section-label">ONE CONNECTED PLATFORM</span>
                            <h2 className="home-section-title" id="features-title">
                                Everything HR needs, thoughtfully connected
                            </h2>
                            <p className="home-section-copy">
                                Make everyday people operations easier with tools designed to work
                                together across the employee journey.
                            </p>
                        </div>
                    </div>
                    <div className="row g-4 mt-2">
                        {features.map((feature) => (
                            <div className="col-12 col-md-6 col-lg-4" key={feature.title}>
                                <article className="home-feature-card h-100">
                                    <div className="home-feature-icon">{feature.icon}</div>
                                    <h3>{feature.title}</h3>
                                    <p>{feature.description}</p>
                                    <span className="home-feature-arrow" aria-hidden="true">↗</span>
                                </article>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="home-about home-section" id="about" aria-labelledby="about-title">
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-12 col-lg-6">
                            <div className="home-about-visual">
                                <div className="home-about-panel">
                                    <span className="home-section-label">HR, WORKING TOGETHER</span>
                                    <h3>Less scattered.<br /><span>More in sync.</span></h3>
                                    <div className="home-about-flow">
                                        <div><span>01</span><strong>People</strong></div>
                                        <i aria-hidden="true">→</i>
                                        <div><span>02</span><strong>Processes</strong></div>
                                        <i aria-hidden="true">→</i>
                                        <div><span>03</span><strong>Progress</strong></div>
                                    </div>
                                </div>
                                <span className="home-about-decoration home-about-decoration-one" aria-hidden="true" />
                                <span className="home-about-decoration home-about-decoration-two" aria-hidden="true" />
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <span className="home-section-label">ABOUT HR MANAGEMENT</span>
                            <h2 className="home-section-title" id="about-title">
                                Make room for the human side of HR
                            </h2>
                            <p className="home-about-copy">
                                HR Management brings core workforce activities into a single,
                                approachable space. From keeping employee records organized to
                                coordinating everyday tasks, the platform helps make HR operations
                                easier to navigate.
                            </p>
                            <p className="home-about-copy">
                                Clearer processes help teams stay connected and give people
                                convenient access to the information and workflows they need.
                            </p>
                            <Link className="home-text-link" to="/about">
                                Learn more about us <span aria-hidden="true">→</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="home-highlights home-section" aria-labelledby="highlights-title">
                <div className="container">
                    <div className="row align-items-end g-3 mb-4">
                        <div className="col-12 col-lg-8">
                            <span className="home-section-label">PLATFORM AT A GLANCE</span>
                            <h2 className="home-section-title mb-0" id="highlights-title">
                                Designed around the employee lifecycle
                            </h2>
                        </div>
                        <div className="col-12 col-lg-4">
                            <p className="home-highlights-note">
                                Illustrative capabilities, not company performance statistics.
                            </p>
                        </div>
                    </div>
                    <div className="row g-3">
                        {platformHighlights.map((highlight) => (
                            <div className="col-12 col-md-4" key={highlight.label}>
                                <article className="home-highlight-card h-100">
                                    <span className="home-highlight-index">{highlight.icon}</span>
                                    <div>
                                        <h3>{highlight.label}</h3>
                                        <p>{highlight.detail}</p>
                                    </div>
                                </article>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="home-benefits home-section" aria-labelledby="benefits-title">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-12 col-lg-5">
                            <span className="home-section-label">WHY CHOOSE US</span>
                            <h2 className="home-section-title" id="benefits-title">
                                HR that feels easier, every day
                            </h2>
                            <p className="home-section-copy text-start">
                                Spend less time switching between tasks and more time building a
                                workplace where people can do their best work.
                            </p>
                        </div>
                        <div className="col-12 col-lg-7">
                            <div className="row g-3">
                                {benefits.map((benefit, index) => (
                                    <div className="col-12 col-sm-6" key={benefit.title}>
                                        <article className="home-benefit-card h-100">
                                            <span className="home-benefit-check" aria-hidden="true">✓</span>
                                            <span className="home-benefit-index">0{index + 1}</span>
                                            <h3>{benefit.title}</h3>
                                            <p>{benefit.description}</p>
                                        </article>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="home-final-cta" aria-labelledby="final-cta-title">
                <div className="container">
                    <div className="home-final-cta-content">
                        <div>
                            <span className="home-section-label">A BETTER WAY TO MANAGE HR</span>
                            <h2 id="final-cta-title">Ready to bring your people operations together?</h2>
                            <p>Get started with a more connected HR workspace.</p>
                        </div>
                        <div className="d-flex flex-column flex-sm-row gap-3 home-final-cta-actions">
                            <Link className="btn home-btn-light" to="/register">Register</Link>
                            <Link className="btn home-btn-ghost" to="/login">Login</Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Home;
