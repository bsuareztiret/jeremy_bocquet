import Image from "next/image";
import styles from "./page.module.css";
import { SoundCard } from "./components/SoundCard.tsx";
import soundcards from "../../../public/soundtest.json";
import artSonore from "./artSonore.module.css";

export default function Music() {
  return (
    <div className="main__wrap">
      <h2>Art Sonore</h2>
      {/*<p>
          Why do we use it?
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
        </p>*/}
      <section className={`${artSonore.project_grid}`}>
        {soundcards.map((card: SoundCardProps, index: number) => (
          <SoundCard
            key={index}
            title={card.title}
            time={card.time}
            place={card.place}
            description={card.description}
            slug={card.slug}
            image={card.image}
          />
        ))}
      </section>
    </div>
  );
}
