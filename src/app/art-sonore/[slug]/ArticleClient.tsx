"use client";

import Link from "next/link";
import test from "../test.module.css";
import Image from "next/image";

import { Article } from "./page";
import { ContentBlock } from "./page";

import { MediaEmbed } from "../../components/MediaEmbed";
import { BandcampEmbed } from "../../components/BandcampEmbed";

type Props = {
  article: Article;
};

export default function ArticleSonoreClient({ article }: Props) {
  return (
    <div className="main__wrap">
      <article className={`${test.article}`}>
        {/* Header */}
        <div className={`${test.article_header}`}>
          {article.title && <h1>{article.title}</h1>}

          {(article.time || article.place) && (
            <p className={`${test.meta}`}>
              {article.time} {article.place && `— ${article.place}}`}
            </p>
          )}

          {article.description && (
            <p className={`${test.description}`}>{article.description}</p>
          )}
        </div>

        {/* Contenu dynamique */}
        <section className={`${test.article_content}`}>
          {article.content?.map((block, index) => {
            switch (block.type) {
              case "paragraph":
                return (
                  <p key={index} className={`${test.paragraph}`}>
                    {block.text}
                  </p>
                );

              case "highlight":
                return (
                  <blockquote key={index} className={`${test.highlight}`}>
                    {block.text}
                  </blockquote>
                );

              case "image":
                return (
                  <figure key={index} className={`${test.image_block}`}>
                    <Image
                      src={block.src}
                      alt={article.title ?? "Article image"}
                      width={900}
                      height={900}
                      className={`${test.image}`}
                    />
                    {block.credit && (
                      <figcaption className={`${test.credit}`}>
                        {block.credit}
                      </figcaption>
                    )}
                  </figure>
                );

              case "embed":
                return <MediaEmbed key={index} url={block.url} />;

              case "bandcamp":
                return <BandcampEmbed key={index} url={block.url} />;

              default:
                return null;
            }
          })}
        </section>
      </article>
    </div>
  );
}
