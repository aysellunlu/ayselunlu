import styles from "./styles.module.css";

const ProjectArchive = ({ className = "", ...props }) => {
  return (
    <div className={`${styles.container} `} {...props}>
      <div className={`${styles.title}`}>
        PROJECT ARCHIVE
        <div className={`${styles.line}`}></div>
      </div>
    </div>
  );
};

export default ProjectArchive;
