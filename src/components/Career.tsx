import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Sprintcode Labs</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Developed an EdTech web platform to showcase courses, instructors,
              and educational offerings. Designed a responsive UI, integrated
              backend logic, and ensured scalable architecture.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Machine Learning Intern</h4>
                <h5>Cognifyz Technologies</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Analyzed datasets and developed predictive models, translating
              complex data into actionable insights. Collaborated with team to
              create interactive visualizations for stakeholders.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Developer Freelancer</h4>
                <h5>Self-Employed</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Developing and maintaining responsive web applications with
              optimal performance. Utilizing modern web technologies to build
              dynamic interfaces and collaborating with clients for tailored
              solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
