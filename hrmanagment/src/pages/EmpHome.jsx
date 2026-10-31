import { Link } from "react-router-dom";
import "./emphome.css";

const existingLinks = [
    {
        title: "About HR Management",
        description: "Explore the platform and its people-first approach.",
        to: "/about",
        action: "Learn about the platform",
        icon: "✦",
    },
    {
        title: "Contact",
        description: "Visit the current contact page for questions and support information.",
        to: "/contact",
        action: "Open Contact",
        icon: "✉",
    },
    {
        title: "Home",
        description: "Return to the HR Management landing page.",
        to: "/",
        action: "Go to Home",
        icon: "⌂",
    },
];

const workspaceAreas = [
    {
        title: "People information",
        description: "Personal profile details are not loaded into this workspace.",
        icon: "◎",
    },
    {
        title: "Assigned tasks",
        description: "An employee-specific task list is not available yet.",
        icon: "✓",
    },
    {
        title: "Everyday HR",
        description: "Explore the platform's people-focused areas and information.",
        icon: "↗",
    },
];

function EmpHome() {
    return (
        <main className="employee-dashboard">
            <div className="container">
                <section className="employee-welcome" aria-labelledby="employee-welcome-title">
                    <div className="employee-welcome-copy">
                        <span className="employee-eyebrow">
                            <span aria-hidden="true" />
                            HR MANAGEMENT · EMPLOYEE WORKSPACE
                        </span>
                        <h1 id="employee-welcome-title">Welcome to your workspace</h1>
                        <p>
                            Find your way around HR Management and explore the information
                            currently available in the platform.
                        </p>
                        <Link className="btn employee-primary-action" to="/about">
                            Explore the platform <span aria-hidden="true">→</span>
                        </Link>
                    </div>
                    <div className="employee-welcome-art" aria-hidden="true">
                        <div className="employee-art-ring employee-art-ring-one" />
                        <div className="employee-art-ring employee-art-ring-two" />
                        <div className="employee-art-core">
                            <span>✦</span>
                            <small>PEOPLE<br />IN FOCUS</small>
                        </div>
                        <span className="employee-art-node employee-art-node-one">People</span>
                        <span className="employee-art-node employee-art-node-two">HR</span>
                        <span className="employee-art-node employee-art-node-three">Together</span>
                    </div>
                </section>

                <div className="employee-dashboard-layout">
                    <aside className="employee-sidebar" aria-label="Employee dashboard navigation">
                        <span className="employee-sidebar-label">YOUR WORKSPACE</span>
                        <a className="employee-sidebar-link active" href="#employee-overview" aria-current="page">
                            <span aria-hidden="true">⌂</span> Overview
                        </a>
                        <a className="employee-sidebar-link" href="#employee-areas">
                            <span aria-hidden="true">▦</span> Workspace areas
                        </a>
                        <a className="employee-sidebar-link" href="#employee-links">
                            <span aria-hidden="true">↗</span> Quick links
                        </a>
                        <Link className="employee-sidebar-link" to="/contact">
                            <span aria-hidden="true">✉</span> Contact
                        </Link>
                        <div className="employee-sidebar-note">
                            <span aria-hidden="true">i</span>
                            <p>Personal details and tasks are not connected to this session.</p>
                        </div>
                    </aside>

                    <div className="employee-dashboard-content">
                        <section className="employee-overview" id="employee-overview" aria-labelledby="employee-overview-title">
                            <div className="employee-section-heading">
                                <div>
                                    <span className="employee-section-label">OVERVIEW</span>
                                    <h2 id="employee-overview-title">Your HR workspace</h2>
                                </div>
                                <span className="employee-workspace-badge">
                                    <span aria-hidden="true">✦</span> Employee view
                                </span>
                            </div>
                            <div className="employee-info-notice" role="note">
                                <span className="employee-notice-icon" aria-hidden="true">i</span>
                                <div>
                                    <h3>Your profile is not connected yet</h3>
                                    <p>
                                        Login does not retain the authenticated user for this page,
                                        so no personal details are displayed. This avoids exposing
                                        other employees&apos; information.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="employee-areas" id="employee-areas" aria-labelledby="employee-areas-title">
                            <div className="employee-section-heading">
                                <div>
                                    <span className="employee-section-label">WORKSPACE AREAS</span>
                                    <h2 id="employee-areas-title">A people-first platform</h2>
                                </div>
                            </div>
                            <div className="row g-3">
                                {workspaceAreas.map((area) => (
                                    <div className="col-12 col-md-4" key={area.title}>
                                        <article className="employee-area-card h-100">
                                            <span className="employee-area-icon" aria-hidden="true">{area.icon}</span>
                                            <h3>{area.title}</h3>
                                            <p>{area.description}</p>
                                        </article>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="employee-tasks-note" aria-labelledby="employee-tasks-title">
                            <span className="employee-tasks-icon" aria-hidden="true">✓</span>
                            <div>
                                <span className="employee-section-label">MY TASKS</span>
                                <h2 id="employee-tasks-title">Task details aren&apos;t available here yet</h2>
                                <p>
                                    The employee task endpoint currently returns placeholder text,
                                    not employee-specific tasks. No task records or status totals
                                    are displayed.
                                </p>
                            </div>
                        </section>

                        <section className="employee-quick-links" id="employee-links" aria-labelledby="employee-links-title">
                            <div className="employee-section-heading">
                                <div>
                                    <span className="employee-section-label">QUICK LINKS</span>
                                    <h2 id="employee-links-title">Explore the platform</h2>
                                </div>
                            </div>
                            <div className="row g-3">
                                {existingLinks.map((item) => (
                                    <div className="col-12 col-md-6 col-xl-4" key={item.title}>
                                        <article className="employee-link-card h-100">
                                            <span className="employee-link-icon" aria-hidden="true">{item.icon}</span>
                                            <h3>{item.title}</h3>
                                            <p>{item.description}</p>
                                            <Link className="employee-link-action" to={item.to}>
                                                {item.action} <span aria-hidden="true">→</span>
                                            </Link>
                                        </article>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default EmpHome;
