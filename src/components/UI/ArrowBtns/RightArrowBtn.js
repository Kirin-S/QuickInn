import rightArrow from './rightArrow.png';
import styles from './Arrows.module.css';

function RightArrowBtn(props) {
  return (
    <div className={styles.circle} {...props}>
      <img className={styles.arrow} src={rightArrow} />
    </div>
  );
}

export default RightArrowBtn;