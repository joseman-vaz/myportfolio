import { useEffect } from "react";
import { Application } from "@splinetool/runtime";

const SplineComponent = () => {
  useEffect(() => {
    const canvas = document.getElementById("canvas3d");
    const app = new Application(canvas);
    app.load("https://prod.spline.design/Wkb4iz-QEHLPu0Zy/scene.splinecode");

    return () => {};
  }, []);

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-lg px-10">
      <h1 className="text-2xl font-bold mb-3 text-gray-700">
        Experimenting with Spline and Canvas-Sketch
      </h1>
      <p className="text-base text-slate-500">
        Just recently I started to explore the Spline tool that allows you
        create 3-D elements in a very intuitive way. This is my third project.
        You can press the keys on your keyboard and you will see how the keys
        are pressed on the 3-D Keyboard. More projects soon...
      </p>
      <div className="aspect-w-16 aspect-h-9 mt-4">
        <canvas id="canvas3d" className="rounded-lg shadow-md"></canvas>
      </div>
    </div>
  );
};

export default SplineComponent;
