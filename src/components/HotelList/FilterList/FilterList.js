import styles from "./FilterList.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";


// import Slider from "../../UI/Slider/SliderWrapper";


function FilterList(props) {


  // const [adultAmount, setAdultAmount] = useState(1);
  // const [childrenAmount, setChildrenAmount] = useState(0);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const people = {
  //     adultAmount,
  //     childrenAmount
  //   }

  //   dispatch({type: "getAmountOfPeople", payload: people});
  // }, [adultAmount, childrenAmount]);

  

  function onRateClick(event) {
    props.getRate(`reviewscorebuckets::${event.target.value}`);
  }

  function onStarClick(event) {
    props.getStars(`class::${event.target.value}`)
  }

  return ( 
    <div>
      <div className={styles.title}>
        <p>Filter</p>
      </div>

      <div className={styles.rating}>
        <p>Rating</p>
        <form>
          <div className={styles.radio}>
            <input type="radio" name="rate1" id="radio1" value="999" onChange={onRateClick} />
            <label htmlFor="radio1">&nbsp;    All</label>
          </div>
          <div className={styles.radio}>
            <input type="radio" name="rate1" id="radio2" value="50" onChange={onRateClick} />
            <label htmlFor="radio2">&nbsp;    5+</label>
          </div>
          <div className={styles.radio}>
            <input type="radio" name="rate1" id="radio3" value="60" onChange={onRateClick} />
            <label htmlFor="radio3">&nbsp;    6+</label>
          </div>
          <div className={styles.radio}>
            <input type="radio" name="rate1" id="radio4" value="70" onChange={onRateClick} />
            <label htmlFor="radio4">&nbsp;    7+</label>
          </div>
          <div className={styles.radio}>
            <input type="radio" name="rate1" id="radio5" value="80" onChange={onRateClick} />
            <label htmlFor="radio5">&nbsp;    8+</label>
          </div>
          <div className={styles.radio}>
            <input type="radio" name="rate1" id="radio6" value="90" onChange={onRateClick} />
            <label htmlFor="radio6">&nbsp;    9+</label>
          </div>
        </form>
      </div>

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

      {/* <div className={styles.adults_number}>
        <p>Amount of adults</p>
        <Slider min={1} max={8} setAmount={setAdultAmount} />
      </div>

      <div className={styles.children_number}>
        <p>Amount of chidlren</p>
        <Slider min={0} max={8} setAmount={setChildrenAmount} />
      </div> */}
    </div>
  );
}

export default FilterList;