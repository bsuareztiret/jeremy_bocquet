"use client";

import { ROUTE } from "./var";
import React from "react";
import { NavToggle } from "./NavToggle";
import Link from "next/link";

export function NavBar() {
  const [toggle, setToogle] = React.useState<boolean>(false);

  function handleClick() {
    setToogle(!toggle);
  }

  return (
    <>
      <NavToggle onToggle={handleClick} />
      <nav className={`nav ${toggle === false ? "" : "is-open"}`}>
        <Link href="/" onClick={handleClick}>
          <h2>Accueil</h2>
        </Link>
        <Link href={ROUTE.EXPOSITIONS} onClick={handleClick}>
          <h2>Expositions</h2>
        </Link>
        <Link href={ROUTE.PROJECTS} onClick={handleClick}>
          <h2>Projets Sonores</h2>
        </Link>
        <Link href={ROUTE.MUSIC} onClick={handleClick}>
          <h2>Musique</h2>
        </Link>
        <Link href={ROUTE.BIO} onClick={handleClick}>
          <h2>Biographie</h2>
        </Link>
        <Link href={ROUTE.COMMANDES} onClick={handleClick}>
          <h2>Commandes</h2>
        </Link>
        <Link href={ROUTE.TELECHARGEMENTS} onClick={handleClick}>
          <h2>Téléchargments</h2>
        </Link>
      </nav>
    </>
  );
}
