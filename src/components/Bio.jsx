const Bio = () => {
  return (
    <div className="pb-3 mb-3">
      <h1 className="text-2xl font-bold mb-6 text-gray-700">About me</h1>
      <p className="mb-6">
        I enjoy working closely with a team building Fullstack web applications.{" "}
      </p>
      {/* <br /> */}
      <h3 className="text-lg font-semibold mb-2">Technical</h3>
      <p>
        MongoDB, Express, React & NodeJS is what I use to bring to live my web
        apps. You can find me working with everything Javascript, HTML, CSS and
        frameworks like Tailwind and Bootstrap. Lately, I've been drawn to
        explore Framer Motion, React Spring and other frontend modern
        techonologies.
      </p>
      <br />
      <h3 className="text-lg font-semibold mb-2">Personal</h3>
      <p>
        From Cancun, Mexico but I am Barcelona based. I am a cook from heart
        turned to coding after I created my first static website back in 2020.
        In cooking as with coding everything has to make sense in order to work.
        And both are great creative outlets for me.
      </p>
    </div>
  );
};

export default Bio;
