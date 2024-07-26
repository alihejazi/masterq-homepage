import Button from "../../components/Button/Button";
import NavBar from "../../components/NavBar/NavBar";
import "./HomePage.scss";
import logo1 from "../../assets/homepage/logo1.png";
import logo2 from "../../assets/homepage/logo2.png";
import logo3 from "../../assets/homepage/logo3.png";
import logo4 from "../../assets/homepage/logo4.png";
import logo5 from "../../assets/homepage/logo5.png";
import twinkle from "../../assets/homepage/twinkle.png";
import questionsPage from "../../assets/homepage/questionsPage.jpg";
import createAssignmentPage from "../../assets/homepage/createAssignmentPage.jpg";
import forStudentsImg from "../../assets/homepage/forStudentsImg.svg";
import forSchoolsImg from "../../assets/homepage/forSchoolsImg.svg";
import circles from "../../assets/homepage/circles.svg";

import dashboardPage from "../../assets/homepage/Dashboard.jpg";
import Checkmark from "../../components/Checkmark/Checkmark";
import Footer from "../../components/Footer/Footer";
import { useLocation } from "react-router";
import { useEffect } from "react";

const HomePage = () => {

  const { pathname, hash, key } = useLocation();

  const newsletterFormSubmitted = (event: any) => {
    event.preventDefault();
    console.log(event);
  };

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
    } else {
      window.scrollTo(0, 0)
    }
  }, [hash])

  return (
    <div id="HomePage">
      <NavBar />
      <div className="landing-section">
        <div className="landing-section-background">
          <div className="landing-section-left"></div>

          <div className="landing-section-image"></div>
        </div>

        <div className="landing-section-overlay" style={{
          zIndex: 1,
        }}>
          <div className="site-container">
            <div>
              <h1>
                Unlock Your Full <br />
                Academic Potential
              </h1>
              <p>
                Are you preparing for GCSE exams in Maths, Physics, Biology, and
                Chemistry? Practice with 1000s of exam-focused questions that
                will guarantee you success!
              </p>
              <Button text="Sign Up Now" linkTo="/sign-up" />
            </div>
          </div>
        </div>

        <div className="landing-section-overlay" style={{
          zIndex: 0
        }}>
          <div id="logoImage" className="image"></div>
          <div id="gradesImage" className="image"></div>
          <div id="mathsCardImage" className="image"></div>
        </div>
      </div>

      <div id="other-sections">

        <section id="supported-by">



          <div className="supported-by-wrapper">
            <h2>Supported By</h2>
            <img src={twinkle} alt="Twinkle" />
          </div>


          <div className="supported-by-logos">

            <div className="site-container">


              <img src={logo1} alt="University of Birmingham logo" />
              <img src={logo2} alt="Start Up Awards Finalist 2023 logo" />
              <img
                src={logo3}
                alt="University of Birmingham Elevate Programme at the Exchange logo"
              // style={{ padding: "40px" }}
              />
              <img
                src={logo4}
                alt="Innovation Awards 2023 logo"
              // style={{ padding: "40px" }}
              />
              <img src={logo5} alt="University of Cambridge logo" />

            </div>

          </div>




        </section>

        <section id="for-students">
          <div className="site-container">
            <div className="for-students-or-schools-inner-wrapper">
              <div className="for-students-or-schools-details">
                <h2>For Students</h2>
                <ul>
                  <li>
                    <Checkmark />
                    Quality questions: Hand-crafted, realistic questions in line
                    with main exam boards
                  </li>
                  <li>
                    <Checkmark />
                    Flexible Testing: On-demand practice exams anytime, anywhere
                  </li>
                  <li>
                    <Checkmark />
                    Tracking: Monitor scores and topic mastery in one place
                  </li>
                  <li>
                    <Checkmark />
                    Instant & Extensive feedback: Automated marking with
                    explanations
                  </li>
                </ul>
              </div>
              <div className="for-students-or-schools-image-wrapper">
                <div className="gradient-background">
                  <img src={questionsPage} alt="Question Page" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="for-schools">
          <div className="site-container">
            <div className="for-students-or-schools-inner-wrapper">
              <div className="for-students-or-schools-image-wrapper">
                <div className="gradient-background">
                  <img
                    src={createAssignmentPage}
                    alt="Create Assignment Page"
                  />
                </div>
              </div>
              <div className="for-students-or-schools-details">
                <h2>For Schools</h2>
                <ul>
                  <li>
                    <Checkmark />
                    Quality Resources: High-quality questions meeting exam board
                    standards
                  </li>
                  <li>
                    <Checkmark />
                    Efficient Assignments: Create tasks quickly and reduce
                    workload
                  </li>
                  <li>
                    <Checkmark />
                    In-Depth Insights: Analyse student strengths and weaknesses
                  </li>
                  <li>
                    <Checkmark />
                    Automated Grading: Save time with automated question marking
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="our-vision" className="image">
          <div className="site-container">
            <h2>Our Vision</h2>
            <p>
              Our vision is to help students at every level succeed, starting
              with GCSEs covering popular exam boards like AQA, Edexcel, and
              OCR. But we're not stopping here.
              <br /> <strong>We're looking to expand to:</strong>
            </p>

            <div className="vision-wrapper">
              <div className="vision-card">
                <p>
                  <Checkmark />
                  KS2 and primary schools
                </p>
              </div>

              <div className="vision-card">
                <p>
                  <Checkmark />A level and IB exams
                </p>
              </div>

              <div className="vision-card">
                <p>
                  <Checkmark />
                  University entrance exams
                </p>
              </div>

              <div className="vision-card">
                <p>
                  <Checkmark />
                  11+ exams and more
                </p>
              </div>
            </div>

            <div id="dashboard-image-showcase-wrapper">
              <img
                src={dashboardPage}
                alt="Dashboard page"
                id="dashboard-image-showcase"
              />
            </div>
          </div>
        </section>

        <section id="pricing">
          <div className="site-container">
            <h2>Join the Revolution in Learning</h2>
            <p>
              Ready to supercharge your studies? Sign up today to gain access to 1000s of practice questions to help you exceed and ace your exams!
            </p>
            <div className="pricing-cards-wrapper">
              <div className="pricing-card">
                <img src={circles} alt="" className="circles" />
                <div className="pricing-info">
                  <h3>For Students</h3>
                  <p>
                    Sign up now for unlimited
                    access to MasterQ's vast question bank for Ready
                    tosupercharge your studies? Sign up now for unlimited access
                    to our vast question bank
                  </p>

                  <p className="price-per-year">
                    <span className="price">£100</span>
                    <span className="per-unit-time">/year</span>
                  </p>

                  <Button text="Sign up now" linkTo="/sign-up" />
                </div>

                <img src={forStudentsImg} alt="Image for student package" id="forStudentsImg" />
              </div>

              <div className="pricing-card">
                <div className="pricing-info">
                  <h3>For Schools</h3>
                  <p>
                    Contact us to explore how MasterQ can enhance your teaching, automate marking, automate assignment creation, and track student performance.
                  </p>

                  <p className="price-per-year">
                    <span className="price">Custom</span>
                    <span className="per-unit-time">/year</span>
                  </p>

                  <Button text="Contact us" linkTo="mailto:support@masterq.co.uk" />
                </div>

                <img src={forSchoolsImg} alt="Image for school package" id="forSchoolsImg" />
              </div>
            </div>
          </div>
        </section>

        <section id="newsletter" className="image">
          <div className="site-container">
            <h2>Subscribe to our Newsletter</h2>

            <p>
              Be the first to know when MasterQ has new updates and gain exclusive
              access to special offers, study tips, and educational insights.
              Subscribe to our newsletter today!
            </p>

            <form onSubmit={newsletterFormSubmitted}>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address here..."
              />
              <div className="email-submit-button-wrapper">
                <Button text="Subscribe" submit />
              </div>
            </form>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
