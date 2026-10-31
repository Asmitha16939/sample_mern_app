import { Link } from "react-router-dom";
import "./adminhome.css";

const workspaceLinks = [
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
        title: "HR workspace",
        description: "Visit the current HR home page.",
        to: "/hrhome",
        action: "Open HR workspace",
        icon: "◎",
        tone: "blue",
    },
    {
        eyebrow: "WORKSPACE ROUTE",
        title: "Employee workspace",
        description: "Visit the current employee home page.",
        to: "/emphome",
        action: "Open employee workspace",
        icon: "↗",
        tone: "navy",
    },
];

function AdminHome() {
    return (
        <main className="admin-dashboard">
            <div className="container">
                <section className="admin-welcome" aria-labelledby="admin-welcome-title">
                    <div className="admin-welcome-copy">
                        <span className="admin-eyebrow">
                            <span aria-hidden="true" />
                            HR MANAGEMENT · ADMIN WORKSPACE
                        </span>
                        <h1 id="admin-welcome-title">Welcome to your workspace</h1>
                        <p>
                            Find the existing HR Management areas and account registration
                            from one place.
                        </p>
                        <Link className="btn admin-primary-action" to="/register">
                            Open registration <span aria-hidden="true">→</span>
                        </Link>
                    </div>
                    <div className="admin-welcome-art" aria-hidden="true">
                        <div className="admin-art-ring admin-art-ring-one" />
                        <div className="admin-art-ring admin-art-ring-two" />
                        <div className="admin-art-core">
                            <span>✦</span>
                            <small>PEOPLE<br />OPERATIONS</small>
                        </div>
                        <span className="admin-art-node admin-art-node-one">HR</span>
                        <span className="admin-art-node admin-art-node-two">People</span>
                        <span className="admin-art-node admin-art-node-three">Workflows</span>
                    </div>
                </section>

                <div className="admin-dashboard-grid">
                    <aside className="admin-sidebar" aria-label="Dashboard navigation">
                        <span className="admin-sidebar-label">WORKSPACE</span>
                        <a className="admin-sidebar-link active" href="#overview" aria-current="page">
                            <span aria-hidden="true">⌂</span> Overview
                        </a>
                        <a className="admin-sidebar-link" href="#workspace-links">
                            <span aria-hidden="true">▦</span> Existing areas
                        </a>
                        <Link className="admin-sidebar-link" to="/about">
                            <span aria-hidden="true">ⓘ</span> About the platform
                        </Link>
                        <Link className="admin-sidebar-link" to="/contact">
                            <span aria-hidden="true">✉</span> Contact
                        </Link>
                        <div className="admin-sidebar-note">
                            <span className="admin-note-icon" aria-hidden="true">i</span>
                            <p>Dashboard insights and admin actions are not connected yet.</p>
                        </div>
                    </aside>

                    <div className="admin-dashboard-content">
                        <section className="admin-overview" id="overview" aria-labelledby="admin-overview-title">
                            <div className="admin-section-heading">
                                <div>
                                    <span className="admin-section-label">OVERVIEW</span>
                                    <h2 id="admin-overview-title">Your HR platform</h2>
                                </div>
                                <span className="admin-overview-badge">
                                    <i aria-hidden="true" /> Workspace
                                </span>
                            </div>
                            <div className="admin-capability-notice" role="note">
                                <span className="admin-notice-icon" aria-hidden="true">i</span>
                                <div>
                                    <h3>Admin data isn&apos;t available in the backend yet</h3>
                                    <p>
                                        This project currently has no admin-specific endpoints for
                                        employee totals, summaries, or recent activity. No statistics
                                        are shown here.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="admin-areas" id="workspace-links" aria-labelledby="admin-areas-title">
                            <div className="admin-section-heading">
                                <div>
                                    <span className="admin-section-label">AVAILABLE ROUTES</span>
                                    <h2 id="admin-areas-title">Explore existing areas</h2>
                                </div>
                            </div>
                            <div className="row g-3">
                                {workspaceLinks.map((item) => (
                                    <div className="col-12 col-md-6 col-xl-4" key={item.title}>
                                        <article className="admin-route-card h-100">
                                            <span className={`admin-route-icon ${item.tone}`} aria-hidden="true">
                                                {item.icon}
                                            </span>
                                            <span className="admin-route-eyebrow">{item.eyebrow}</span>
                                            <h3>{item.title}</h3>
                                            <p>{item.description}</p>
                                            <Link to={item.to} className="admin-route-action">
                                                {item.action} <span aria-hidden="true">→</span>
                                            </Link>
                                        </article>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="admin-activity-placeholder" aria-label="Activity availability">
                            <span className="admin-activity-mark" aria-hidden="true">◷</span>
                            <div>
                                <h2>Recent activity</h2>
                                <p>
                                    Activity data is not provided by the available backend routes,
                                    so there is no activity feed to display.
                                </p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default AdminHome;
