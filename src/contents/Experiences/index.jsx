import styles from "../Experiences/styles.module.css";

const Experiences = ({ className = "", ...props }) => {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.row}`}>
        <div className={`${styles.title}`}>EXPERIENCES </div>
        <div className={`${styles.work}`}>
          W<span className={`${styles.point}`}>""</span>
          RK
        </div>
      </div>
      <div className={`${styles.experiencesContanier}`}>
        <div className={`${styles.experience}`}>
          <p>UI / UX Designer , Frontend Developer - Freelance</p>
          <p>Frontend Developer - Istanbul Metropolitan Municapility</p>
          <p>Web Developer - Enoca</p>
          <p>Founder - Inovayss Software & Technology</p>
          <p>R & D Engineer - Vestel</p>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
