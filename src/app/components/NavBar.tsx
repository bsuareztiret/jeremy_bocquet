"use client";

import { ROUTE } from "./var.ts";
import React from "react";
import { NavToggle } from "./NavToggle.tsx";

export function NavBar() {
  const [toggle, setToogle] = React.useState<boolean>(false);

  function handleClick() {
    setToogle(!toggle);
  }

  return (
    <>
      <NavToggle onToggle={handleClick} />
      <nav className={`nav ${toggle === false ? "" : "is-open"}`}>
        <a href="/">
          <h2>Accueil</h2>
        </a>
        <a href={ROUTE.ART_SONORE}>
          <h2>Art Sonore</h2>
        </a>
        <a href={ROUTE.BIO}>
          <h2>Bio</h2>
        </a>
        <a href={ROUTE.MUSIC}>
          <h2>Music</h2>
        </a>
        <a href={ROUTE.DESIGN_SONORE}>
          <h2>Commande</h2>
        </a>
        <a href={ROUTE.GALLERY}>
          <h2>Gallery</h2>
        </a>
        <a href={ROUTE.DOWNLOAD}>
          <h2>Téléchargements</h2>
        </a>
      </nav>
    </>
  );
}
