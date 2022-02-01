import styles from './NavBar.module.css';
import logo from './logo.png';
import toggle from './menuToggle.png';

function NavBar() {
  return (
    <header>
      <img src={logo} className={styles.logo}/>
      <div className={styles.navBar}>
        <ul>
          <li><a href="#">Car Rental</a></li>
          <li><a href="#">Hotels</a>
          {/* <div className={styles.subMenu}>
            <ul>
              <li><a href="#">Hotels.title1</a></li>
              <li><a href="#">Hotels.title2</a></li>
              <li><a href="#">Hotels.title3</a></li>
              <li><a href="#">Hotels.title4</a></li>
            </ul>
          </div> */}
          </li>
          <li><a href="#">Title 3</a></li>
          <li><a href="#">Title 4</a></li>
          <li><a href="#">Title 5</a></li>
        </ul>
      </div>
      {/* <div className={styles.menuToggle}>TOGGLE</div> */}
      <img src={toggle} className={styles.menuToggle} />
    </header>
  );
}

export default NavBar;