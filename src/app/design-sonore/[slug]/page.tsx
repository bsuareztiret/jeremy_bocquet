"use client";

import Image from "next/image";
import designsection from "../../../../public/designsection.json";
import type { SoundItem } from "../page.tsx";
import type { SoundSectionData } from "../page.tsx";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function ProjectPage() {

  const params = useParams();
  const slug = params?.slug;

    const project = designsection
      .flatMap((section: SoundSectionData) => section.items)
      .find((item: SoundItem) => item.slug === slug);

  if (!project) {
    return (
    <div className="main__wrap">
      <h2>Projet introuvable</h2>
    </div>

    )
    ;
  }

  return (
    <div className="main__wrap">
      <Link href={project.lien}>
        <article>
          <h1>{project.title}</h1>
          <p>
            <time>{project.year}</time> — {project.place}
          </p>
          <p><b>{project.description}</b></p>
        <br/>
          <p>{project.article}</p>
        </article>
      </Link>
    </div>
  );
}
