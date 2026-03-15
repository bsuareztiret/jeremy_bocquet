"use client";

import { useState } from "react";
import Link from "next/link";
import designSonore from "../designSonore.module.css";
import type { SoundItem } from "../page";
import JobCard from "./JobCard";

type SoundSectionProps = {
  title: string;
  items: SoundItem[];
};

export default function SoundSection({ title, items }: SoundSectionProps) {
  const [open, setOpen] = useState(false);

  return (
    <section
      className={`${designSonore.sound_section} ${open ? designSonore.open : ""}`}
    >
      <button
        className={`${designSonore.sound_section__header}`}
        onClick={() => setOpen(!open)}
      >
        <h2>{title}</h2>
        <span className={`${designSonore.indicator}`}>{open ? "–" : "+"}</span>
      </button>

      <div className={`${designSonore.sound_section__content}`}>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <JobCard item={item} />
            </li>

            // <li key={index}>
            //   <Link href={`/design-sonore/${item.slug}`}>
            //     {item.title} – {item.year} – {item.place}
            //   </Link>
            // </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
