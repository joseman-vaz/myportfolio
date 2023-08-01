import Header from "../components/Header";
import ProjectSection from "../components/ProjectSection";

const Home = () => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-3 h-screen">
      <div className="col-span-1">
        <Header />
      </div>
      <div className="col-span-2">
        <ProjectSection />
      </div>
    </div>
  );
};
export default Home;
