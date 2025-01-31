import React from "react";
import DonateOverview from "../../components/DonateOverview/DonateOverview";
import ProjectOverview from "../../components/projectOverview/ProjectOverview";
import ProjectLayout from "../../components/ProjectLayout/ProjectLayout";
import EventsOverview from "../../components/EventsOverview/EventsOverview";
import "./styles.css";
function Events() {
  return (
    <>
      <div className="hero_section">
        <h1>Tên sự kiện</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Mi eget scelerisque interdum
          cursus leo nibh sit. Diam tellus ornare tortor cursus vestibulum
          facilisis ac. Turpis sed magnis placerat semper mauris in diam. Eget
          aliquet gravida ac nisl vitae quis.
        </p>
      </div>

      <div className="projects">
        <ProjectOverview />
        <DonateOverview />
        <ProjectLayout />
        <EventsOverview />
      </div>
    </>
  );
}

export default Events;
