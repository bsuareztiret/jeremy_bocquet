import Link from "next/link";
import designSonore from "../designSonore.module.css";

type JobCardProps = {
  item: SoundItem;
};

export default function JobCard({ item }: JobCardProps) {
  // const params = useParams();
  // const slug = params?.slug;

  //   const project = designsection
  //     .flatMap((section: JobCardData) => section.items)
  //     .find((item: SoundItem) => item.slug === slug);

  return (
    <div>
      <Link href={item.lien} target="_blank">
        <article className={`${designSonore.job_card_article}`}>
          <h1>{item.title}</h1>
          <p>
            <time>{item.year && item.year}</time>
            {item.year && item.place && ` – `}
            {item.place && item.place}
          </p>
          <p>
            <b>{item.description}</b>
          </p>
          <br />
          <p>{item.article}</p>
        </article>
      </Link>
    </div>
  );
}
