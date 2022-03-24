import styles from "./HotelFacilities.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";

function HotelFacilities() {
  const [facilities, setFacilities] = useState([]);

  const dispatch = useDispatch();

  function onFacilityClick(event) {
    // if (event.target.checked && facilities.indexOf(event.target.value) === -1) {
    //   setFacilities([...facilities, event.target.value]);
    // }
    // else {
    //   let arr = facilities;
    //   arr.splice(arr.indexOf(event.target.value), 1);
    //   setFacilities([...arr]);
    // }

    dispatch({type: "getFacilities", payload: event.target.value});
  }
  
  return ( 
    <div className={styles.tags}>
      <p>Hotel Facility</p>
      <form>
        <div>
          <div className={styles.checkBox}>
            <label>
              <input type="checkbox" value="mealplan::breakfast_included" onChange={onFacilityClick} />
              <span className={styles.fake}></span>
              <span className={styles.text}>&nbsp; Breakfast included</span>
            </label>
          </div>
          <div className={styles.checkBox}>
            <label>
              <input type="checkbox" value="facility::2" onChange={onFacilityClick} />
              <span className={styles.fake}></span>
              <span className={styles.text}>&nbsp; Parking</span>
            </label>
          </div>
          <div className={styles.checkBox}>
            <label>
              <input type="checkbox" value="facility::28" onChange={onFacilityClick} />
              <span className={styles.fake}></span>
              <span className={styles.text}>&nbsp; Family rooms</span>
            </label>
          </div>
          <div className={styles.checkBox}>
            <label>
              <input type="checkbox" value="free_cancellation::1" onChange={onFacilityClick} />
              <span className={styles.fake}></span>
              <span className={styles.text}>&nbsp; Free cancellation</span>
            </label>
          </div>
          <div className={styles.checkBox}>
            <label>
              <input type="checkbox" value="facility::182" onChange={onFacilityClick} />
              <span className={styles.fake}></span>
              <span className={styles.text}>&nbsp; Electric vehicle charging station</span>
            </label>
          </div>
          <div className={styles.checkBox}>
            <label>
              <input type="checkbox" value="facility::11" onChange={onFacilityClick} />
              <span className={styles.fake}></span>
              <span className={styles.text}>&nbsp; Fitness centre</span>
            </label>
          </div>
          <div className={styles.checkBox}>
            <label>
              <input type="checkbox" value="facility::46" onChange={onFacilityClick} />
              <span className={styles.fake}></span>
              <span className={styles.text}>&nbsp; Free parking</span>
            </label>
          </div>
          <div className={styles.checkBox}>
            <label>
              <input type="checkbox" value="facility::107" onChange={onFacilityClick} />
              <span className={styles.fake}></span>
              <span className={styles.text}>&nbsp; Free WiFi</span>
            </label>
          </div>
          <div className={styles.checkBox}>
            <label>
              <input type="checkbox" value="facility::4" onChange={onFacilityClick} />
              <span className={styles.fake}></span>
              <span className={styles.text}>&nbsp; Pets allowed</span>
            </label>
          </div>
          <div className={styles.checkBox}>
            <label>
              <input type="checkbox" value="facility::54" onChange={onFacilityClick} />
              <span className={styles.fake}></span>
              <span className={styles.text}>&nbsp; Spa and wellness centre</span>
            </label>
          </div>
          <div className={styles.checkBox}>
            <label>
              <input type="checkbox" value="facility::301" onChange={onFacilityClick} />
              <span className={styles.fake}></span>
              <span className={styles.text}>&nbsp; Swimming pool</span>
            </label>
          </div>
          <div className={styles.checkBox}>
            <label>
              <input type="checkbox" value="room_facility::38" onChange={onFacilityClick} />
              <span className={styles.fake}></span>
              <span className={styles.text}>&nbsp; Private bathroom</span>
            </label>
          </div>
          <div className={styles.checkBox}>
            <label>
              <input type="checkbox" value="room_facility::11" onChange={onFacilityClick} />
              <span className={styles.fake}></span>
              <span className={styles.text}>&nbsp; Air conditioning</span>
            </label>
          </div>
          <div className={styles.checkBox}>
            <label>
              <input type="checkbox" value="room_facility::93" onChange={onFacilityClick} />
              <span className={styles.fake}></span>
              <span className={styles.text}>&nbsp; Private pool</span>
            </label>
          </div>
        </div>
      </form>
    </div>
  );
}

export default HotelFacilities;