import React from "react";
import canary1 from "/images/canary1.jpg"
import canary2 from "/images/canary2.jpg";
import canary3 from "/images/canary3.jpg";
import canary4 from "/images/canary4.jpg";
import canary5 from "/images/canary5.jpg";
import canary6 from "/images/canary6.jpg";
import canary7 from "/images/canary7.jpg";
import canary8 from "/images/canary8.jpg";
import canary9 from "/images/canary9.jpg";
import canary10 from "/images/canary10.jpg";
import canary11 from "/images/canary11.jpg";
import canary12 from "/images/canary12.jpg";
import canary13 from "/images/canary13.jpg";
import canary14 from "/images/canary14.jpg";
import canary15 from "/images/canary15.jpg";
import canary16 from "/images/canary16.jpg";
import canary17 from "/images/canary17.jpg";
import canary18 from "/images/canary18.jpg";
import canary19 from "/images/canary19.jpg";
function ProjectLayout() {
  const projects = [
    {
      id: 1,
      title: "Tên dự án 1",
      imageUrl: canary1
    },

    {
      id: 2,
      title: "Tên dự án 2",
      imageUrl:
        canary2 },
    {
      id: 3,
      title: "Tên dự án 3",
      imageUrl:
        canary3 },
    {
      id: 4,
      title: "Tên dự án 4",
      imageUrl:
        canary4 },
  ];

  return (
    <section className="flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">
        Dự án & hoạt động nổi bật đã thực hiện
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-3/5 max-w-6xl mb-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative bg-cover bg-center h-96 rounded-lg overflow-hidden shadow-md"
            style={{
              backgroundImage: `linear-gradient(to bottom, transparent 70%, rgba(0, 0, 0, 0.6)),url(${project.imageUrl})`,
            }}
          >
            {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
            <h3 className="absolute bottom-0 left-0 p-4 text-white font-semibold">
              {project.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectLayout;
