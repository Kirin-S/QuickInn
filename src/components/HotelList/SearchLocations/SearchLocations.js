import styles from './SearchLoc.module.css';

import { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";

function SearchLocations(props) {
  // Состояние массива локаций
  const [locations, setLocations] = useState([
    // { name: "Berlin", region: "Region", country: "German", dest_id: "111111" },
    // { name: "London", region: "Region", country: "England", dest_id: "333333" },
    // { name: "Washington", region: "Region", country: "USA", dest_id: "555555" },
    // { name: "Moscow", region: "Region", country: "Russia", dest_id: "777777" },
    // { name: "Amsterdam", region: "Region", country: "Germany", dest_id: "999999" },
  ]);

  const dispatch = useDispatch();

  const [tips, setTips] = useState(false);

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
          'x-rapidapi-key': 'a853eeda66msh7bbaee4eb0fcb86p15483bjsn777e2843d937'
        }
      };

      axios.request(options).then(function (response) {
        let districtArr = [];

        // Коммент, сделанный с помощью расширения AI Doc Writer
        /* It's a loop that iterates over the response.data array and creates an object
        with the district's name, region, country and dest_id. */
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

  function onInputClick() {
    setTips(true);
  }

  // ==============================================
  // Костыль
  function onInputOut() {
    setTimeout(() => {
      setTips(false);
    }, 100);
  }
  // ==============================================

  // Функция, устанавливающая параметры поиска и надпись в строке поиска
  function onLocationClick(location) {
    dispatch({type: "getDestID", payload: location.dest_id});
    props.setSearchQuery(location.name + ", " + location.region + ", " + location.country);
    setTips(false);
  }

  return (
    <div className={styles.search}>
      <input
        {...props}
        className={styles.input}
        placeholder="Moving to..."
        onFocus={onInputClick}
        onBlur={onInputOut}
      />
      {/* Условная отрисовка при клике на поиск */}
      {
        tips
        ?
          <div>
            {locations.map(location => (
              <button onClick={() => onLocationClick(location)} key={location.dest_id} className={styles.tip}>
                <h3>{location.name}</h3>
                <p>{location.region}, {location.country}</p>
              </button>
            ))}
          </div>
        :
          null
      } 
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