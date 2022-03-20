import styles from "./SliderWrapper.module.css";
import Slider, { createSliderWithTooltip } from 'rc-slider';
import 'rc-slider/assets/index.css';

const SliderWithTooltip = createSliderWithTooltip(Slider);

function SliderWrapper(props) {
  const marks = {}

  for (let i = props.min; i <= props.max; i++) {
    marks[i] = i;
  }

  function onStopMove(elem) {
    alert(elem);
    props.setAmount(42);
  }

  return (
    <div className={styles.slider}>
      <SliderWithTooltip
        min={props.min}
        max={props.max}
        marks={marks}
        step={null}
        // Маркер
        handleStyle={{backgroundColor: "#586adf", borderColor: "#586adf", borderRadius: 0, height: "20px", width: "10px", opacity: "1"}}
        // Активная точка
        activeDotStyle={{backgroundColor: "#586adf", borderColor: "#586adf"}}
        // Неактивная точка
        dotStyle={{backgroundColor: "#ACB5EF", borderColor: "#ACB5EF"}}
        // Слева
        trackStyle={{backgroundColor: "#586adf"}}
        // Справа
        railStyle={{backgroundColor: "#ACB5EF"}}
        onAfterChange={onStopMove}
      />
    </div>
  );
}

export default SliderWrapper;