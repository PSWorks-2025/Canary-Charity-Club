import { useContext, useEffect } from "react";
import GlobalContext from "../../contexts/global";
import useDocData from "../../hooks/useDocData";
import DonateOverview from "../../components/DonateOverview/DonateOverview";
// import ProjectOverview from "../../components/projectOverview/ProjectOverview";
// import EventsOverview from "../../components/EventsOverview/EventsOverview";
import "./styles.css";
import ProjectLayoutSection from "../../components/pageSections/ProjectLayoutSection";
import HeroSection from "../../components/pageSections/HeroSection";
import ScrollListSection from "../../components/pageSections/ScrollListSection";
import VerticalListSection from "../../components/pageSections/VerticalListSection";

function EventsPage() {
  const { setCurrentPage } = useContext(GlobalContext);

  useEffect(() => setCurrentPage("events"), [setCurrentPage]);

  const mainPageComponentsData = useDocData("Main pages", "components ");

  return (
    <div className="w-full">
      <HeroSection
        image={mainPageComponentsData?.hero_sections?.events?.image || ""}
      />
      <VerticalListSection
        title="Tổng quan dự án"
        listData={mainPageComponentsData?.project_overviews || {}}
      />
      <DonateOverview />
      <ProjectLayoutSection
        listData={mainPageComponentsData?.project_overviews || {}}
      />
      <ScrollListSection
        title="Các sự kiện sắp diễn ra"
        listData={mainPageComponentsData?.event_overviews || {}}
      />
    </div>
  );
}

export default EventsPage;
