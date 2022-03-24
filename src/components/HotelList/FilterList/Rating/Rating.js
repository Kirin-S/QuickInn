import styles from "./Rating.module.css";
import { useDispatch } from "react-redux";

function Rating() {
  const dispatch = useDispatch();

  function onRateClick(event) {
    dispatch({type: "getRating", payload: `reviewscorebuckets::${event.target.value}`});
  }

  return ( 
    <div className={styles.rating}>
      <p>Rating</p>
      <form>
        <div className={styles.radio}>
          <input type="radio" name="rate1" id="radio1" value="999" onChange={onRateClick} />
          <label htmlFor="radio1">&nbsp; No rating</label>
        </div>
        <div className={styles.radio}>
          <input type="radio" name="rate1" id="radio2" value="50" onChange={onRateClick} />
          <label htmlFor="radio2">&nbsp; 5+</label>
        </div>
        <div className={styles.radio}>
          <input type="radio" name="rate1" id="radio3" value="60" onChange={onRateClick} />
          <label htmlFor="radio3">&nbsp; 6+</label>
        </div>
        <div className={styles.radio}>
          <input type="radio" name="rate1" id="radio4" value="70" onChange={onRateClick} />
          <label htmlFor="radio4">&nbsp; 7+</label>
        </div>
        <div className={styles.radio}>
          <input type="radio" name="rate1" id="radio5" value="80" onChange={onRateClick} />
          <label htmlFor="radio5">&nbsp; 8+</label>
        </div>
        <div className={styles.radio}>
          <input type="radio" name="rate1" id="radio6" value="90" onChange={onRateClick} />
          <label htmlFor="radio6">&nbsp; 9+</label>
        </div>
      </form>
    </div>
  );
}

export default Rating;