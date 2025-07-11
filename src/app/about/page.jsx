import { useContext, useEffect } from "react";
import GlobalContext from "../../contexts/global";
import useDocData from "../../hooks/useDocData";
import HeroSection from "../../components/pageSections/HeroSection";
import ProjectLayoutSection from "../../components/pageSections/ProjectLayoutSection";
import ScrollListSection from "../../components/pageSections/ScrollListSection";
import StatementsSection from "../../components/pageSections/StatementsSection";
import MemberListSection from "../../components/pageSections/MemberListSection";
import ActivityHistorySection from "../../components/pageSections/ActivityHistorySection";

function Aboutpage() {
  const { setCurrentPage } = useContext(GlobalContext);

  useEffect(() => setCurrentPage("about"), [setCurrentPage]);

  const mainPageComponentsData = useDocData("Main pages", "components ");

  return (
    <div className="w-full">
      <HeroSection
        image={mainPageComponentsData?.hero_sections?.about?.image || ""}
      />
      <StatementsSection
        visionText={mainPageComponentsData?.statements?.vision?.text || ""}
        missionText={mainPageComponentsData?.statements?.mission?.text || ""}
        visionImage={mainPageComponentsData?.statements?.vision?.image || ""}
        missionImage={mainPageComponentsData?.statements?.mission?.image || ""}
      />
      <ScrollListSection
        title="Các câu chuyện ý nghĩa"
        listData={mainPageComponentsData?.story_overviews || {}}
      />
      <MemberListSection listData={mainPageComponentsData?.members || []} />
      <ActivityHistorySection
        listData={mainPageComponentsData?.activity_history || []}
      />
      <ProjectLayoutSection
        listData={mainPageComponentsData?.project_overviews || {}}
      />
    </div>
  );
}

export default Aboutpage;
