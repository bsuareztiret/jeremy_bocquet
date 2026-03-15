import musiccards from "../../../public/musiccards.json";
import { MusicCard } from "./components/MusicCard.tsx"
import music from "./music.module.css"

export default function Music() {
  return (
    <div className="main__wrap">
      <h2>Music</h2>
      <section className={`${music.music_grid}`}>
        {musiccards.map((music: MusicCardProps, index: number) => (
          <MusicCard
            key={index}
            title={music.title}
            description={music.description}
            link={music.link}
            image={music.image}
          />
        ))}
      </section>
    </div>
  );
}
