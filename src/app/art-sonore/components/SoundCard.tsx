import Image from "next/image";
import Link from "next/link";
import artSonore from "../artSonore.module.css";
import test from "../test.module.css";

export type SoundCardProps = {
  title: string;
  time: string;
  place: string;
  description: string;
  slug: string;
  image: string;
};

export function SoundCard({
  title,
  time,
  place,
  description,
  slug,
  image,
}: SoundCardProps) {
  return (
    <article className={`${artSonore.project_card}`}>
      <Link
        href={`/art-sonore/${slug}`}
        className={`${artSonore.project_card__link_wrapper}`}
      >
        <div className={`${test.image_block}`}>
          <Image
            src={image}
            alt={title}
            width={1000}
            height={300}
            className={`${artSonore.project_card__img}`}
          />
        </div>
        <header className={`${artSonore.project_card__header}`}>
          <h3 className={`${artSonore.project_card__title}`}>{title}</h3>
          <time className={`${artSonore.project_card__date}`}>{time}</time>
        </header>
        <span className={`${artSonore.project_card__place}`}>{place}</span>
        <hr />
        <p className={`${artSonore.project_card__description}`}>
          {description}
        </p>
      </Link>
    </article>
  );
}
