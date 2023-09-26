import styles from "./styles.module.css";

const InfoCard = ({
  className = "",
  type = "",
  children,
  information,
  ...props
}) => {
  return (
    <div className={`${styles.card}  ${styles[type]} ${className}`} {...props}>
      <div className={`${styles.title}`}>
        <div className={`${styles.infoBackground}`}>{children}</div>
      </div>
    </div>
  );
};

export default InfoCard;
