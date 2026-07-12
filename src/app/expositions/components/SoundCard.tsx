import Image from "next/image";
import Link from "next/link";
import artSonore from "./artSonore.module.css";
import { BLURDATAURL } from "../../components/var";

export type SoundCardProps = {
  title: string;
  time: string;
  place: string;
  description: string;
  slug: string;
  image: string;
  url: string;
};

export function SoundCard({
  title,
  time,
  place,
  description,
  slug,
  image,
  url,
}: SoundCardProps) {
  return (
    <article className={`${artSonore.project_card}`}>
      <Link
        href={`${url}${slug}`}
        className={`${artSonore.project_card__link_wrapper}`}
      >
        {/*<div className={`${artSonore.project_card__img}`}>*/}
        <Image
          src={image}
          alt={title}
          placeholder="blur"
          blurDataURL={BLURDATAURL}
          width={400}
          height={300}
          className={`${artSonore.project_card__img}`}
          sizes="(max-width: 768px) 100vw, 524px"
          quality={50}
        />
        {/*</div>*/}
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
