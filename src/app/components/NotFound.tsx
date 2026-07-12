import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h1 className={styles.code}>404</h1>

        <p className={styles.text}>
          Cette page semble s’être perdue, quelque part...
        </p>

        <Link href="/" className={styles.link}>
          Retour à l’accueil
        </Link>
      </div>
    </div>
  );
}
