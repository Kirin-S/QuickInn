import styles from './SearchLoc.module.css';

function SearchLocations() {
  return (
    <div className={styles.search}>
      <input
        className={styles.input}
        placeholder="Куда летите?">
      </input>
    </div>
  );
}

export default SearchLocations;