import { useContext, useEffect } from "react";
import GlobalContext from "../contexts/global";
import useDocData from "../hooks/useDocData";
import HeroSection from "../components/pageSections/HeroSection";
import VerticalListSection from "../components/pageSections/VerticalListSection";
import ScrollListSection from "../components/pageSections/ScrollListSection";
import StatsInfoSection from "../components/pageSections/StatsInfoSection";

function HomePage() {
  const { setCurrentPage } = useContext(GlobalContext);

  useEffect(() => setCurrentPage("home"), [setCurrentPage]);

  const mainPageComponentsData = useDocData("Main pages", "components");

  return (
    <div className="w-full">
      <HeroSection
        image={mainPageComponentsData?.hero_sections?.home?.image || ""}
      />
      <StatsInfoSection
        statsData={mainPageComponentsData?.org_stats || {}}
      />
      <VerticalListSection
        title="Các sự kiện đã và đang diễn ra"
        listData={mainPageComponentsData?.event_overviews || {}}
      />
      <ScrollListSection
        title="Các câu chuyện ý nghĩa"
        listData={mainPageComponentsData?.story_overviews || {}}
      />
    </div>
  );
}

export default HomePage;
