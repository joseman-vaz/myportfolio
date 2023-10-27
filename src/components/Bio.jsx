const Bio = () => {
  return (
    <section id="bio" className="bg-gray-100 py-10 text-slate-500">
      <div className="container mx-auto px-10">
        <div className="grid gap-6">
          <div className="mb-2">
            <h1 className="text-2xl font-bold mb-3 text-gray-700">About Me</h1>
            <p className="text-base">
              I am a Web Developer. I enjoy building the back end and the front
              end of a website. I specialize in the MERN Stack to bring ideas to
              life. You can find me working with everything Javascript, HTML,
              CSS, and frameworks like Tailwind and Bootstrap. Lately, you can
              find me exploring Framer Motion,React Spring and creative coding
              with canvas-sketch, Spline, and ThreeJS.
            </p>
          </div>
          <div className="mb-0">
            <p className="text-base">
              From Cancun, Mexico but I am Barcelona based. I am a cook at heart
              turned to coding after I created my first static website back in
              2020. In cooking as with coding everything has to make sense in
              order to work. And both are great creative outlets for me. I love
              cooking for my friends. My specialty: tacos 🌮
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bio;
