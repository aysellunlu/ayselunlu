import classes from "./styles.module.css";

const ProjectCard = ({ className = "", children, date, ...props }) => {
  return (
    <div className={`${classes.card}`} {...props}>
      <div className={`${classes.title}`}>{children}</div>
      <div className={`${classes.date}`}>{date}</div>
    </div>
  );
};

export default ProjectCard;
