import styles from "./Cost.module.css";

import { useState } from "react";

function Cost({dayCount, price, currency}) {
  const [roomCount, setRoomCount] = useState(1);

  const onRoomCountInput = (event) => {
    setRoomCount(event.target.value)
  }

  return ( 
    <div className={styles.container}>
      <div className={styles.roomPrice}>
        <p>Price per room</p>
        <div className={styles.rectangle}>
          <p>{price}</p>
          <p>{currency}</p>
        </div>
      </div>
      <div className={styles.roomNumber}>
        <p>Number of rooms</p>
        <div className={styles.rectangle}>
          <input className={styles.roomNumberInput} type="text" value={roomCount} onChange={onRoomCountInput} />
        </div>
      </div>
      <div className={styles.totalPrice}>
        <p>Your price</p>
        <div className={styles.rectangle}>
          <p>{Math.round(dayCount * price * roomCount)}</p>
          <p>{currency}</p>
        </div>
      </div>
      <div className={styles.multiply}>*</div>
      <div className={styles.equals}>=</div>
    </div>
  );
}

export default Cost;