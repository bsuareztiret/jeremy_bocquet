import SoundSection from "./DesignSection";
import designsection from "../../../../public/designsection.json";

export type SoundItem = {
  id: string;
  title: string;
  year: string;
  place: string;
  description: string;
  slug: string;
  article: string;
  lien: string;
};

export type SoundSectionData = {
  id: string;
  title: string;
  items: SoundItem[];
};

type Props = {
  limit?: number;
};

export default function DesignSonoreSection({ limit }: Props) {
  const items = limit ? designsection.slice(0, limit) : designsection;
  return (
    <div className="main__wrap">
      <div>
        {items.map((section: SoundSectionData) => (
          <SoundSection
            key={section.id}
            title={section.title}
            items={section.items}
          />
        ))}
      </div>
    </div>
  );
}
