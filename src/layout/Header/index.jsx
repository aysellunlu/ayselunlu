import styles from "./styles.module.css";

const Header = ({ className = "", ...props }) => {
  return (
    <div className={`${styles.container} ${styles.row}`} {...props}>
      <div className={`${styles.brandName} ${styles.pink}`}>
        <span className={`${styles.bold} ${styles.pink}`}>Aysel Ünlü</span>
      </div>
      <div className={`${styles.itemName} ${styles.blue}`}>Biography</div>
      <div className={`${styles.itemName} ${styles.green}`}>Experiences</div>
      <div className={`${styles.itemName} ${styles.purple}`}>Project</div>
    </div>
  );
};

export default Header;
