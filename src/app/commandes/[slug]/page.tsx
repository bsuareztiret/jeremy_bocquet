"use client";

import designsection from "../../../../public/designsection.json";
import type { SoundItem } from "../components/DesignSonoreSection";
import type { SoundSectionData } from "../components/DesignSonoreSection";
import { useParams } from "next/navigation";
import Link from "next/link";
import NotFound from "../../components/NotFound";

export default function ProjectPage() {
  const params = useParams();
  const slug = params?.slug;

  const project = designsection
    .flatMap((section: SoundSectionData) => section.items)
    .find((item: SoundItem) => item.slug === slug);

  if (!project) return NotFound();

  return (
    <div className="main__wrap">
      <Link href={project.lien}>
        <article>
          <h3>{project.title}</h3>
          <p>
            <time>{project.year}</time> — {project.place}
          </p>
          <p>
            <b>{project.description}</b>
          </p>
          <br />
          <p>{project.article}</p>
        </article>
      </Link>
    </div>
  );
}
