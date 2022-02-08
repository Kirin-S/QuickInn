import styles from "./PlacesTips.module.css";

function PlacesTips(props) {
  return (
    <div className={styles.tip}>
      <div className={styles.tip_content}>
        <h3>{props.district.name}</h3>

        <p>{props.district.region}, {props.district.country}</p>
      </div>
    </div>
  );
}

export default PlacesTips;