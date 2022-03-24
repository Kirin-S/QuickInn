import styles from "./FilterList.module.css";
import Stars from "./Stars/Stars";
import HotelFacilities from "./HotelFacilities/HotelFacilities";
import Rating from "./Rating/Rating";

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

  return ( 
    <div>
      <div className={styles.title}>
        <p>Filter</p>
      </div>

      <Rating />
      <Stars />
      <HotelFacilities />

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