import Header from "../components/Header";
import ProjectSection from "../components/ProjectSection";

const Home = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 h-screen">
      <div className="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1">
        <Header />
      </div>
      <div className="col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-2 xl:col-span-2">
        <ProjectSection />
      </div>
    </div>
  );
};
export default Home;
