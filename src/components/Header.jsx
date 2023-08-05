import { useEffect } from "react";
import Typed from "typed.js";

const Header = () => {
  useEffect(() => {
    const typedText = new Typed("#typed-text", {
      strings: ["Fullstack web applications", "Beautiful frontend pages"],
      typeSpeed: 100,
      loop: true,
    });
    return () => {
      typedText.destroy();
    };
  }, []);
  return (
    <>
      <header
        id="header"
        className="sticky top-0 left-0 h-screen bg-gradient-to-r from-black to-gray-900 bg-noise bg-opacity-50 p-4"
        style={{ display: "flex", alignItems: "center" }}
      >
        <div className="inner flex flex-col items-center p-10 w-full">
          <div className="w-full flex justify-end">
            <a
              href="#"
              className="image avatar rounded-full overflow-hidden mb-4 sm:mb-8 custom:mt-4"
            >
              <img
                src="/myportfolio/assets/me_small_size.png"
                alt="me_small"
                className="w-32 h-32 sm:w-24 sm:h-24 md:w-32 md:h-32"
              />
            </a>
          </div>
          <div className="w-full flex flex-col justify-center">
            <h1 className="text-white text-2xl sm:text-3xl text-right leading-9">
              <strong>Hello! I am a Fullstack Web Developer</strong>
              <br />
            </h1>
            <p className="text-white text-sm sm:text-base text-right pt-3">
              My name is Jose Vazquez. I create <br />
              <span id="typed-text" className="typing-text">
                Fullstack web applications
              </span>
              .
            </p>
          </div>
          <footer id="footer" className="w-full sm:pb-4 md:pb-2 custom:pb-2">
            <div className="inner mt-20 flex justify-end ">
              <ul className="icons flex justify-end space-x-4 custom:space-x-2">
                <li>
                  <a
                    href="https://www.linkedin.com/in/jose-mvazquez/"
                    className="icon fa fa-linkedin fa-2x"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://github.com/joseman-vaz"
                    className="icon fa fa-github fa-2x"
                  ></a>
                </li>
                <li>
                  <a
                    href="mailto:vazquez.lopez.josem@gmail.com"
                    className="icon fa fa-envelope fa-2x"
                  ></a>
                </li>
              </ul>
            </div>
          </footer>
        </div>
      </header>
    </>
  );
};

export default Header;
