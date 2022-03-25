import DatePicker from 'sassy-datepicker';
import styles from "./Calendar.module.css";

import { useState, useEffect } from "react";

function Calendar() {
  const [arrivalDate, setArrivalDate] = useState("1970-01-01");
  const [departureDate, setDepartureDate] = useState("1970-01-01");

  function onArrivalDatePick(date) {
    setArrivalDate(date);
  }

  function onDepartureDatePick(date) {
    setDepartureDate(date);
  }

  const dayDif = (date1, date2) => Math.ceil(Math.abs(date1 - date2) / 86400000);
  useEffect(() => {
    console.log(dayDif(arrivalDate, departureDate));
  }, [arrivalDate, departureDate]);

  return ( 
    <div>
      <div className={styles.arrivalDate}>
        <p>Arrival date</p>
        <div className={styles.calendar}>
          <DatePicker onChange={onArrivalDatePick}/>
        </div>
      </div>
      <div className={styles.departureDate}>
        <p>Departure date</p>
        <div className={styles.calendar}>
          <DatePicker onChange={onDepartureDatePick}/>
        </div>
      </div>
    </div>
  );
}

export default Calendar;