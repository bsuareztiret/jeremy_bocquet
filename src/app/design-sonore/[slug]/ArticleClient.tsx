"use client";

import Link from "next/link";

type Props = {
  item: any;
};

export default function ArticleClient({ item }: Props) {
  return (
    <div className="main__wrap">
      <Link href={item.lien}>
        <article>
          <h1>{item.title}</h1>
          <p>
            <time>{item.year}</time> — {item.place}
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
