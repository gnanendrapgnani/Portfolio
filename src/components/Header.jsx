import logo from "../assets/images/G.png";
import styles from "./Header.module.css";

function Header() {
  return (
    <>
      <div className={styles.header}>
        <div>
          <img className={styles.logo} src={logo} alt="" />
        </div>
        <label className={styles.switchButton}>
          <div className={styles.switchOuter}>
            <input id={styles.switch} type="checkbox" />
            <div className={styles.button}>
              <span className={styles.buttonToggle}></span>
              <span className={styles.buttonIndicator}></span>
            </div>
          </div>
        </label>
      </div>
    </>
  );
}

export default Header;
