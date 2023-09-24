import styles from "./styles.module.css";
import Image from "../../img/bio-image.png";

const Biography = ({ className = "", ...props }) => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <div className={styles.title}>BIOGRAPHY</div>
        <div className={styles.paragraph}>
          I am Aysel, I was born in Marmaris. I am from Marmaris. I studied
          Electronics and Communication Engineering at Suleyman Demirel
          University. I took an active role in different clubs and projects
          throughout my university life. I worked in embedded systems software
          and hardware development, web development, mobile application
          development and graphic design. I like ideas that are not ordinary and
          do not fit into frameworks. I always like to create new things.
        </div>
      </div>
      <div className={styles.imgContainer}>
        <img src={Image} alt="" width="80%" />
      </div>
    </div>
  );
};

export default Biography;
