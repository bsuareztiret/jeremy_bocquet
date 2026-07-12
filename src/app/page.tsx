import ExpositionsSection from "./expositions/components/ExpositionsSection";
import MusicSection from "./musique/components/MusicSection";
import Archive from "./telechargements/components/Archive";

export default function Home() {
  return (
    <div>
      <ExpositionsSection limit={3} showTitle={true} />
      <MusicSection limit={3} showTitle={true} />
      <Archive showTitle={true} />
      {/*<DesignSonoreSection limit={1} />*/}
    </div>
  );
}
