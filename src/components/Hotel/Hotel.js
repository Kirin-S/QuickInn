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

  function onLeftArrowBtnClick() {
    photoIndex > 0 ? setPhotoIndex(photoIndex - 1) : setPhotoIndex(photos.length - 1);
  }

  function onRightArrowBtnClick() {
    photoIndex < photos.length ? setPhotoIndex(photoIndex + 1) : photoIndex = 0;
  }

  return (
    <div className={styles.page}>
      <div>

        <div className={styles.title}>{data.title}</div>

        {/* Фотки */}
        <div className={styles.photos}>
          <img src={photos[photoIndex]} alt="Нет картинки" className={styles.currentPhoto} />
          <div className={styles.leftArrowBtn}>
            <LeftArrowBtn onClick={onLeftArrowBtnClick}/>
          </div>
          <div className={styles.rightArrowBtn}>
            <RightArrowBtn onClick={onRightArrowBtnClick}/>
          </div>
        </div>

        <div className={styles.review}>RATING {data.review}</div>

        {/* Описание */}
        {
          data.descriptionP1
          ?
            <div className={styles.description}>
              <p>{data.descriptionP1}</p>
              <br/>
              <p>{data.descriptionP2}</p>
            </div>
          :
            <p style={{position: "absolute", top: "30%", left: "60%", fontSize: "24px", color: "#fff"}}>К сожалению, описание данного отеля отсутствует.</p>
        }

        {/* Календарь */}
        <div className={styles.date}>
          <input type="date" />
        </div>

        {/* <div className="hotel_on_map">КАРТА</div> */}

        {/* <div className="payment">ПЛАТЁЖНЫЕ ОСОБЕННОСТИ</div> */}

        {/* <div className="tips">СОВЕТЫ ДЛЯ ГОСТЕЙ</div> */}

      </div>
    </div>
  );
}

export default Hotel;