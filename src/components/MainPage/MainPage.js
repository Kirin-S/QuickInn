import styles from "./MainPage.module.css";

import { Link } from "react-router-dom";

function MainPage() {
  return (
    <div className={styles.mainPage}>
      <div className={styles.intro}>
        <p className={styles.hymn}>
          EASY, SIMPLE, QUICK.
        </p>
        <p className={styles.title}>QUICKINN.</p>
        <p className={styles.ad}>
          10 000+ hotels, inns, apartments. Anything you wish. In click.
        </p>
        <Link to={"/hotels/0"}><button className={styles.toHotels}><p>Pick up the prefect place</p></button></Link>
      </div>
    </div>
  );
}

export default MainPage;