"use client";

import { ContentBlock } from "../[slug]/page";
import { SoundCard } from "../../expositions/components/SoundCard";
import projetsFR from "../../../../public/projets-fr.json";
import artSonore from "../../expositions/components/artSonore.module.css";
import music from "../../musique/music.module.css";
import { useState } from "react";

type ProjectCard = {
  slug: string;
  title: string;
  time: string;
  place: string;
  description: string;
  image: string;
  tags: string[];
  content: ContentBlock[];
  hidden?: boolean;
};

type Props = {
  limit?: number;
  showFilters?: boolean;
  showTitle?: boolean;
};

export default function ProjectsSection({
  limit,
  showFilters,
  showTitle,
}: Props) {
  const data = projetsFR as ProjectCard[];

  const visibleCard = data.filter((card) => !card.hidden);
  const items = limit ? visibleCard.slice(0, limit) : visibleCard;

  const allTags = Array.from(new Set(items.flatMap((item) => item.tags)));
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const itemsTagged = activeTag
    ? items.filter((item) => item.tags.includes(activeTag))
    : items;
  const finalItems = limit ? visibleCard.slice(0, limit) : itemsTagged;

  return (
    <div className="main__wrap">
      {showTitle && <h1 className={artSonore.title}>Projet Sonores</h1>}
      {showFilters && (
        <div className={music.badges}>
          <span
            className={
              !activeTag ? `${music.badge} ${music.active}` : `${music.badge}`
            }
            onClick={() => setActiveTag(null)}
          >
            All
          </span>

          {allTags.map((tag, index) => (
            <span
              key={`${tag}${index}`}
              className={
                activeTag === tag
                  ? `${music.badge} ${music.active}`
                  : `${music.badge}`
              }
              onClick={() => setActiveTag(tag)}
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      <section className={`${artSonore.project_grid}`}>
        {finalItems.map((card: ProjectCard, index: number) => (
          <SoundCard
            key={index}
            title={card.title}
            time={card.time}
            place={card.place}
            description={card.description}
            slug={card.slug}
            image={card.image}
            url={"/projets_sonores/"}
          />
        ))}
      </section>
    </div>
  );
}
