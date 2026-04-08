"use client";

import { useState } from "react";

interface Job {
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
}

interface JobFilterProps {
  departments: string[];
  jobs: Job[];
}

export function JobFilter({ departments, jobs }: JobFilterProps) {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? jobs : jobs.filter((j) => j.department === active);

  return (
    <div>
      {/* Pill tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {departments.map((dep) => (
          <button
            key={dep}
            onClick={() => setActive(dep)}
            className={`px-4 py-2 rounded-[9999px] text-[13px] font-medium transition-colors ${
              active === dep
                ? "bg-black text-white hover:bg-[#111111]"
                : "bg-[#f5f5f5] text-[#4e4e4e] hover:bg-[#e8e3de] hover:text-black shadow-[rgba(0,0,0,0.06)_0px_0px_0px_1px]"
            }`}
          >
            {dep}
          </button>
        ))}
      </div>

      {/* Job cards */}
      <div className="flex flex-col gap-3">
        {filtered.map((job) => (
          <div
            key={job.title}
            className="el-card bg-white px-7 py-5 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4"
          >
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-medium uppercase tracking-widest bg-[#f5f5f5] text-[#4e4e4e] px-2.5 py-1 rounded-[4px]">
                  {job.department}
                </span>
              </div>
              <h3 className="text-base font-medium text-black mb-1 tracking-tight">{job.title}</h3>
              <p className="text-[15px] text-[#4e4e4e] leading-relaxed max-w-xl tracking-[0.01em]">
                {job.description}
              </p>
            </div>
            <div className="shrink-0 flex flex-col items-start sm:items-end gap-1 text-xs text-[rgb(58, 179, 181)]">
              <span>{job.location}</span>
              <span>{job.type}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
