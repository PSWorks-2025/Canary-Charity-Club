import { useContext, useEffect } from 'react';
import GlobalContext from '../../contexts/GlobalContext';
import HomeHeroSectionDisplay from '../../../Section-And-Core-Component/CanarySectionsModel/Home/HeroSection/HomeHeroSectionDisplay';
import StatHighlightDisplay from '../../../Section-And-Core-Component/CanarySectionsModel/Home/StatHighlight/StatHighlightDisplay';
import EventsHighlightDisplay from '../../../Section-And-Core-Component/CanarySectionsModel/Home/EventsHighlight/EventsHighlightDisplay';
import StoriesHighlightDisplay from '../../../Section-And-Core-Component/CanarySectionsModel/Home/StoriesHighlight/StoriesHighlightDisplay';

function HomePage() {
  const { setCurrentPage, heroSections, orgStats, eventOverviews, storyOverviews, sectionTitles, tertiaryBackgroundColor } = useContext(GlobalContext);

  useEffect(() => setCurrentPage('home'), [setCurrentPage]);

  return (
    <div className="w-full">
      <HomeHeroSectionDisplay image={heroSections?.home?.image || ''} />
      <StatHighlightDisplay orgStats={orgStats || {}} tertiaryBackgroundColor={tertiaryBackgroundColor} />
      <EventsHighlightDisplay title={sectionTitles.events || 'Sự kiện đang diễn ra'} listData={eventOverviews || {}} tertiaryBackgroundColor={tertiaryBackgroundColor} />
      <StoriesHighlightDisplay title={sectionTitles.stories || 'Những kỉ niệm của chúng tôi'} listData={storyOverviews || {}} />
    </div>
  );
}

export default HomePage;
