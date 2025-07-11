import { useContext, useEffect } from "react";
import useDocData from "../../hooks/useDocData";
import GlobalContext from "../../contexts/global";
import "./styles.css";
import HeroSection from "../../components/pageSections/HeroSection";
import VerticalListSection from "../../components/pageSections/VerticalListSection";
function StoriesPage() {
  const { setCurrentPage } = useContext(GlobalContext);

  useEffect(() => setCurrentPage("stories"), [setCurrentPage]);

  const mainPageComponentsData = useDocData("Main pages", "components ");

  return (
    <div className="w-full">
      <HeroSection
        image={mainPageComponentsData?.hero_sections?.stories?.image || ""}
      />
      <VerticalListSection
        title="Các câu chuyện ý nghĩa"
        listData={mainPageComponentsData?.story_overviews || {}}
      />
    </div>
  );
}

export default StoriesPage;
