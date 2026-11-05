"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { jobCategories } from "@/lib/content/company";

export type PublicVacancy = {
  id: string;
  title: string;
  location: string;
  type: string;
  category: string;
  summary: string;
  deadline: string;
};

export function JobBoard({ jobs }: { jobs: PublicVacancy[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [location, setLocation] = useState("All");
  const [type, setType] = useState("All");

  const locations = useMemo(
    () => ["All", ...Array.from(new Set(jobs.map((job) => job.location).filter(Boolean)))],
    [jobs],
  );
  const types = useMemo(() => ["All", ...Array.from(new Set(jobs.map((job) => job.type).filter(Boolean)))], [jobs]);

  const filtered = jobs.filter((job) => {
    const haystack = `${job.title} ${job.summary} ${job.location}`.toLowerCase();
    const matchesQuery = haystack.includes(query.trim().toLowerCase());
    const matchesCategory = category === "All" || job.category === category;
    const matchesLocation = location === "All" || job.location === location;
    const matchesType = type === "All" || job.type === type;
    return matchesQuery && matchesCategory && matchesLocation && matchesType;
  });

  return (
    <div>
      <form className="grid gap-4 md:grid-cols-4" role="search" onSubmit={(event) => event.preventDefault()}>
        <label className="text-sm font-semibold text-navy md:col-span-4">
          Search opportunities
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="mt-1.5 min-h-12 w-full border border-line bg-white px-3 font-normal text-ink"
            placeholder="Search by title or keyword"
          />
        </label>
        <Select label="Category" value={category} onChange={setCategory} options={["All", ...jobCategories]} />
        <Select label="Location" value={location} onChange={setLocation} options={locations} />
        <Select label="Employment type" value={type} onChange={setType} options={types} />
      </form>

      {jobs.length === 0 ? (
        <div className="mt-8 border border-line bg-mist px-6 py-12 text-center">
          <h3 className="font-heading text-2xl font-semibold text-navy">No active vacancies</h3>
          <p className="mx-auto mt-3 max-w-xl leading-7 text-muted">
            There are no vacancies approved for publication at the moment. You are welcome to submit your CV. It will be
            held privately and will not be displayed on this website.
          </p>
          <Link href="#submit-cv" className="mt-6 inline-flex min-h-12 items-center bg-teal px-6 font-semibold text-white">
            Submit your CV
          </Link>
        </div>
      ) : filtered.length === 0 ? (
        <p className="mt-8 border border-line bg-mist px-6 py-10 text-center text-muted" role="status">
          No vacancies match those filters. Clear a filter or submit your CV for future roles.
        </p>
      ) : (
        <ul className="mt-8 grid gap-5">
          {filtered.map((job) => (
            <li key={job.id} className="border border-line bg-white p-6">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-semibold tracking-wide text-teal">
                <span>{job.location}</span>
                <span className="text-gold" aria-hidden>
                  ·
                </span>
                <span>{job.type}</span>
                <span className="text-gold" aria-hidden>
                  ·
                </span>
                <span>{job.category}</span>
              </div>
              <h3 className="mt-3 font-heading text-2xl font-semibold text-navy">{job.title}</h3>
              <p className="mt-3 max-w-3xl leading-7 text-muted">{job.summary}</p>
              <p className="mt-3 text-sm text-ink">
                Application deadline: <span className="font-semibold">{job.deadline || "To be confirmed"}</span>
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link href={`/careers/${job.id}`} className="inline-flex min-h-11 items-center bg-navy px-5 text-sm font-semibold text-white">
                  View Details
                </Link>
                <Link
                  href={`/careers/${job.id}#apply`}
                  className="inline-flex min-h-11 items-center px-5 text-sm font-semibold text-teal ring-1 ring-teal"
                >
                  Apply
                </Link>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function Select({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: readonly string[];
}) {
  return (
    <label className="text-sm font-semibold text-navy">
      {label}
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-1.5 min-h-12 w-full border border-line bg-white px-3 font-normal text-ink"
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  );
}
