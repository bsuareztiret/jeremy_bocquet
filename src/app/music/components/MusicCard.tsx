import Image from "next/image";
import Link from "next/link";
import music from "../music.module.css";

export type MusicCardProps = {
  title: string;
  description: string;
  link: string;
  image: string;
};

export function MusicCard({ title, description, link, image }: MusicCardProps) {
  return (
    <Link
      href={`${link}`}
      className={`${music.music_item} ${music.music_card__link_wraper}`}
      target="_blank"
    >
      <Image
        src={image}
        alt={title}
        width={400}
        height={400}
        className={`${music.music_item}`}
      />
    </Link>
  );
}
