import styles from "./FilterList.module.css";

function FilterList() {
  return ( 
    <div>
      <div className={styles.title}>
        <p>Filter</p>
      </div>

      <div className={styles.adults_number}>
        <p>Amount of adults</p>
      </div>

      <div className={styles.children_number}>
        <p>Amount of chidlren</p>
      </div>

    </div>
  );
}

export default FilterList;