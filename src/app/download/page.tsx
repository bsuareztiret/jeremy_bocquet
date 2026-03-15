import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Download() {
  return (
    <div className="main__wrap">
      <h1>Download</h1>
      <a href="public/images/something.png" download>Télécharger images</a>
    </div>
  );
}
