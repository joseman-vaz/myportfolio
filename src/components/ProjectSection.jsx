import Icons from "./Icons";
import { useState, useEffect } from "react";
import projects from "./data/projects";

const ProjectSection = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      window.removeEventListener("resize", handleResize, { passive: true });
    };
  }, []);

  return (
    <>
      <section
        id="projects"
        className="bg-gray-100 py-10 flex-1 text-slate-500"
      >
        <div className="container mx-auto px-10">
          <hr></hr>
          <h1 className="text-2xl font-bold mb-6 mt-6 text-gray-700">
            Recent Work
          </h1>
          <div className="grid gap-6">
            {projects.map((project, index) => (
              <div key={index}>
                <h2 className="text-left text-xl mb-2 font-semibold">
                  {project.title}
                </h2>
                <img
                  src={project.imageUrl}
                  alt={`Project ${index + 1}`}
                  className="bg-contain mb-4 rounded-lg shadow-lg "
                />

                <p className="text-left">{project.description}</p>
                <br />
                <p className="font-semibold">
                  Technologies: {project.technologies}
                </p>
                <p className="bold">
                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Go to app
                    </a>
                  ) : (
                    "Under Maintenance"
                  )}
                </p>
                <hr className="mt-4"></hr>
              </div>
            ))}
          </div>
        </div>
        <footer className="project_footer text-center mt-2">
          {windowWidth <= 640 && <Icons />}
          💜 Jose Vazquez @2023
        </footer>
      </section>
    </>
  );
};

export default ProjectSection;
