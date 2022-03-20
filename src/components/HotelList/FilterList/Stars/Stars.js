import styles from "./Stars.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";

import { useDispatch } from "react-redux";

function Stars() {
  const dispatch = useDispatch();

  function onStarClick(event) {
    dispatch({type: "getStarCount", payload: `class::${event.target.value}`});
  }

  return ( 
    <div className={styles.stars}>
      <p>Stars</p>
      <form>
        <div className={styles.starPic}>
          <div className={styles.radio}>
            <input type="radio" name="rate2" id="radio7" value="0" onChange={onStarClick} />
            <label htmlFor="radio7">&nbsp;    All</label>
          </div>
          <div className={styles.radio}>
            <input type="radio" name="rate2" id="radio8" value="2" onChange={onStarClick} />
            <label htmlFor="radio8">&nbsp;    <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></label>
          </div>
          <div className={styles.radio}>
            <input type="radio" name="rate2" id="radio9" value="3" onChange={onStarClick} />
            <label htmlFor="radio9">&nbsp;    <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></label>
          </div>
          <div className={styles.radio}>
            <input type="radio" name="rate2" id="radio10" value="4" onChange={onStarClick} />
            <label htmlFor="radio10">&nbsp;    <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></label>
          </div>
          <div className={styles.radio}>
            <input type="radio" name="rate2" id="radio11" value="5" onChange={onStarClick} />
            <label htmlFor="radio11">&nbsp;    <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></label>
          </div>
        </div>

        <div className={styles.starDigit}>
          <div className={styles.radio}>
            <input type="radio" name="rate2" id="radio12" value="0" onChange={onStarClick} />
            <label htmlFor="radio12">&nbsp;    All</label>
          </div>
          <div className={styles.radio}>
            <input type="radio" name="rate2" id="radio13" value="2" onChange={onStarClick} />
            <label htmlFor="radio13">&nbsp;    2</label>
          </div>
          <div className={styles.radio}>
            <input type="radio" name="rate2" id="radio14" value="3" onChange={onStarClick} />
            <label htmlFor="radio14">&nbsp;    3</label>
          </div>
          <div className={styles.radio}>
            <input type="radio" name="rate2" id="radio15" value="4" onChange={onStarClick} />
            <label htmlFor="radio15">&nbsp;    4</label>
          </div>
          <div className={styles.radio}>
            <input type="radio" name="rate2" id="radio16" value="5" onChange={onStarClick} />
            <label htmlFor="radio16">&nbsp;    5</label>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Stars;