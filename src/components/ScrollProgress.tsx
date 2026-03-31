import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles/ScrollProgress.css";

gsap.registerPlugin(ScrollTrigger);

const ScrollProgress = () => {
  const circleRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    if (!circleRef.current) return;

    // The length of the circle stroke is ~125.6 (2 * PI * r, where r = 20)
    // We animate strokeDashoffset from 125.6 to 0 as user scrolls
    gsap.to(circleRef.current, {
      strokeDashoffset: 0,
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.1,
      },
    });
  }, []);

  return (
    <div className="scroll-progress-container">
      <svg viewBox="0 0 50 50">
        <circle className="scroll-progress-bg" cx="25" cy="25" r="20" />
        <circle
          className="scroll-progress-indicator"
          ref={circleRef}
          cx="25"
          cy="25"
          r="20"
        />
      </svg>
    </div>
  );
};

export default ScrollProgress;
