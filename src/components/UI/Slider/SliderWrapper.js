import styles from "./SliderWrapper.module.css";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

function SliderWrapper() {
  const marks = {
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
  }

  return (
    <div className={styles.slider}>
      <Slider min={1} max={8} marks={marks} step={null} />
    </div>
  );
}

export default SliderWrapper;