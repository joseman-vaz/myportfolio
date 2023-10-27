import { useEffect } from "react";
import { Application } from "@splinetool/runtime";

const SplineComponent = () => {
  useEffect(() => {
    const canvas = document.getElementById("canvas3d");
    const app = new Application(canvas);
    app.load("https://prod.spline.design/pDtGT7IiQ3S45Sp2/scene.splinecode");

    // Cleanup function when the component is unmounted
    return () => {
      // Perform any cleanup here if necessary
      // For example, removing event listeners or cleaning up resources
    };
  }, []); // Empty dependency array ensures this effect runs once after the initial render

  return (
    <div>
      <canvas id="canvas3d" width={800} height={600}></canvas>
    </div>
  );
};

export default SplineComponent;
