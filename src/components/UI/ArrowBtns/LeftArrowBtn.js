import leftArrow from './leftArrow.png';
import styles from './Arrows.module.css';

function LeftArrowBtn(props) {
  return (
    <div className={styles.circle} {...props}>
      <img className={styles.arrow} src={leftArrow} />
    </div>
  );
}

export default LeftArrowBtn;