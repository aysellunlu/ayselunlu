import InfoCard from "./components/InfoCard";
import ProjectCard from "./components/ProjectCard";
import "./styles/global.css";

function App() {
  return (
    <div className="body">
      <ProjectCard children="Card Title" date="2020" />
      <InfoCard children="Design" type="yellowCard" />
      <InfoCard children="Development" type="purpleCard" />
      <InfoCard children="Ideas" type="turquoiseCard" />
    </div>
  );
}

export default App;
