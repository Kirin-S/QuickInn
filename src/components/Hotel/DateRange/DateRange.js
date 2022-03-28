import styles from "./DateRange.module.css";
import { Calendar } from "@natscale/react-calendar";
import '@natscale/react-calendar/dist/main.css';

import { useState, useEffect } from "react";

function DateRange({setDayCount}) {
  const [dateRange, setDateRange] = useState([]);

  const dayDif = (date1, date2) => Math.ceil(Math.abs(date1 - date2) / 86400000);

  const onDatePick = (range) => {
    setDateRange(range);
    console.log(dateRange);
  }

  useEffect(() => {
    setDayCount(dayDif(dateRange[0], dateRange[1]));
  }, [dateRange]);

  return ( 
    <div className={styles.dateRange}>
      <p>Date range</p>
      <div className={styles.calendar}>
        <Calendar isRangeSelector value={dateRange} onChange={onDatePick} />
      </div>
    </div>
  );
}

export default DateRange;