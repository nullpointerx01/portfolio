import "./styles/Education.css";
import { FaCertificate } from "react-icons/fa6";

const Education = () => {
  const courses = [
    "Operating Systems",
    "Data Structures",
    "Analysis Of Algorithms",
    "Artificial Intelligence",
    "Machine Learning",
    "Python",
    "Computer Networking",
    "Database Management System",
    "Data Science",
    "Natural Language Processing",
    "Object Oriented Design and Programming",
  ];

  const certifications = [
    {
      title: "Google Cloud Certified Professional Cloud Architect",
      issuer: "Google Cloud",
      description: "Expertise in compute, networking, storage, IAM, and security on Google Cloud.",
    },
    {
      title: "Microsoft Certified: Azure Developer Associate",
      issuer: "Microsoft",
      description: "Developed cloud applications using Azure App Services, Functions, and Containers.",
    },
    {
      title: "Postman API Fundamentals Student Expert",
      issuer: "Postman",
      description: "Designed and tested REST APIs using Postman collections and environments.",
    },
    {
      title: "Excel with Copilot: AI-Driven Data Analysis",
      issuer: "Microsoft",
      description: "Used Copilot to analyze datasets, identify trends, and generate insights.",
    },
    {
      title: "Deloitte Australia - Cyber Job Simulation",
      issuer: "Deloitte",
      description: "Completed a job simulation involving reading web activity logs and identifying suspicious activity.",
    },
    {
      title: "Deloitte Australia Technology Job Simulation",
      issuer: "Deloitte",
      description: "Completed a job simulation involving development and coding.",
    },
  ];

  return (
    <div className="education-section" id="education">
      <div className="education-container">
        <h2>
          Education <span>&</span>
          <br /> Certifications
        </h2>

        <div className="education-grid">
          <div className="education-card">
            <div className="education-card-header">
              <div>
                <h3>Bachelor of Technology</h3>
                <h4>Computer Science and Engineering</h4>
              </div>
              <div className="education-year">Aug 2023 — Aug 2027</div>
            </div>
            <h5>SRM-IST, Delhi-NCR</h5>
            
            <div className="education-gpa">
              <span>Current GPA</span>
              <span>8.90</span>
            </div>

            <div className="education-courses">
              <h5>Relevant Coursework</h5>
              <div className="education-tags">
                {courses.map((course, index) => (
                  <span key={index} className="education-tag">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="education-certs">
          <h3>Professional Certifications</h3>
          <div className="cert-grid">
            {certifications.map((cert, index) => (
              <div className="cert-card" key={index}>
                <div className="cert-icon">
                  <FaCertificate />
                </div>
                <div className="cert-info">
                  <h4>{cert.title}</h4>
                  <p>{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
