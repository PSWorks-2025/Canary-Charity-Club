import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { readData } from '../services/firebaseRead';
import { basePath } from '../constants/global';

const GlobalContext = createContext({});

export const GlobalContextProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState('home');

  // Global and main data
  const [globalData, setGlobalData] = useState({});
  const [mainData, setMainData] = useState({});
  const [loading, setLoading] = useState(true);

  // Theme colors
  const [primaryBackgroundColor, setPrimaryBackgroundColor] =
    useState('#ffffff');
  const [secondaryBackgroundColor, setSecondaryBackgroundColor] =
    useState('#4160df');
  const [tertiaryBackgroundColor, setTertiaryBackgroundColor] =
    useState('#4160df');

  // Footer-specific states
  const [logoUrl, setLogoUrl] = useState('');
  const [logoFile, setLogoFile] = useState(null);
  const [groupName, setGroupName] = useState('');
  const [groupDescription, setGroupDescription] = useState('');
  const [contactInfoData, setContactInfoData] = useState({
    hotline: null,
    email: null,
    address: null,
  });
  const [socialLinksData, setSocialLinksData] = useState({});

  // Image upload queue
  const [imageUploadQueue, setImageUploadQueue] = useState({});

  // Main data states for the main pages
  const [activityHistory, setActivityHistory] = useState([]);
  const [eventOverviews, setEventOverviews] = useState({});
  const [fundraising, setFundraising] = useState({});
  const [heroSections, setHeroSections] = useState({});
  const [highlights, setHighlights] = useState({});
  const [members, setMembers] = useState([]);
  const [orgStats, setOrgStats] = useState({});
  const [projectOverviews, setProjectOverviews] = useState({});
  const [statements, setStatements] = useState({});
  const [storyOverviews, setStoryOverviews] = useState({});

  useEffect(() => {
    console.log(projectOverviews)
  }, [projectOverviews])
  

  useEffect(() => {
    const handleGetData = async () => {
      try {
        const res = await readData();
        if (res?.global) {
          setGlobalData(res.global);
          setLogoUrl(res.global.logo || '');
          setPrimaryBackgroundColor(
            res.global.primaryBackgroundColor || '#ffffff'
          );
          setSecondaryBackgroundColor(
            res.global.secondaryBackgroundColor || '#ffffff'
          );
          setTertiaryBackgroundColor(
            res.global.tertiaryBackgroundColor || '#4160df'
          );
          setGroupName(res.global.group_name || '');
          setGroupDescription(res.global.description || '');
          setContactInfoData({
            hotline: res.global.hotline || null,
            email: res.global.email || null,
            address: res.global.address || null,
          });
          setSocialLinksData(res.global.social_media || {});
        }
        if (res?.main) {
          console.log(res.main)
          setMainData(res.main);
          setActivityHistory(res.main.activity_history || []);
          setEventOverviews(res.main.event_overviews || {});
          setFundraising(res.main.fundraising || {});
          setHeroSections(res.main.hero_sections || {});
          setHighlights(res.main.highlights || {});
          setMembers(res.main.members || []);
          setOrgStats(res.main.org_stats || {});
          setProjectOverviews(res.main.project_overviews || {});
          setStatements(res.main.statements || {});
          setStoryOverviews(res.main.story_overviews || {});
        }
      } catch (error) {
        console.error('Error in GlobalProvider useEffect:', error);
      } finally {
        setLoading(false);
      }
    };
    handleGetData();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        loading,
        globalData,
        setGlobalData,
        mainData,
        setMainData,
        primaryBackgroundColor,
        setPrimaryBackgroundColor,
        secondaryBackgroundColor,
        setSecondaryBackgroundColor,
        tertiaryBackgroundColor,
        setTertiaryBackgroundColor,
        logoUrl,
        setLogoUrl,
        logoFile,
        setLogoFile,
        groupName,
        setGroupName,
        groupDescription,
        setGroupDescription,
        contactInfoData,
        setContactInfoData,
        socialLinksData,
        setSocialLinksData,
        imageUploadQueue,
        setImageUploadQueue,
        activityHistory,
        setActivityHistory,
        eventOverviews,
        setEventOverviews,
        fundraising,
        setFundraising,
        heroSections,
        setHeroSections,
        highlights,
        setHighlights,
        members,
        setMembers,
        orgStats,
        setOrgStats,
        projectOverviews,
        setProjectOverviews,
        statements,
        setStatements,
        storyOverviews,
        setStoryOverviews,

        currentPage,
        setCurrentPage,
        basePath,
        // data,
        // setData,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

GlobalContextProvider.propTypes = {
  children: PropTypes.node,
};

export default GlobalContext;
