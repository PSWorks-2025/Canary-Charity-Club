import React from "react";

function ProjectLayout() {
  const projects = [
    {
      id: 1,
      title: "Tên dự án 1",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/cc08/2b63/4f0dff8d2a3b838fd37a6e86f4fbdc21?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=oqIPyBmK053guA5U07T0OsRj4ZFkZY6Xl8M3lBPMJnnzbuBS6Iot-vmNWWgLOqgIsTs8EgOBtdynC53fhzeeN91VeXKASDLU-W5h0bba2l1dJEshB-wVQTwXsjERPz~CKrbh~kwWjbasVgUOIJkMnXFBITG34gVHwVzmxl84BiIJ70wMx6yxWPNaBoHr-JdvNQ3stFkI2M9rnX0-pChc7c5JeijFRjLntHWY0gCat9iPWZOfB5ZvJpiBALbAEebzuFqgEiv3v5TSRvOfJH6sY7V0M1Ay3xQJq8k3Ky-88zm98hCvSLUsYEufvrpK2Ap67c1~U7hqDxSP7bhCuDavWw__",
    },
    {
      id: 2,
      title: "Tên dự án 2",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/cc08/2b63/4f0dff8d2a3b838fd37a6e86f4fbdc21?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=oqIPyBmK053guA5U07T0OsRj4ZFkZY6Xl8M3lBPMJnnzbuBS6Iot-vmNWWgLOqgIsTs8EgOBtdynC53fhzeeN91VeXKASDLU-W5h0bba2l1dJEshB-wVQTwXsjERPz~CKrbh~kwWjbasVgUOIJkMnXFBITG34gVHwVzmxl84BiIJ70wMx6yxWPNaBoHr-JdvNQ3stFkI2M9rnX0-pChc7c5JeijFRjLntHWY0gCat9iPWZOfB5ZvJpiBALbAEebzuFqgEiv3v5TSRvOfJH6sY7V0M1Ay3xQJq8k3Ky-88zm98hCvSLUsYEufvrpK2Ap67c1~U7hqDxSP7bhCuDavWw__",
    },
    {
      id: 3,
      title: "Tên dự án 3",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/9ddc/1faf/414a9d7e035bfc14f48fde16e41e8a28?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=V3NCUUrgmZPKb0a5KVjL3xM2q0wilxLNb7fGwJNDADXHJ7j2-s3nX89B9KRkniUeCbN0D48OdS8zLrNxek8Q0efd4~evKF9SLpcZeMXUGnXS0r2TPgmbmHGnlbIvhoAFUeqV3S3DPD6R67kAQ83pjqQfdcYzs5uj9iNWmV7W8z2FllnMN27n~fu~u~RVM9OaFZazwuVHv4czFijqC2pEFxkLqIqOQVgZXsvwMXD24gqPwz6Mhet8vwvz8i-Z4IB1jAVpwOanYpmym8X4MnJnLhRsHRRAqpwTmZWWDV2X5b2RFRWh5yYr9AqH2~ISUbcUZ6NUwhwJxrsdCrAkbBZ92w__",
    },
    {
      id: 4,
      title: "Tên dự án 4",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/9ddc/1faf/414a9d7e035bfc14f48fde16e41e8a28?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=V3NCUUrgmZPKb0a5KVjL3xM2q0wilxLNb7fGwJNDADXHJ7j2-s3nX89B9KRkniUeCbN0D48OdS8zLrNxek8Q0efd4~evKF9SLpcZeMXUGnXS0r2TPgmbmHGnlbIvhoAFUeqV3S3DPD6R67kAQ83pjqQfdcYzs5uj9iNWmV7W8z2FllnMN27n~fu~u~RVM9OaFZazwuVHv4czFijqC2pEFxkLqIqOQVgZXsvwMXD24gqPwz6Mhet8vwvz8i-Z4IB1jAVpwOanYpmym8X4MnJnLhRsHRRAqpwTmZWWDV2X5b2RFRWh5yYr9AqH2~ISUbcUZ6NUwhwJxrsdCrAkbBZ92w__",
    },
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
