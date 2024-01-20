import "./intro.scss";
import { init } from "ityped";
import { useEffect } from "react";

export default function Intro() {
  useEffect(() => {
    const myElement = document.querySelector("#mohanadBio");
    init(myElement, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Frontend", "Backend", "Fullstack"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/Group 29.png" alt="Mohanad personal" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Mohanad Hassan</h1>
          <h3>
            <span id="mohanadBio"></span> Developer
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
