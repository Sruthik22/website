import React from "react";

const ADVISORS = [
  { name: "Dr. Brian Goldstein, MD, MBA", role: "CMO", org: "United Healthcare Carolinas", file: "brian-goldstein.png" },
  { name: "Michael Meng, MBA", role: "CEO", org: "Stellar Health", file: "mike-meng.png" },
  { name: "Dr. Sunil Budhrani, MD, MBA", role: "CIO", org: "Capital Rx", file: "sunil-budhrani.png" },
  { name: "Patrick Fitzgerald, JD", role: "Fmr. VP of Innovation", org: "CHOP", file: "patrick-fitzgerald.png" },
  { name: "Dr. Tim Showalter, MD, MBA", role: "CMO", org: "ArteraAI", file: "tim-showalter.png" },
  { name: "Sean O'Neill, RPh", role: "CCO", org: "Bainbridge Health", file: "sean-oneill.png" },
  { name: "Jerelyn Moffet, NP", role: "Pediatric NP", org: "Duke", file: "jerelyn-moffet.png" },
  { name: "Deep Nana", role: "Implementation Manager", org: "Abridge", file: "deep-nana.png" },
];

function Card({ a }) {
  return (
    <li className="flex items-center gap-5 py-4">
      <img
        src={`/advisors/${a.file}`}
        alt={a.alt || a.name}
        className="h-32 w-32 rounded-full object-cover ring-2 ring-zinc-200"
        loading="lazy"
      />
      <div className="min-w-0">
        <div className="text-2xl font-semibold leading-tight tracking-tight text-zinc-900">{a.name}</div>
        <div className="mt-1 text-xl leading-snug text-zinc-600">
          <span className="italic">{a.role}</span>
          {a.org ? <span>{`, ${a.org}`}</span> : null}
        </div>
      </div>
    </li>
  );
}

export default function AdvisorsGrid({ advisors = ADVISORS }) {
  return (
    <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 list-none m-0 p-0">
      {advisors.map((a, i) => (
        <Card key={`${i}-${a.file}`} a={a} />
      ))}
    </ul>
  );
}
