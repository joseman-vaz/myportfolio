import technologies from "./data/technologies";
import { motion } from "framer-motion";

const Tech = () => {
  return (
    <section id="tech" className="bg-gray-100 py-10 text-slate-500">
      <div className="container mx-auto px-10">
        <div className="grid gap-6">
          <h2 className="text-2xl font-bold mb-3 text-gray-700">
            Technologies
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="flex flex-col items-center">
                <motion.div
                  className="box"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <img
                    src={tech.imageUrl}
                    alt={tech.name}
                    className="max-h-16 max-w-16 mb-2"
                  />
                </motion.div>
                <p>{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tech;
