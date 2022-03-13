import styles from "./FilterList.module.css";
import Slider from "../../UI/Slider/SliderWrapper";

function FilterList() {
  

  return ( 
    <div>
      <div className={styles.title}>
        <p>Filter</p>
      </div>

      <div className={styles.adults_number}>
        <p>Amount of adults</p>
        <Slider />
      </div>

      <div className={styles.children_number}>
        <p>Amount of chidlren</p>
        <Slider />
      </div>
    </div>
  );
}

export default FilterList;