import { useContext, useEffect } from 'react';
import GlobalContext from '../../contexts/GlobalContext';
import AboutHeroSectionDisplay from '../../../Section-And-Core-Component/CanarySectionsModel/AboutCanary/HeroSection/AboutHeroSectionDisplay';
import MissionDisplay from '../../../Section-And-Core-Component/CanarySectionsModel/AboutCanary/Mission/MissionDisplay';
import VisionDisplay from '../../../Section-And-Core-Component/CanarySectionsModel/AboutCanary/Vision/VisionDisplay';
import StoriesHighlightDisplay from '../../../Section-And-Core-Component/CanarySectionsModel/AboutCanary/StoriesHighlight/StoriesHighlightDisplay';
import MemberListDisplay from '../../../Section-And-Core-Component/CanarySectionsModel/AboutCanary/Member/MemberListDisplay';
import TimelineDisplay from '../../../Section-And-Core-Component/CanarySectionsModel/AboutCanary/Timeline/TimelineDisplay';
import ProjectHighlightDisplay from '../../../Section-And-Core-Component/CanarySectionsModel/AboutCanary/ProjectsHighlight/ProjectsHighlightDisplay';

function Aboutpage() {
  const { setCurrentPage, heroSections, statements, storyOverviews, members, activityHistory, projectOverviews, sectionTitles } = useContext(GlobalContext);

  useEffect(() => setCurrentPage('about'), [setCurrentPage]);

  return (
    <div className="w-full">
      <AboutHeroSectionDisplay image={heroSections?.about?.coverImage || ''} title={heroSections?.about?.title} description={heroSections?.about?.description} />
      <MissionDisplay missionTitle={statements?.mission?.title || ''} missionImage={statements?.mission?.imageUrl || ''} missionDescription={statements?.mission?.description} />
      <VisionDisplay visionTitle={statements?.vision?.title || ''} visionImage={statements?.vision?.imageUrl || ''} visionDescription={statements?.vision?.description} />
      <StoriesHighlightDisplay title={sectionTitles.stories || 'Những kỉ niệm của chúng tôi'} listData={storyOverviews || {}} />
      <MemberListDisplay title={sectionTitles.members || 'Thành viên'} listData={members || []} />
      <TimelineDisplay title={sectionTitles.activity_history || 'Lịch sử hoạt động'} listData={activityHistory || []} />
      <ProjectHighlightDisplay title={sectionTitles.projects || 'Dự án & hoạt động nổi bật đã thực hiện'} listData={projectOverviews || {}} />
    </div>
  );
}

export default Aboutpage;
