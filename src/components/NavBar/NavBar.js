import styles from './NavBar.module.css';
import logo from './logo.png';

import { useRef, useState} from 'react';
import { Link } from 'react-router-dom';

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
      <Link to="/"><img src={logo} className={styles.logo}/></Link>
      <div className={styles.navBar} ref={visability}>
        <ul>
          <li><Link to="/hotels/0">Hotels</Link></li>
          <li><a href="#">Title 3</a></li>
          <li><a href="#">Title 4</a></li>
          <li><a href="#">Title 5</a></li>
        </ul>
      </div>
      <h2 className={styles.menuToggle} onClick={curtain}> Menu</h2>
    </header>
  );
}

export default NavBar;