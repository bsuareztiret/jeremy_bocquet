import articles from "../../../../public/soundtest.json";
import Image from "next/image";
import { notFound } from "next/navigation";
import test from "../test.module.css";

import ArticleSonoreClient from "./ArticleClient";

export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "highlight"; text: string }
  | { type: "image"; src: string; credit?: string }
  | { type: "embed"; url: string }
  | { type: "bandcamp"; url: string };

export type Article = {
  slug: string;
  title?: string;
  time?: string;
  place?: string;
  description?: string;
  content?: ContentBlock[];
};

import ArticleClient from "./ArticleClient";

export async function generateStaticParams() {
  return (articles as Article[]).map((article) => ({
    slug: article.slug,
  }));
}

export default function Page({ params }: { params: { slug: string } }) {
  const article = (articles as Article[]).find((a) => a.slug === params.slug);

  if (!article) {
    return (
      <div className="main__wrap">
        <h2>Projet introuvable</h2>
      </div>
    );
  }

  return <ArticleSonoreClient article={article} />;
}

// export default function ArticlePage() {
//   const slug = params?.slug;

//   const article = (articles as Article[]).find((a) => a.slug === params.slug);

//   if (!article) return notFound();

//   return (
//     <div className="main__wrap">
//       <article className={`${test.article}`}>
//         {/* Header */}
//         <div className={`${test.article_header}`}>
//           {article.title && <h1>{article.title}</h1>}

//           {(article.time || article.place) && (
//             <p className={`${test.meta}`}>
//               {article.time} {article.place && `— ${article.place}}`}
//             </p>
//           )}

//           {article.description && (
//             <p className={`${test.description}`}>{article.description}</p>
//           )}
//         </div>

//         {/* Contenu dynamique */}
//         <section className={`${test.article_content}`}>
//           {article.content?.map((block, index) => {
//             switch (block.type) {
//               case "paragraph":
//                 return (
//                   <p key={index} className={`${test.paragraph}`}>
//                     {block.text}
//                   </p>
//                 );

//               case "highlight":
//                 return (
//                   <blockquote key={index} className={`${test.highlight}`}>
//                     {block.text}
//                   </blockquote>
//                 );

//               case "image":
//                 return (
//                   <figure key={index} className={`${test.image_block}`}>
//                     <Image
//                       src={block.src}
//                       alt={article.title ?? "Article image"}
//                       width={900}
//                       height={900}
//                       className={`${test.image}`}
//                     />
//                     {block.credit && (
//                       <figcaption className={`${test.credit}`}>
//                         {block.credit}
//                       </figcaption>
//                     )}
//                   </figure>
//                 );

//               case "embed":
//                 return <MediaEmbed key={index} url={block.url} />;

//               case "bandcamp":
//                 return <BandcampEmbed key={index} url={block.url} />;

//               default:
//                 return null;
//             }
//           })}
//         </section>
//       </article>
//     </div>
//   );
// }
