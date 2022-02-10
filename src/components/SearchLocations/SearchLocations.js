import styles from './SearchLoc.module.css';
import PlacesTips from "./PlacesTips/PlacesTips";

import { useContext, useEffect, useState } from 'react';
import { DestType } from'../../context';

function SearchLocations(props) {
  // Состояние массива локаций
  const [locations, setLocations] = useState([
    // {name: "Berlin", region: "Central", country: "German", dest_id: "222222"},
    // {name: "London", region: "Region", country: "England", dest_id: "777777"},
  ]);

  // Контекст для ID локации
  const {destType, setDestType} = useContext(DestType);

  // Задержка вызова API
  const debounce = useDebounce(props.value, 500);

  useEffect(() => {
    if (debounce) {

      const axios = require("axios").default;

      const options = {
        method: 'GET',
        url: 'https://booking-com.p.rapidapi.com/v1/hotels/locations',
        params: {locale: 'en-gb', name: props.value},
        headers: {
          'x-rapidapi-host': 'booking-com.p.rapidapi.com',
          'x-rapidapi-key': 'c8366f1f29mshd460b0aa32692f7p1371b8jsn0ea87e1f4436'
        }
      };

      axios.request(options).then(function (response) {
        let districtArr = [];

        console.log(response.data.length);

        response.data.forEach((district) => {
          const result = {
            name: district.name,
            region: district.region,
            country: district.country,
            dest_id: district.dest_id,
          }

          districtArr.push(result);
        });

        setLocations([...districtArr]);
      }).catch(function (error) {
        console.error(error);
      });

    }
  }, [debounce]);



  function getLocationID() {
    const loc = locations.find(loc => loc.name.toLowerCase().includes(props.value.toLowerCase()));

    setDestType(loc.dest_id);
  }

  return (
    <div className={styles.search}>
      <input
        {...props}
        className={styles.input}
        placeholder="Куда летите?"
      />

      {locations.map(location => (
        <button onClick={getLocationID} key={location.dest_id}><PlacesTips district={location} key={location.dest_id} /> </button>
      ))}
    </div>
  );
}

// Хук для задержки запроса к АПИ
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(
    () => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      return () => {
        clearTimeout(handler);
      };
    },
    [value, delay]
  );

  return debouncedValue;
}

export default SearchLocations;