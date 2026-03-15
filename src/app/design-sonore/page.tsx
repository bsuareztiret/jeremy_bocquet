import SoundSection from "./components/DesignSection";
import JobCard from "./components/JobCard";
import designsection from "../../../public/designsection.json";
import designSonore from "./designSonore.module.css";

export type SoundItem = {
  id: string;
  title: string;
  year?: string;
  place?: string;
  authorDirector?: string;
  description?: string;
  slug: string;
  article: string;
  lien: string;
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
