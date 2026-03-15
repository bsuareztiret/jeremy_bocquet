import Image from "next/image";
import designsection from "../../../../public/designsection.json";
import type { SoundItem } from "../page";
import type { SoundSectionData } from "../page";

import ArticleClient from "./ArticleClient";

export async function generateStaticParams() {
  const data = designsection;
  return data.flatMap((section) =>
    section.items.map((item) => ({
      slug: item.slug,
    })),
  );
}

export default function Page({ params }: { params: { slug: string } }) {
  const item = designsection
    .flatMap((section: SoundSectionData) => section.items)
    .find((item: SoundItem) => item.slug === params.slug);

  if (!item) {
    return (
      <div className="main__wrap">
        <h2>Projet introuvable</h2>
      </div>
    );
  }

  return <ArticleClient item={item} />;
}

// export default function ProjectPage() {
//   const params = useParams();
//   const slug = params?.slug;

//   const project = designsection
//     .flatMap((section: SoundSectionData) => section.items)
//     .find((item: SoundItem) => item.slug === slug);

//   if (!project) {
//     return (
//       <div className="main__wrap">
//         <h2>Projet introuvable</h2>
//       </div>
//     );
//   }

// return (
//   <div className="main__wrap">
//     <Link href={project.lien}>
//       <article>
//         <h1>{project.title}</h1>
//         <p>
//           <time>{project.year}</time> — {project.place}
//         </p>
//         <p>
//           <b>{project.description}</b>
//         </p>
//         <br />
//         <p>{project.article}</p>
//       </article>
//     </Link>
//   </div>
// );
// }
