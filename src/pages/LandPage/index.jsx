import Contact from "../../components/Contact";
import InfoCard from "../../components/InfoCard";
import LetsWork from "../../components/LetsWork";
import styles from "./styles.module.css";
import ProfileImg from "../../img/profile-img.png";

const LandPage = ({ className = "", ...props }) => {
  return (
    <div>
      <div className={`${styles.row}`}>
        <div className={`${styles.paragraph}`}>
          <div className={`${styles.paragraphTitle}`}>
            <span className={`${styles.gray}`}> Hi I'm</span>{" "}
            <span className={`${styles.yellow}`}>Aysel</span>
          </div>
          <div className={`${styles.paragraphText} ${styles.gray}`}>
            I design and code mobile and web interfaces.I worked with different
            teams at different institutions in the development and design of 10+
            projects. Currently, as a freelancer, I{" "}
            <span className={`${styles.pink}`}>design</span> and{" "}
            <span className={`${styles.pink}`}> develop applications </span>{" "}
            that bring <span className={`${styles.blue}`}>creative ideas</span>{" "}
            to life.
          </div>
        </div>
        <div className={`${styles.mainImg}`}>
          <img src={ProfileImg} width="50%" />
        </div>
      </div>
      <div className={`${styles.row}`}>
        <LetsWork />
        <Contact />
      </div>
      <div className={`${styles.pinkLine}`}></div>
      <div className={`${styles.row}`}>
        <InfoCard children="Design" type="yellowCard" />
        <InfoCard children="Development" type="purpleCard" />
        <InfoCard children="Ideas" type="turquoiseCard" />
      </div>
    </div>
  );
};

export default LandPage;
