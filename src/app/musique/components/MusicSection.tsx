"use client";

import musiccards from "../../../../public/musiccards.json";
import { MusicCard } from "./MusicCard";
import music from "../music.module.css";
import { useState } from "react";
import { MusicCardProps } from "./MusicCard";

type Props = {
  limit?: number;
  showFilters?: boolean;
  showTitle?: boolean;
};

export default function MusicSection({ limit, showFilters, showTitle }: Props) {
  const allTags = Array.from(
    new Set(musiccards.flatMap((music) => music.tags)),
  );
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filteredMusic = activeTag
    ? musiccards.filter((music) => music.tags.includes(activeTag))
    : musiccards;
  const finalMusic = limit ? filteredMusic.slice(0, limit) : filteredMusic;
  return (
    <div className="main__wrap">
      <div>
        {showTitle && <h1 className={music.title}>Musique</h1>}
        {/* FILTERS */}
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
        <section className={`${music.music_grid}`}>
          {finalMusic.map((music: MusicCardProps, index: number) => (
            <MusicCard
              key={`${index}${music.title}`}
              title={music.title}
              description={music.description}
              link={music.link}
              image={music.image}
            />
          ))}
        </section>
      </div>
    </div>
  );
}
