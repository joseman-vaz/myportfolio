import technologies from "./data/technologies";

const Tech = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {technologies.map((tech, index) => (
        <div key={index} className="flex flex-col items-center">
          <img
            src={tech.imageUrl}
            alt={tech.name}
            className="max-h-16 max-w-16 mb-2"
          />
          <p>{tech.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Tech;
