import NavBar from "./NavBar";
import styles from "./HomePage.module.css";
import Profile from "./Profile";
import image from "../assets/images/gnani.png";
import Experience from "./Experience";

function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.rightFlex}>
          <NavBar />
        </div>
        <div className={styles.leftFlex}>
          <Profile image={image} />
          <Experience />
        </div>
      </div>
    </>
  );
}

export default HomePage;
