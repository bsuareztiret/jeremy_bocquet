import Image from "next/image";
import Link from "next/link";
import music from "../music.module.css";
import { BLURDATAURL } from "../../components/var";

export type MusicCardProps = {
  title: string;
  description: string;
  link: string;
  image: string;
};

export function MusicCard({ title, link, image }: MusicCardProps) {
  return (
    <Link
      href={`${link}`}
      className={`${music.music_item} ${music.music_card__link_wraper}`}
      target="_blank"
    >
      <div className={`${music.music_item}`}>
        <Image
          src={image}
          alt={title}
          placeholder="blur"
          blurDataURL={BLURDATAURL}
          width={400}
          height={400}
          sizes="(max-width: 768px) 100vw, 524px"
          quality={50}
        />
      </div>
      <div className={`${music.overlay}`}>
        <h3>{title}</h3>
      </div>
    </Link>
  );
}
