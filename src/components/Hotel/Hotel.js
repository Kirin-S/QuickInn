import styles from './Hotel.module.css';
import LeftArrowBtn from '../UI/ArrowBtns/LeftArrowBtn'
import RightArrowBtn from '../UI/ArrowBtns/RightArrowBtn'

import { useState, useEffect } from 'react';

function Hotel(props) {
  const [data, setData] = useState({});             // Инфа про отель
  const [photos, setPhotos] = useState([]);         // Фотки отеля
  const [photoIndex, setPhotoIndex] = useState(0);  // Номер отображаемой фотки

  useEffect(() => {
    const axios = require("axios").default;

    const options = {
      method: 'GET',
      url: 'https://booking-com.p.rapidapi.com/v1/hotels/data',
      params: {hotel_id: props.idOfHotel, locale: 'en-gb'},
      headers: {
        'x-rapidapi-host': 'booking-com.p.rapidapi.com',
        'x-rapidapi-key': 'a853eeda66msh7bbaee4eb0fcb86p15483bjsn777e2843d937'
      }
    };

    axios.request(options).then(function(response) {
      const info = {
        title: response.data.name,
        review: response.data.review_score,
        descriptionP1: '',
        descriptionP2: ''
      }

      // Костыль. Не у всех отелей два описания.
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

  //   const phOptions = {
  //     method: 'GET',
  //     url: 'https://booking-com.p.rapidapi.com/v1/hotels/photos',
  //     params: {hotel_id: props.idOfHotel, locale: 'en-gb'},
  //     headers: {
  //       'x-rapidapi-host': 'booking-com.p.rapidapi.com',
  //       'x-rapidapi-key': 'a853eeda66msh7bbaee4eb0fcb86p15483bjsn777e2843d937'
  //     }
  //   };
    
  //   axios.request(phOptions).then(function (response) {
  //     let queryPhotos = [];

  //     response.data.map((photo) => {
  //       queryPhotos.push(photo.url_max);
  //     });
      
  //     setPhotos([...queryPhotos]);
  //   }).catch(function (error) {
  //     console.error(error);
  //   });
  }, []);

  return (
    <div className={styles.page}>
      <div>

        <div className={styles.title}>{data.title}</div>

        {/* <div className={styles.photos}>
          <img src={photos[0]} alt="Нет картинки" className={styles.currentPhoto} />
          <div className={styles.leftArrowBtn}>
            <LeftArrowBtn />
          </div>
          <div className={styles.RightArrowBtn}>
            <RightArrowBtn />
          </div>
        </div> */}

        <div className={styles.review}>RATING {data.review}</div>

        {
          data.descriptionP1
          ?
            <div className={styles.description}>
              <p>{data.descriptionP1}</p>
              <br/>
              <p>{data.descriptionP2}</p>
            </div>
          :
            <p style={{position: "absolute", top: "30%", left: "60%", fontSize: "24px"}}>К сожалению, описание данного отеля отсутствует.</p>
        }

        {/* <div className="hotel_on_map">КАРТА</div> */}

        {/* <div className="facilities">ВОЗМОЖНОСТИ ОТЕЛЯ</div> */}

        {/* <div className="payment">ПЛАТЁЖНЫЕ ОСОБЕННОСТИ</div> */}

        {/* <div className="tips">СОВЕТЫ ДЛЯ ГОСТЕЙ</div> */}

      </div>
    </div>
  );
}

export default Hotel;