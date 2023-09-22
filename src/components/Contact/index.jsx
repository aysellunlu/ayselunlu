import Behance from "../../icons/Behance";
import Github from "../../icons/Github";
import Instagram from "../../icons/Instagram";
import Linkedin from "../../icons/Linkedin";
import Mail from "../../icons/Mail";
import Medium from "../../icons/Medium";
import styles from "./styles.module.css";

const Contact = ({ className = "", ...props }) => {
  return (
    <div className={`${styles.container}`} {...props}>
      <div className={`${styles.text}`}>CONTACT ME</div>
      <div className={`${styles.row}`}>
        <div className={`${styles.iconContainer}`}>
          <Linkedin />
        </div>
        <div className={`${styles.iconContainer}`}>
          <Github />
        </div>
        <div className={`${styles.iconContainer}`}>
          <Mail />
        </div>
        <div className={`${styles.iconContainer}`}>
          <Behance />
        </div>
        <div className={`${styles.iconContainer}`}>
          <Instagram />
        </div>
        <div className={`${styles.iconContainer}`}>
          <Medium />
        </div>
      </div>
    </div>
  );
};

export default Contact;
