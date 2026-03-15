import { useEffect, useState } from "react";

type NavToggleProps = {
  onToggle: () => void;
}

export function NavToggle({ onToggle }: NavToggleProps) {
  return (
    <button
      className="nav-toggle"
      aria-label="Ouvrir le menu"
      onClick={onToggle}
    >
      <span />
      <span />
      <span />
    </button>
  );
}
