import styles from "../page.module.css";

type Props = {
  showTitle?: boolean;
};

const files = [
  {
    title: "Portfolio",
    description: "Sélection de projets artistiques récents",
    file: "/Jeremy-bocquet_Portfolio_2026.pdf",
  },
  // {
  //   title: "CV",
  //   description: "Parcours, collaborations, formations",
  //   file: "/files/cv.pdf",
  // },
];

export default function Archive({ showTitle }: Props) {
  return (
    <div className="main__wrap">
      {showTitle && <h1 className={styles.title}>Archive</h1>}

      <div className={styles.list}>
        {files.map((item) => (
          <a key={item.title} href={item.file} download className={styles.card}>
            <div className={styles.cardContent}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
            <span className={styles.action}>Download →</span>
          </a>
        ))}
      </div>
    </div>
  );
}
