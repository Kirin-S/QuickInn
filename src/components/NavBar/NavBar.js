import styles from './NavBar.module.css';
import logo from './logo.png';
import toggle from './menuToggle.png';

import { useRef, useState} from 'react';

function NavBar() {
  const visability = useRef();
  const [visible, setVisible] = useState(false);

  function curtain() {
    if (visible) {
      setVisible(false);
      visability.current.style.left = -window.screen.width + "px";
      visability.current.style.background = "#586adf";
    }
    else {
      setVisible(true);
      visability.current.style.left = 0;
      visability.current.style.background = "#616161";
      visability.current.style["z-index"] = 10;
    }
  }

  return (
    <header>
      <img src={logo} className={styles.logo}/>
      <div className={styles.navBar} ref={visability}>
        <ul>
          <li><a href="#">Car Rental</a></li>
          <li><a href="#">Hotels</a></li>
          <li><a href="#">Title 3</a></li>
          <li><a href="#">Title 4</a></li>
          <li><a href="#">Title 5</a></li>
        </ul>
      </div>
      <img src={toggle} className={styles.menuToggle} onClick={curtain}/>
    </header>
  );
}

export default NavBar;