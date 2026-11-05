"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    setPending(true);
    setError("");
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    setPending(false);
    if (!res.ok) {
      setError("That password is not right.");
      return;
    }
    router.push("/admin");
    router.refresh();
  }

  return (
    <div className="login-card">
      <div className="kicker">Avenyra administration</div>
      <h1 className="page-title">Editor sign-in</h1>
      <p className="muted">Internal access only. Demo password: northbridge</p>
      <form className="form" onSubmit={onSubmit}>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            required
          />
        </label>
        {error && <p className="error">{error}</p>}
        <button className="btn" disabled={pending} type="submit">
          {pending ? "Checking…" : "Enter CRM"}
        </button>
      </form>
    </div>
  );
}
