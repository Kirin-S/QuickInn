import leftArrow from './leftArrow.png';
import styles from './Arrows.module.css';

function LeftArrowBtn() {
  return (
    <div className={styles.circle}>
      <img className={styles.arrow} src={leftArrow} />
    </div>
  );
}

export default LeftArrowBtn;