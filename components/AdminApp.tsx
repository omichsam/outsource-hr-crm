"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { services as serviceCatalogue } from "@/lib/content/services";
import type {
  Client,
  Job,
  Lead,
  NewsItem,
  Placement,
  Service,
  Store,
  TeamMember,
  Worker,
} from "@/lib/types";

type Tab =
  | "dashboard"
  | "company"
  | "services"
  | "jobs"
  | "team"
  | "news"
  | "leads"
  | "applications"
  | "clients"
  | "workers"
  | "placements";

function nid(prefix: string) {
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
}

export function AdminApp({ initial }: { initial: Store }) {
  const router = useRouter();
  const [store, setStore] = useState(initial);
  const [tab, setTab] = useState<Tab>("dashboard");
  const [status, setStatus] = useState("");
  const [saving, setSaving] = useState(false);

  async function persist(next: Store) {
    setSaving(true);
    setStatus("");
    const res = await fetch("/api/store", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(next),
    });
    setSaving(false);
    if (!res.ok) {
      setStatus("Save failed.");
      return;
    }
    const saved = (await res.json()) as Store;
    setStore(saved);
    setStatus("Saved. Published vacancies appear on the careers page. Marketing copy is maintained in the site content.");
    router.refresh();
  }

  async function logout() {
    await fetch("/api/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  const publishedJobs = store.jobs.filter((j) => j.status === "published").length;
  const newLeads = store.leads.filter((l) => l.status === "new").length;
  const activePlacements = store.placements.filter((p) => p.status === "active").length;
  const liveTeam = store.team.filter((t) => t.published).length;

  const tabs: [Tab, string][] = [
    ["dashboard", "Dashboard"],
    ["company", "Company / site"],
    ["services", "Services"],
    ["jobs", "Jobs"],
    ["team", "Team (public)"],
    ["news", "News"],
    ["leads", "Leads"],
    ["applications", "CV submissions"],
    ["clients", "Clients"],
    ["workers", "Workers"],
    ["placements", "Placements"],
  ];

  return (
    <div className="admin-shell">
      <aside className="admin-nav">
        <div className="brand" style={{ marginBottom: 20 }}>
          CRM
          <small>Internal records</small>
        </div>
        {tabs.map(([id, label]) => (
          <button key={id} className={tab === id ? "active" : ""} onClick={() => setTab(id)}>
            {label}
          </button>
        ))}
        <a href="/" style={{ marginTop: 24 }}>
          View public site
        </a>
        <button onClick={logout}>Sign out</button>
      </aside>
      <div className="admin-main">
        <div className="toolbar">
          <h1 className="page-title" style={{ fontSize: "1.6rem" }}>
            {tabs.find((t) => t[0] === tab)?.[1]}
          </h1>
          <div className="muted">{saving ? "Saving…" : status || `Store updated ${store.updatedAt}`}</div>
        </div>

        {tab === "dashboard" && (
          <div className="grid" style={{ marginTop: 16 }}>
            <article className="card">
              <div className="meta">Published jobs on site</div>
              <h2>{publishedJobs}</h2>
            </article>
            <article className="card">
              <div className="meta">New leads</div>
              <h2>{newLeads}</h2>
            </article>
            <article className="card">
              <div className="meta">Active placements</div>
              <h2>{activePlacements}</h2>
            </article>
            <article className="card">
              <div className="meta">Leadership on About</div>
              <h2>{liveTeam}</h2>
            </article>
            <article className="card" style={{ gridColumn: "1 / -1" }}>
              <p>
                Edit <strong>Company / site</strong>, <strong>Services</strong>, <strong>Jobs</strong>,{" "}
                <strong>Team</strong>, or <strong>News</strong>, then save. The marketing site reads this
                same store—no second copy of the copy.
              </p>
              <p className="muted">Pay rates on jobs stay internal even when a job is published.</p>
            </article>
          </div>
        )}

        {tab === "company" && (
          <CompanyForm
            store={store}
            onSave={(company) => persist({ ...store, company })}
          />
        )}
        {tab === "services" && (
          <ListEditor
            title="Service"
            items={store.services}
            onSave={(services) => persist({ ...store, services })}
            blank={(): Service => ({ id: nid("svc"), title: "", summary: "", body: "" })}
            fields={[
              ["title", "Title"],
              ["summary", "Summary"],
              ["body", "Body", "textarea"],
            ]}
          />
        )}
        {tab === "jobs" && <JobsEditor store={store} onSave={persist} />}
        {tab === "team" && (
          <ListEditor
            title="Person"
            items={store.team}
            onSave={(team) => persist({ ...store, team })}
            blank={(): TeamMember => ({
              id: nid("tm"),
              name: "",
              title: "",
              bio: "",
              focus: "",
              published: false,
            })}
            fields={[
              ["name", "Name"],
              ["title", "Title"],
              ["focus", "Focus"],
              ["bio", "Bio", "textarea"],
              ["published", "Published on About page", "checkbox"],
            ]}
          />
        )}
        {tab === "news" && (
          <ListEditor
            title="News item"
            items={store.news}
            onSave={(news) => persist({ ...store, news })}
            blank={(): NewsItem => ({
              id: nid("news"),
              title: "",
              date: new Date().toISOString().slice(0, 10),
              body: "",
              published: false,
            })}
            fields={[
              ["title", "Title"],
              ["date", "Date"],
              ["body", "Body", "textarea"],
              ["published", "Published on home", "checkbox"],
            ]}
          />
        )}
        {tab === "leads" && <LeadsEditor store={store} onSave={persist} />}
        {tab === "applications" && <ApplicationsEditor store={store} />}
        {tab === "clients" && (
          <ListEditor
            title="Client"
            items={store.clients}
            onSave={(clients) => persist({ ...store, clients })}
            blank={(): Client => ({
              id: nid("cl"),
              name: "",
              sector: "",
              status: "active",
              contact: "",
              notes: "",
            })}
            fields={[
              ["name", "Name (internal — not on public site)"],
              ["sector", "Sector"],
              ["status", "Status"],
              ["contact", "Primary contact"],
              ["notes", "Notes", "textarea"],
            ]}
          />
        )}
        {tab === "workers" && (
          <ListEditor
            title="Worker"
            items={store.workers}
            onSave={(workers) => persist({ ...store, workers })}
            blank={(): Worker => ({
              id: nid("wk"),
              name: "",
              email: "",
              workerType: "delivery_employee",
              classification: "employee",
              status: "active",
              skills: "",
              notes: "",
            })}
            fields={[
              ["name", "Name"],
              ["email", "Email"],
              ["workerType", "Worker type"],
              ["classification", "Classification"],
              ["status", "Status"],
              ["skills", "Skills"],
              ["notes", "Notes", "textarea"],
            ]}
          />
        )}
        {tab === "placements" && <PlacementsEditor store={store} onSave={persist} />}
      </div>
    </div>
  );
}

function CompanyForm({
  store,
  onSave,
}: {
  store: Store;
  onSave: (company: Store["company"]) => void;
}) {
  const [c, setC] = useState(store.company);
  function set<K extends keyof Store["company"]>(key: K, value: Store["company"][K]) {
    setC({ ...c, [key]: value });
  }
  return (
    <form
      className="form"
      style={{ maxWidth: 720, marginTop: 16 }}
      onSubmit={(e) => {
        e.preventDefault();
        onSave(c);
      }}
    >
      <label>
        Display name
        <input value={c.displayName} onChange={(e) => set("displayName", e.target.value)} />
      </label>
      <label>
        Legal name
        <input value={c.legalName} onChange={(e) => set("legalName", e.target.value)} />
      </label>
      <label>
        Tagline (home hero)
        <textarea value={c.tagline} onChange={(e) => set("tagline", e.target.value)} />
      </label>
      <label>
        About
        <textarea value={c.about} onChange={(e) => set("about", e.target.value)} />
      </label>
      <label>
        Mission
        <textarea value={c.mission} onChange={(e) => set("mission", e.target.value)} />
      </label>
      <div className="two-col">
        <label>
          Email
          <input value={c.email} onChange={(e) => set("email", e.target.value)} />
        </label>
        <label>
          Phone
          <input value={c.phone} onChange={(e) => set("phone", e.target.value)} />
        </label>
      </div>
      <label>
        Address
        <input value={c.address} onChange={(e) => set("address", e.target.value)} />
      </label>
      <label>
        Hours
        <input value={c.hours} onChange={(e) => set("hours", e.target.value)} />
      </label>
      {c.stats.map((stat, i) => (
        <div className="two-col" key={i}>
          <label>
            Stat {i + 1} value
            <input
              value={stat.value}
              onChange={(e) => {
                const stats = c.stats.map((s, idx) => (idx === i ? { ...s, value: e.target.value } : s));
                set("stats", stats);
              }}
            />
          </label>
          <label>
            Stat {i + 1} label
            <input
              value={stat.label}
              onChange={(e) => {
                const stats = c.stats.map((s, idx) => (idx === i ? { ...s, label: e.target.value } : s));
                set("stats", stats);
              }}
            />
          </label>
        </div>
      ))}
      <button className="btn" type="submit">
        Save company profile
      </button>
    </form>
  );
}

type Field = [string, string, ("text" | "textarea" | "checkbox")?];

function ListEditor<T extends { id: string }>({
  title,
  items,
  blank,
  fields,
  onSave,
}: {
  title: string;
  items: T[];
  blank: () => T;
  fields: Field[];
  onSave: (items: T[]) => void;
}) {
  const [rows, setRows] = useState(items);
  const [openId, setOpenId] = useState<string | null>(null);

  function update(id: string, key: string, value: unknown) {
    setRows(rows.map((row) => (row.id === id ? { ...row, [key]: value } : row)));
  }

  return (
    <div style={{ marginTop: 16 }}>
      <div className="toolbar">
        <button
          className="btn"
          type="button"
          onClick={() => {
            const row = blank();
            setRows([row, ...rows]);
            setOpenId(row.id);
          }}
        >
          Add {title.toLowerCase()}
        </button>
        <button className="btn ghost" type="button" onClick={() => onSave(rows)}>
          Save list
        </button>
      </div>
      <div style={{ display: "grid", gap: 12, marginTop: 16 }}>
        {rows.map((row) => {
          const rec = row as Record<string, unknown>;
          const heading = String(rec.name || rec.title || row.id);
          return (
            <article className="card" key={row.id}>
              <div className="toolbar">
                <strong>{heading || `New ${title}`}</strong>
                <div className="row-actions">
                  <button className="btn ghost" type="button" onClick={() => setOpenId(openId === row.id ? null : row.id)}>
                    {openId === row.id ? "Close" : "Edit"}
                  </button>
                  <button
                    className="btn danger"
                    type="button"
                    onClick={() => {
                      if (confirm(`Delete this ${title.toLowerCase()}?`)) {
                        setRows(rows.filter((r) => r.id !== row.id));
                      }
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
              {openId === row.id && (
                <div className="form" style={{ marginTop: 12, maxWidth: "none" }}>
                  {fields.map(([key, label, kind]) => (
                    <label key={key}>
                      {label}
                      {kind === "textarea" ? (
                        <textarea
                          value={String(rec[key] ?? "")}
                          onChange={(e) => update(row.id, key, e.target.value)}
                        />
                      ) : kind === "checkbox" ? (
                        <input
                          type="checkbox"
                          checked={Boolean(rec[key])}
                          onChange={(e) => update(row.id, key, e.target.checked)}
                        />
                      ) : (
                        <input
                          value={String(rec[key] ?? "")}
                          onChange={(e) => update(row.id, key, e.target.value)}
                        />
                      )}
                    </label>
                  ))}
                </div>
              )}
            </article>
          );
        })}
      </div>
    </div>
  );
}

function JobsEditor({ store, onSave }: { store: Store; onSave: (s: Store) => void }) {
  const [jobs, setJobs] = useState(store.jobs);
  const [openId, setOpenId] = useState<string | null>(null);

  function update(id: string, patch: Partial<Job>) {
    setJobs(jobs.map((job) => (job.id === id ? { ...job, ...patch } : job)));
  }

  return (
    <div style={{ marginTop: 16 }}>
      <div className="toolbar">
        <button
          className="btn"
          type="button"
          onClick={() => {
            const job: Job = {
              id: nid("job"),
              title: "",
              location: "",
              type: "Full-time employee",
              summary: "",
              description: "",
              status: "draft",
              postedAt: new Date().toISOString().slice(0, 10),
              payRate: "",
              billRate: "",
              category: "",
              deadline: "",
            };
            setJobs([job, ...jobs]);
            setOpenId(job.id);
          }}
        >
          Add job
        </button>
        <button className="btn ghost" type="button" onClick={() => onSave({ ...store, jobs })}>
          Save jobs
        </button>
      </div>
      <p className="muted">Only status “published” appears on /careers. Pay and bill rates stay in the CRM.</p>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Status</th>
            <th>Location</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <tr key={job.id}>
              <td colSpan={4} style={{ padding: 0 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1.4fr 0.7fr 1fr auto", gap: 8, padding: 10, alignItems: "center" }}>
                  <div>{job.title || "(untitled)"}</div>
                  <div>
                    <span className={`pill ${job.status === "published" ? "" : "draft"}`}>{job.status}</span>
                  </div>
                  <div>{job.location}</div>
                  <div className="row-actions">
                    <button className="btn ghost" type="button" onClick={() => setOpenId(openId === job.id ? null : job.id)}>
                      Edit
                    </button>
                    <button
                      className="btn danger"
                      type="button"
                      onClick={() => {
                        if (confirm("Delete this job?")) setJobs(jobs.filter((j) => j.id !== job.id));
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
                {openId === job.id && (
                  <div style={{ padding: "0 10px 16px" }}>
                    <div className="form" style={{ maxWidth: "none" }}>
                      <label>
                        Title
                        <input value={job.title} onChange={(e) => update(job.id, { title: e.target.value })} />
                      </label>
                      <div className="two-col">
                        <label>
                          Location
                          <input value={job.location} onChange={(e) => update(job.id, { location: e.target.value })} />
                        </label>
                        <label>
                          Type
                          <input value={job.type} onChange={(e) => update(job.id, { type: e.target.value })} />
                        </label>
                      </div>
                      <label>
                        Status
                        <select
                          value={job.status}
                          onChange={(e) => update(job.id, { status: e.target.value as Job["status"] })}
                        >
                          <option value="draft">draft</option>
                          <option value="published">published</option>
                          <option value="filled">filled</option>
                          <option value="archived">archived</option>
                        </select>
                      </label>
                      <div className="two-col">
                        <label>
                          Category
                          <input value={job.category || ""} onChange={(e) => update(job.id, { category: e.target.value })} />
                        </label>
                        <label>
                          Application deadline (public)
                          <input value={job.deadline || ""} onChange={(e) => update(job.id, { deadline: e.target.value })} />
                        </label>
                      </div>
                      <label>
                        Summary
                        <textarea value={job.summary} onChange={(e) => update(job.id, { summary: e.target.value })} />
                      </label>
                      <label>
                        Description (public)
                        <textarea value={job.description} onChange={(e) => update(job.id, { description: e.target.value })} />
                      </label>
                      <div className="two-col">
                        <label>
                          Pay rate (internal)
                          <input value={job.payRate} onChange={(e) => update(job.id, { payRate: e.target.value })} />
                        </label>
                        <label>
                          Bill rate (internal)
                          <input value={job.billRate} onChange={(e) => update(job.id, { billRate: e.target.value })} />
                        </label>
                      </div>
                    </div>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ApplicationsEditor({ store }: { store: Store }) {
  const rows = store.applications || [];
  if (rows.length === 0) {
    return <p style={{ marginTop: 16 }}>No CV submissions yet. Files stay in a private folder and are not published.</p>;
  }
  return (
    <table style={{ marginTop: 16 }}>
      <thead>
        <tr>
          <th>When</th>
          <th>Candidate</th>
          <th>Profile</th>
          <th>CV</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.id}>
            <td className="meta">{row.createdAt.slice(0, 16).replace("T", " ")}</td>
            <td>
              {row.name}
              <div className="meta">
                {row.email} {row.phone}
              </div>
              <div className="meta">{row.location}</div>
            </td>
            <td>
              {row.specialisation}
              <div className="meta">
                {row.qualification} · {row.experience} · {row.employmentType}
              </div>
            </td>
            <td>
              <a href={`/api/applications/${row.id}`}>{row.fileName}</a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function LeadsEditor({ store, onSave }: { store: Store; onSave: (s: Store) => void }) {
  const jobTitle = useMemo(() => {
    const map = new Map(store.jobs.map((j) => [j.id, j.title]));
    return (id: string) => (id ? map.get(id) || id : "General");
  }, [store.jobs]);

  function setStatus(id: string, status: Lead["status"]) {
    onSave({
      ...store,
      leads: store.leads.map((lead) => (lead.id === id ? { ...lead, status } : lead)),
    });
  }

  if (store.leads.length === 0) {
    return <p style={{ marginTop: 16 }}>No leads yet. Submit the public contact form to create one.</p>;
  }

  return (
    <table style={{ marginTop: 16 }}>
      <thead>
        <tr>
          <th>When</th>
          <th>Person</th>
          <th>Role</th>
          <th>Message</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {store.leads.map((lead) => (
          <tr key={lead.id}>
            <td className="meta">{lead.createdAt.slice(0, 16).replace("T", " ")}</td>
            <td>
              {lead.name}
              <div className="meta">
                {lead.email} {lead.phone}
              </div>
              <div className="meta">
                {[lead.organisation, lead.enquiryType, serviceCatalogue.find((item) => item.slug === lead.service)?.title]
                  .filter(Boolean)
                  .join(" · ")}
              </div>
            </td>
            <td>{lead.enquiryType || jobTitle(lead.jobId)}</td>
            <td>{lead.message}</td>
            <td>
              <select value={lead.status} onChange={(e) => setStatus(lead.id, e.target.value as Lead["status"])}>
                <option value="new">new</option>
                <option value="in_progress">in progress</option>
                <option value="closed">closed</option>
              </select>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function PlacementsEditor({ store, onSave }: { store: Store; onSave: (s: Store) => void }) {
  const [rows, setRows] = useState(store.placements);
  function update(id: string, patch: Partial<Placement>) {
    setRows(rows.map((row) => (row.id === id ? { ...row, ...patch } : row)));
  }
  return (
    <div style={{ marginTop: 16 }}>
      <div className="toolbar">
        <button
          className="btn"
          type="button"
          onClick={() =>
            setRows([
              {
                id: nid("pl"),
                workerId: store.workers[0]?.id || "",
                clientId: store.clients[0]?.id || "",
                role: "",
                start: new Date().toISOString().slice(0, 10),
                end: "",
                status: "upcoming",
                billable: true,
              },
              ...rows,
            ])
          }
        >
          Add placement
        </button>
        <button className="btn ghost" type="button" onClick={() => onSave({ ...store, placements: rows })}>
          Save placements
        </button>
      </div>
      {rows.map((row) => (
        <article className="card" key={row.id} style={{ marginTop: 12 }}>
          <div className="form" style={{ maxWidth: "none" }}>
            <div className="two-col">
              <label>
                Worker
                <select value={row.workerId} onChange={(e) => update(row.id, { workerId: e.target.value })}>
                  <option value="">Select</option>
                  {store.workers.map((w) => (
                    <option key={w.id} value={w.id}>
                      {w.name}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Client
                <select value={row.clientId} onChange={(e) => update(row.id, { clientId: e.target.value })}>
                  <option value="">Select</option>
                  {store.clients.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <label>
              Role on assignment
              <input value={row.role} onChange={(e) => update(row.id, { role: e.target.value })} />
            </label>
            <div className="two-col">
              <label>
                Start
                <input value={row.start} onChange={(e) => update(row.id, { start: e.target.value })} />
              </label>
              <label>
                End
                <input value={row.end} onChange={(e) => update(row.id, { end: e.target.value })} />
              </label>
            </div>
            <label>
              Status
              <select
                value={row.status}
                onChange={(e) => update(row.id, { status: e.target.value as Placement["status"] })}
              >
                <option value="upcoming">upcoming</option>
                <option value="active">active</option>
                <option value="ended">ended</option>
                <option value="cancelled">cancelled</option>
              </select>
            </label>
            <label>
              Billable
              <input
                type="checkbox"
                checked={row.billable}
                onChange={(e) => update(row.id, { billable: e.target.checked })}
              />
            </label>
            <button
              className="btn danger"
              type="button"
              onClick={() => {
                if (confirm("Delete placement?")) setRows(rows.filter((r) => r.id !== row.id));
              }}
            >
              Delete
            </button>
          </div>
        </article>
      ))}
    </div>
  );
}
