import Contact from "../../components/Contact";
import InfoCard from "../../components/InfoCard";
import LetsWork from "../../components/LetsWork";
import styles from "./styles.module.css";

const LandPage = ({ className = "", ...props }) => {
  return (
    <div>
      <div className={`${styles.row}`}>
        <div className={`${styles.paragraph}`}>
          <div className={`${styles.paragraphTitle}`}>
            <span className={`${styles.gray}`}> Hi I'm</span>{" "}
            <span className={`${styles.yellow}`}>Aysel</span>
          </div>
          <div className={`${styles.text}`}></div>
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
