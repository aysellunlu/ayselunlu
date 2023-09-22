import Header from "./layout/Header";
import LandPage from "./pages/LandPage";
import styles from "./styles.module.css";
import HeaderImg from "./img/space-h.png";

function App({ className = "", ...props }) {
  return (
    <div className="body">
      <div className={`${styles.row}`}>
        <div className={`${styles.headerImgContainer}`}>
          <img src={HeaderImg} alt="" />
        </div>
        <div className={`${styles.headerContainer}`}>
          <Header />
        </div>
      </div>
      <LandPage />
    </div>
  );
}

export default App;
