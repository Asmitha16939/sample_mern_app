import { Link } from "react-router-dom";
import "./about.css";

const coreValues = [
    {
        title: "Transparency",
        description: "Make processes and essential employee information easier to understand.",
        icon: "◉",
    },
    {
        title: "Efficiency",
        description: "Help teams handle recurring HR tasks with less friction.",
        icon: "↗",
    },
    {
        title: "Employee Focus",
        description: "Keep people at the center of the way HR work gets done.",
        icon: "♡",
    },
    {
        title: "Innovation",
        description: "Use thoughtful tools to make workforce operations more connected.",
        icon: "✦",
    },
    {
        title: "Reliability",
        description: "Support consistent, dependable access to everyday HR workflows.",
        icon: "✓",
    },
    {
        title: "Simplicity",
        description: "Make essential tasks approachable and straightforward to use.",
        icon: "○",
    },
];

const platformBenefits = [
    "Centralized employee management",
    "Simplified HR operations",
    "Easy access to information",
    "Organized workforce management",
    "User-friendly interface",
];

function About() {
    return (
        <main className="about-page">
            <section className="about-hero" aria-labelledby="about-hero-title">
                <div className="container">
                    <nav className="about-breadcrumb" aria-label="Breadcrumb">
                        <Link to="/">Home</Link>
                        <span aria-hidden="true">/</span>
                        <span aria-current="page">About Us</span>
                    </nav>
                    <div className="row align-items-center g-5">
                        <div className="col-12 col-lg-7">
                            <span className="about-eyebrow">
                                <span aria-hidden="true" />
                                PEOPLE FIRST. PROCESS MADE SIMPLE.
                            </span>
                            <h1 id="about-hero-title">
                                Empowering People,<br />
                                <span>Simplifying HR</span>
                            </h1>
                            <p className="about-hero-copy">
                                HR Management brings essential workforce tools together to help
                                organizations support their people and manage everyday HR
                                operations with greater clarity.
                            </p>
                        </div>
                        <div className="col-12 col-lg-5">
                            <div className="about-hero-art" aria-hidden="true">
                                <div className="about-hero-art-ring about-ring-one" />
                                <div className="about-hero-art-ring about-ring-two" />
                                <div className="about-hero-art-core">
                                    <span className="about-art-star">✦</span>
                                    <span className="about-art-label">PEOPLE<br />AT THE CENTER</span>
                                </div>
                                <div className="about-art-node about-node-one"><span>People</span></div>
                                <div className="about-art-node about-node-two"><span>Process</span></div>
                                <div className="about-art-node about-node-three"><span>Progress</span></div>
                                <span className="about-art-dot about-dot-one" />
                                <span className="about-art-dot about-dot-two" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-who about-section" aria-labelledby="about-who-title">
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-12 col-lg-6">
                            <div className="about-workspace-visual" aria-hidden="true">
                                <div className="about-workspace-card">
                                    <div className="about-workspace-head">
                                        <span className="about-workspace-mark">✦</span>
                                        <div>
                                            <strong>HR workspace</strong>
                                            <span>One connected view</span>
                                        </div>
                                        <span className="about-workspace-menu">•••</span>
                                    </div>
                                    <div className="about-workspace-row">
                                        <span className="about-workspace-icon">◎</span>
                                        <div className="about-workspace-lines"><i /><i /></div>
                                        <span className="about-workspace-tag">People</span>
                                    </div>
                                    <div className="about-workspace-row">
                                        <span className="about-workspace-icon about-workspace-icon-cyan">◷</span>
                                        <div className="about-workspace-lines"><i /><i /></div>
                                        <span className="about-workspace-tag">Time</span>
                                    </div>
                                    <div className="about-workspace-row">
                                        <span className="about-workspace-icon about-workspace-icon-blue">▤</span>
                                        <div className="about-workspace-lines"><i /><i /></div>
                                        <span className="about-workspace-tag">Records</span>
                                    </div>
                                    <div className="about-workspace-footer">
                                        <span>Connected workflows</span>
                                        <div><i /><i /><i /><i /></div>
                                    </div>
                                </div>
                                <div className="about-visual-caption">
                                    <span>✦</span>
                                    <strong>Built for everyday HR</strong>
                                </div>
                                <span className="about-visual-orbit" />
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <span className="about-section-label">WHO WE ARE</span>
                            <h2 className="about-section-title" id="about-who-title">
                                A clearer way to care for your workforce
                            </h2>
                            <p>
                                HR Management is a platform for organizing employee information
                                and bringing essential HR operations into one accessible workspace.
                                It connects everyday activities such as employee management,
                                attendance, leave, payroll, performance, and recruitment.
                            </p>
                            <p>
                                By making core workflows easier to find and follow, the platform
                                helps organizations spend less effort navigating scattered tasks
                                and more time supporting employees.
                            </p>
                            <Link className="about-inline-link" to="/contact">
                                Talk with us <span aria-hidden="true">→</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-purpose about-section" aria-labelledby="about-purpose-title">
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-12 col-lg-7">
                            <span className="about-section-label">OUR PURPOSE</span>
                            <h2 className="about-section-title" id="about-purpose-title">
                                People-centered by design
                            </h2>
                            <p className="about-section-intro">
                                A shared commitment to making essential HR work more connected,
                                accessible, and human.
                            </p>
                        </div>
                    </div>
                    <div className="row g-4 mt-2">
                        <div className="col-12 col-lg-6">
                            <article className="about-purpose-card about-mission-card h-100">
                                <span className="about-purpose-icon" aria-hidden="true">◎</span>
                                <span className="about-card-kicker">OUR MISSION</span>
                                <h3>Make HR work simpler for everyone</h3>
                                <p>
                                    Our mission is to help organizations manage workforce
                                    information and everyday HR processes through a clear,
                                    approachable platform that keeps people in focus.
                                </p>
                                <span className="about-purpose-watermark" aria-hidden="true">M</span>
                            </article>
                        </div>
                        <div className="col-12 col-lg-6">
                            <article className="about-purpose-card about-vision-card h-100">
                                <span className="about-purpose-icon" aria-hidden="true">✧</span>
                                <span className="about-card-kicker">OUR VISION</span>
                                <h3>A more connected experience of work</h3>
                                <p>
                                    We envision HR operations where useful information and
                                    everyday workflows come together, helping teams build a more
                                    organized and supportive workplace.
                                </p>
                                <span className="about-purpose-watermark" aria-hidden="true">V</span>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-values about-section" aria-labelledby="about-values-title">
                <div className="container">
                    <div className="row align-items-end g-3">
                        <div className="col-12 col-lg-8">
                            <span className="about-section-label">OUR CORE VALUES</span>
                            <h2 className="about-section-title mb-0" id="about-values-title">
                                The principles behind every workflow
                            </h2>
                        </div>
                        <div className="col-12 col-lg-4">
                            <p className="about-values-intro">
                                The qualities we believe make HR tools useful and trustworthy.
                            </p>
                        </div>
                    </div>
                    <div className="row g-3 mt-2">
                        {coreValues.map((value, index) => (
                            <div className="col-12 col-sm-6 col-lg-4" key={value.title}>
                                <article className="about-value-card h-100">
                                    <div className="about-value-card-top">
                                        <span className="about-value-icon" aria-hidden="true">{value.icon}</span>
                                        <span className="about-value-number">0{index + 1}</span>
                                    </div>
                                    <h3>{value.title}</h3>
                                    <p>{value.description}</p>
                                </article>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="about-choose about-section" aria-labelledby="about-choose-title">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-12 col-lg-5">
                            <span className="about-section-label">WHY CHOOSE OUR PLATFORM</span>
                            <h2 className="about-section-title" id="about-choose-title">
                                Less complexity. More clarity.
                            </h2>
                            <p className="about-section-intro">
                                Make everyday people operations easier to navigate with a
                                platform designed around the way HR teams work.
                            </p>
                        </div>
                        <div className="col-12 col-lg-7">
                            <div className="about-benefit-list">
                                {platformBenefits.map((benefit, index) => (
                                    <div className="about-benefit-item" key={benefit}>
                                        <span className="about-benefit-check" aria-hidden="true">✓</span>
                                        <span>{benefit}</span>
                                        <span className="about-benefit-index">0{index + 1}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-final-cta" aria-labelledby="about-final-title">
                <div className="container">
                    <div className="about-final-content">
                        <div>
                            <span className="about-section-label">YOUR HR WORKSPACE AWAITS</span>
                            <h2 id="about-final-title">Explore a more connected way to manage HR</h2>
                            <p>Take the next step toward simpler workforce operations.</p>
                        </div>
                        <div className="d-flex flex-column flex-sm-row gap-3 about-final-actions">
                            <Link className="btn about-btn-primary" to="/register">Register</Link>
                            <Link className="btn about-btn-outline" to="/login">Login</Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default About;
