import styles from './Hotel.module.css';

import { useState, useEffect } from 'react';

function Hotel(props) {
  const [data, setData] = useState({});

  // useEffect(() => {
  //   const axios = require("axios").default;

  //   const options = {
  //     method: 'GET',
  //     url: 'https://booking-com.p.rapidapi.com/v1/hotels/data',
  //     params: {hotel_id: props.idOfHotel, locale: 'en-gb'},
  //     headers: {
  //       'x-rapidapi-host': 'booking-com.p.rapidapi.com',
  //       'x-rapidapi-key': 'a853eeda66msh7bbaee4eb0fcb86p15483bjsn777e2843d937'
  //     }
  //   };

  //   axios.request(options).then(function(response) {
  //     const info = {
  //       title: response.data.name,
  //       review: response.data.review_score,
  //       entrance_photo: response.data.entrance_photo_url
  //     }

  //     // Костыль
  //     if (response.data.description_translations) {
  //       if (response.data.description_translations[0]) {
  //         info.descriptionP1 = response.data.description_translations[0].description;
  //       }
  //       if (response.data.description_translations[1]) {
  //         info.descriptionP2 = response.data.description_translations[1].description;
  //       }
  //     }

  //     setData(info);
  //   }).catch(function (error) {
  //     console.error(error);
  //   });
  // }, []);

  return (
    <div className={styles.page}>
      <div className="page_content">

        <div className={styles.title}>{data.title}</div>

        <div className={styles.photos}>
          <img src={data.entrance_photo} alt="Нет картинки" />
        </div>

        {/* <div className="hotel_on_map">КАРТА</div> */}

        <div className={styles.review}>RATING {data.review}</div>

        <div className={styles.description}>
          <p>{data.descriptionP1}</p>
          <br/>
          <p>{data.descriptionP2}</p>
        </div>

        {/* <div className="facilities">ВОЗМОЖНОСТИ ОТЕЛЯ</div> */}

        {/* <div className="payment">ПЛАТЁЖНЫЕ ОСОБЕННОСТИ</div> */}

        {/* <div className="tips">СОВЕТЫ ДЛЯ ГОСТЕЙ</div> */}

      </div>
    </div>
  );
}

export default Hotel;