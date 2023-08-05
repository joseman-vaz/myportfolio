import Tech from "./Tech";

const Bio = () => {
  return (
    <div className="pb-3 mb-3 ">
      <h1 className="text-2xl font-bold mb-6 text-gray-700">About me</h1>
      <p className="mb-6">
        I am a creative Web Developer. I enjoy building the back end and the
        front end of an website. I especialize in the MERN Stack to bring ideas
        to life. You can find me working with everything Javascript, HTML, CSS
        and frameworks like Tailwind and Bootstrap. Lately, I've been drawn to
        explore Framer Motion, React Spring and other frontend modern
        techonologies.
      </p>
      {/* <br /> */}
      <h3 className="text-lg font-semibold mb-2">Personal</h3>
      <p>
        From Cancun, Mexico but I am Barcelona based. I am a cook at heart
        turned to coding after I created my first static website back in 2020.
        In cooking as with coding everything has to make sense in order to work.
        And both are great creative outlets for me. I love to cooking for my
        friends. My specialty: tacos 🌮
      </p>
      <br />
      <div>
        <h1 className="text-2xl font-bold mb-6 text-gray-700 mt-3">
          Technologies
        </h1>
        <Tech />
      </div>
    </div>
  );
};

export default Bio;
