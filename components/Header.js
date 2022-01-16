import Navbar from "../components/Navbar";
import styles from "../styles/index.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.brand_box}>
        <Navbar />
      </div>

      <div className={styles.text_box}>
        <h1 className={styles.heading_primary}>
          <span className={styles.heading_primary_main}>
            Welcome to the Test
          </span>
         
        </h1>
        <a
          href="#"
          className={`${styles.btn} ${styles.btn_white} ${styles.btn_animated}`}
        >
          Atul Kumar Awasthi
        </a>
      </div>
    </header>
  );
};

export default Header;
