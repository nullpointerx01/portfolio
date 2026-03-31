import { PropsWithChildren, useEffect } from "react";
import { useTextScramble } from "./utils/useTextScramble";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  const { displayText: firstName, scramble: scrambleFirst } = useTextScramble("ALOK");
  const { displayText: lastName, scramble: scrambleLast } = useTextScramble("DWIVEDI");
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      scrambleFirst();
      scrambleLast();
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [scrambleFirst, scrambleLast]);

  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1 
              onMouseEnter={() => {
                scrambleFirst();
                scrambleLast();
              }}
              style={{ cursor: "crosshair" }}
            >
              {firstName}
              <br />
              <span>{lastName}</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>A Dynamic</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Developer</div>
              <div className="landing-h2-2">Engineer</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Engineer</div>
              <div className="landing-h2-info-1">Developer</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
