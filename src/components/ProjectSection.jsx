import Bio from "./Bio";

const projects = [
  {
    title: "Scroll/Ai",
    imageUrl: "/src/assets/scrollAi_proyect.png",
    description:
      "Scroll AI is an application that leverages the power of DALL·E, OpenAI's image generation model, to bring your text descriptions to life through images",
  },
  {
    title: "Devnout",
    imageUrl: "/src/assets/devnout_app.png",
    description:
      "The inspiration behind DevNout was my own journey as a junior developer, where I realized the importance of taking concise, structured notes to retain and review crucial concepts.",
  },
  {
    title: "Candy Crusher",
    imageUrl: "/src/assets/candy_crusher_game.png",
    description:
      "A clone of a popular game. This was my first Bootcamp project. Crated using plain Javascript to manipulate the DOM.",
  },
];

const ProjectSection = () => {
  return (
    <>
      <section
        id="projects"
        className="bg-gray-100 py-10 flex-1 text-slate-500"
      >
        <div className="container mx-auto px-10">
          <Bio />
          <hr></hr>
          <h1 className="text-2xl font-bold mb-6 mt-6 text-gray-700">
            Recent Work
          </h1>
          <div className="grid gap-6">
            {projects.map((project, index) => (
              <div key={index}>
                <h2 className="text-left text-xl mb-2">{project.title}</h2>
                <img
                  src={project.imageUrl}
                  alt={`Project ${index + 1}`}
                  className="bg-contain mb-4 rounded "
                />

                <p className="text-left">{project.description}</p>
                <hr className="mt-4"></hr>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectSection;
