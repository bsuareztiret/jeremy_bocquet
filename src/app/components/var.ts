export const APP_BIO = "/bio";
export const APP_MUSIC = "/music";
export const APP_EXPOSITIONS = "/expositions";
export const APP_PROJECTS = "/projects";
export const APP_COMMANDES = "/commandes";
export const APP_DOWNLOAD = "/download";
export const APP_GALLERY = "/gallery";

export const ROUTE = {
  BIO: "/biographie",
  MUSIC: "/musique",
  EXPOSITIONS: "/expositions",
  PROJECTS: "/projets_sonores",
  COMMANDES: "/commandes",
  TELECHARGEMENTS: "/telechargements",
};

export const BLURDATAURL =
  "data:image/svg+xml;base64," +
  Buffer.from(
    `<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'>
      <filter id='b'>
        <feGaussianBlur stdDeviation='1.5'/>
      </filter>
      <rect width='100%' height='100%' filter='url(#b)' fill='#999'/>
    </svg>`,
  ).toString("base64");
