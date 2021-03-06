import styles from './Hotel.module.css';
import Description from './Description/Description';
import HotelPhotos from './HotelPhotos/HotelPhotos';
import DateRange from './DateRange/DateRange';
import Cost from './Cost/Cost';

import { useState, useEffect } from 'react';

function Hotel(props) {
  const [data, setData] = useState({});             // Инфа про отель
  const [photos, setPhotos] = useState([]);         // Фотки отеля
  const [dayCount, setDayCount] = useState(1);

  useEffect(() => {
    const axios = require("axios").default;

    // Запрос на описание отеля
    const options = {
      method: 'GET',
      url: 'https://booking-com.p.rapidapi.com/v1/hotels/data',
      params: {hotel_id: props.idOfHotel, locale: 'en-gb'},
      headers: {
        'x-rapidapi-host': 'booking-com.p.rapidapi.com',
        'x-rapidapi-key': '8ff3fddc21mshbb4f6d5db856a07p1cbb3ejsn3fa5b0ac771f'
      }
    };

    axios.request(options).then(function(response) {
      const info = {
        title: response.data.name,
        review: response.data.review_score,
        descriptionP1: '',
        descriptionP2: '',
        price: response.data.minrate,
        currency: response.data.currencycode
      }

      // Костыль. Не у всех отелей есть описание
      if (response.data.description_translations) {
        if (response.data.description_translations[0]) {
          info.descriptionP1 = response.data.description_translations[0].description;
        }
        if (response.data.description_translations[1]) {
          info.descriptionP2 = response.data.description_translations[1].description;
        }
      }

      setData({...info});
    }).catch(function (error) {
      console.error(error);
    });

    // Запрос на фотки отеля
    const photoOptions = {
      method: 'GET',
      url: 'https://booking-com.p.rapidapi.com/v1/hotels/photos',
      params: {hotel_id: props.idOfHotel, locale: 'en-gb'},
      headers: {
        'x-rapidapi-host': 'booking-com.p.rapidapi.com',
        'x-rapidapi-key': '8ff3fddc21mshbb4f6d5db856a07p1cbb3ejsn3fa5b0ac771f'
      }
    };
    
    axios.request(photoOptions).then(function (response) {
      let queryPhotos = [];

      response.data.map((photo) => {
        queryPhotos.push(photo.url_max);
      });
      
      setPhotos([...queryPhotos]);
    }).catch(function (error) {
      console.error(error);
    });
  }, []);

  return (
    <div className={styles.page}>

      <div className={styles.title}>{data.title}</div>
      <div className={styles.review}>RATING {data.review}</div>

      <HotelPhotos photos={photos}/>
      <Description descriptionP1={data.descriptionP1} descriptionP2={data.descriptionP2} />
      <DateRange setDayCount={setDayCount} />
      <Cost dayCount={dayCount} price={data.price} currency={data.currency} />

      {/* <div className="hotel_on_map">КАРТА</div> */}

      {/* <div className="payment">ПЛАТЁЖНЫЕ ОСОБЕННОСТИ</div> */}

      {/* <div className="tips">СОВЕТЫ ДЛЯ ГОСТЕЙ</div> */}
    </div>
  );
}

export default Hotel;