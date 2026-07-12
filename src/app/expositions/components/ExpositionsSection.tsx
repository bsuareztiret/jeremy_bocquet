"use client";

import { SoundCard } from "./SoundCard";
import expositionsFR from "../../../../public/expositions-fr.json";
import artSonore from "./artSonore.module.css";
import music from "../../musique/music.module.css";
import { useState } from "react";
import type { ContentBlock } from "../[slug]/page";

type ExpositionCard = {
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

export default function Expositions({ limit, showFilters, showTitle }: Props) {
  const data = expositionsFR as ExpositionCard[];
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
      {showTitle && <h1 className={artSonore.title}>Expositions</h1>}
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
        {finalItems.map((card: ExpositionCard, index: number) => (
          <SoundCard
            key={index}
            title={card.title}
            time={card.time}
            place={card.place}
            description={card.description}
            slug={card.slug}
            image={card.image}
            url={"/expositions/"}
          />
        ))}
      </section>
    </div>
  );
}
