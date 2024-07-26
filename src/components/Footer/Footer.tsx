import { Link } from "react-router-dom";
import logoFooter from "../../assets/homepage/logoFooter.svg";
import linkedInIcon from "../../assets/homepage/social-icon-linkedin.svg";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer>
      <div className="footer-cols-wrapper">
        <div className="col-1">
          <div className="col-inner-wrapper">
            <img src={logoFooter} alt="MasterQ logo" className="logo-footer" />
            <p>
              Are you preparing for GCSE exams in maths, physics, biology, and
              chemistry? Look no further! MasterQ is your ultimate resource for
              mastering these subjects and more.
            </p>
            <div className="social-icons-wrapper">
              <Link to={"https://linkedin.com"} target="blank">
                <img src={linkedInIcon} alt="Link to MasterQ LinkedIn page" />
              </Link>
            </div>
          </div>
        </div>

        <div className="col-2">
          <div className="col-inner-wrapper">
            <h4>Resources</h4>
            <ul>
              <li>
                {/* IMPORTANT: Link used to ensure site doesn't reload, especially becaue we need to include window.location.origin,
                so the navigation works from any public page across the whole site */}
                <Link to={window.location.origin + '/#for-students'}>For Students</Link>
              </li>
              <li>
                <Link to={window.location.origin + '/#for-schools'}>For Schools</Link>
              </li>
              <li>
                <Link to={window.location.origin + '/#our-vision'}>Our Vision</Link>
              </li>
              <li>
                <Link to={window.location.origin + '/#pricing'}>Pricing</Link>
              </li>
              <li>
                <Link to={window.location.origin + '/#newsletter'}>Newsletter</Link>
              </li>
              <li>
                <Link to={"/sign-up"}>Sign Up</Link>
              </li>
              <li>
                <a href="mailto:support@masterq.co.uk">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-3">
          <div className="col-inner-wrapper">
            <h4>Contact Us</h4>
            <ul>
              <li>support@masterq.co.uk</li>
              <li>
                MasterQ Ltd,<br/>The Exchange,<br/>3 Centenary Square,<br/>Birmingham,<br/>B1 2DR,<br/>United Kingdom.
              </li>

              <li>
              <a onClick={() => {
                  window.scrollTo(0, 0)
                }} id="backToTop">Scroll to top ^</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom-part">
        <p>Copyright © {new Date().getFullYear()} MasterQ. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
