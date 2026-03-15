import SoundSection from "./components/DesignSection.tsx";
import JobCard from "./components/JobCard.tsx";
import designsection from "../../../public/designsection.json";
import designSonore from "./designSonore.module.css"

export type SoundItem = {
  id: string;
  title: string;
  year: string;
  place: string;
  description: string;
  slug: string;
};

export type SoundSectionData = {
  id: string;
  title: string;
  items: SoundItem[];
};

export default function DesignSonore() {
  return (
    <div className="main__wrap">
      <div>
        {designsection.map((section: SoundSectionData) => (
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
