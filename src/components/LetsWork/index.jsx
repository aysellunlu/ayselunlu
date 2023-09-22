import styles from "./styles.module.css";

const LetsWork = ({ className = "", ...props }) => {
  return (
    <div className={`${styles.bg} ${styles.row} ${className}`} {...props}>
      <div>
        <div className={`${styles.bigText}`}>HELLO</div>
      </div>
      <div>
        <div className={`${styles.smallText} ${styles.turquoise}`}>
          Let's Work
        </div>
        <div className={`${styles.smallText} ${styles.green}`}>Together</div>
      </div>
    </div>
  );
};

export default LetsWork;
