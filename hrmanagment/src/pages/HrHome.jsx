import { Link } from "react-router-dom";
import "./hrhome.css";

const availableAreas = [
    {
        eyebrow: "ACCOUNT ACCESS",
        title: "Registration",
        description: "Open the existing registration page for HR and employee accounts.",
        to: "/register",
        action: "Go to registration",
        icon: "＋",
        tone: "cyan",
    },
    {
        eyebrow: "WORKSPACE ROUTE",
        title: "Employee workspace",
        description: "Visit the current employee home page.",
        to: "/emphome",
        action: "Open employee workspace",
        icon: "◎",
        tone: "blue",
    },
    {
        eyebrow: "PLATFORM INFORMATION",
        title: "About HR Management",
        description: "Learn about the platform and its people-first approach.",
        to: "/about",
        action: "About the platform",
        icon: "✦",
        tone: "navy",
    },
];

const hrFocusAreas = [
    {
        title: "Employee records",
        description: "A clearer place for essential workforce information.",
        icon: "▤",
    },
    {
        title: "Time and leave",
        description: "Keep attendance and leave workflows in view.",
        icon: "◷",
    },
    {
        title: "People development",
        description: "Support performance conversations and growth.",
        icon: "↗",
    },
];

function HrHome() {
    return (
        <main className="hr-dashboard">
            <div className="container">
                <section className="hr-dashboard-welcome" aria-labelledby="hr-welcome-title">
                    <div className="hr-dashboard-welcome-copy">
                        <span className="hr-dashboard-eyebrow">
                            <span aria-hidden="true" />
                            HR MANAGEMENT · HR WORKSPACE
                        </span>
                        <h1 id="hr-welcome-title">Welcome to your HR workspace</h1>
                        <p>
                            Find the existing areas of HR Management and get a clearer view
                            of the platform&apos;s people-focused capabilities.
                        </p>
                        <Link className="btn hr-dashboard-primary" to="/register">
                            Open registration <span aria-hidden="true">→</span>
                        </Link>
                    </div>
                    <div className="hr-dashboard-art" aria-hidden="true">
                        <div className="hr-art-ring hr-art-ring-one" />
                        <div className="hr-art-ring hr-art-ring-two" />
                        <div className="hr-art-core">
                            <span>✦</span>
                            <small>PEOPLE<br />IN FOCUS</small>
                        </div>
                        <span className="hr-art-node hr-art-node-one">People</span>
                        <span className="hr-art-node hr-art-node-two">Process</span>
                        <span className="hr-art-node hr-art-node-three">Progress</span>
                    </div>
                </section>

                <div className="hr-dashboard-layout">
                    <aside className="hr-dashboard-sidebar" aria-label="HR dashboard navigation">
                        <span className="hr-sidebar-label">YOUR WORKSPACE</span>
                        <a className="hr-sidebar-link active" href="#hr-overview" aria-current="page">
                            <span aria-hidden="true">⌂</span> Overview
                        </a>
                        <a className="hr-sidebar-link" href="#hr-focus">
                            <span aria-hidden="true">▦</span> HR focus areas
                        </a>
                        <a className="hr-sidebar-link" href="#hr-available">
                            <span aria-hidden="true">↗</span> Available routes
                        </a>
                        <Link className="hr-sidebar-link" to="/contact">
                            <span aria-hidden="true">✉</span> Contact
                        </Link>
                        <div className="hr-sidebar-note">
                            <span aria-hidden="true">i</span>
                            <p>Live employee data and HR actions need a secure, connected backend.</p>
                        </div>
                    </aside>

                    <div className="hr-dashboard-main">
                        <section className="hr-overview" id="hr-overview" aria-labelledby="hr-overview-title">
                            <div className="hr-section-heading">
                                <div>
                                    <span className="hr-section-label">OVERVIEW</span>
                                    <h2 id="hr-overview-title">Your people operations</h2>
                                </div>
                                <span className="hr-workspace-status">
                                    <i aria-hidden="true" /> HR workspace
                                </span>
                            </div>
                            <div className="hr-data-notice" role="note">
                                <span className="hr-data-notice-icon" aria-hidden="true">i</span>
                                <div>
                                    <h3>Live HR data is not connected</h3>
                                    <p>
                                        No employee statistics or activity are shown. The current
                                        employee-list endpoint returns unfiltered user records,
                                        including password fields, so this dashboard does not request
                                        or display that data.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="hr-focus" id="hr-focus" aria-labelledby="hr-focus-title">
                            <div className="hr-section-heading">
                                <div>
                                    <span className="hr-section-label">PLATFORM CAPABILITIES</span>
                                    <h2 id="hr-focus-title">HR focus areas</h2>
                                </div>
                                <p className="hr-section-caption">Capability overview, not live records</p>
                            </div>
                            <div className="row g-3">
                                {hrFocusAreas.map((area) => (
                                    <div className="col-12 col-md-4" key={area.title}>
                                        <article className="hr-focus-card h-100">
                                            <span className="hr-focus-icon" aria-hidden="true">{area.icon}</span>
                                            <h3>{area.title}</h3>
                                            <p>{area.description}</p>
                                        </article>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="hr-routes" id="hr-available" aria-labelledby="hr-routes-title">
                            <div className="hr-section-heading">
                                <div>
                                    <span className="hr-section-label">EXISTING APP ROUTES</span>
                                    <h2 id="hr-routes-title">Quick access</h2>
                                </div>
                            </div>
                            <div className="row g-3">
                                {availableAreas.map((area) => (
                                    <div className="col-12 col-md-6 col-xl-4" key={area.title}>
                                        <article className="hr-route-card h-100">
                                            <span className={`hr-route-icon ${area.tone}`} aria-hidden="true">
                                                {area.icon}
                                            </span>
                                            <span className="hr-route-eyebrow">{area.eyebrow}</span>
                                            <h3>{area.title}</h3>
                                            <p>{area.description}</p>
                                            <Link className="hr-route-action" to={area.to}>
                                                {area.action} <span aria-hidden="true">→</span>
                                            </Link>
                                        </article>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="hr-activity-note" aria-label="Task and activity availability">
                            <span className="hr-activity-icon" aria-hidden="true">◷</span>
                            <div>
                                <h2>Tasks and recent activity</h2>
                                <p>
                                    Task assignment requires HR and employee IDs, but the app does
                                    not provide a secure HR session or task-list endpoint. The
                                    existing employee task route returns placeholder text, so no
                                    task table or activity feed is shown.
                                </p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default HrHome;
