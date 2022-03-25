import LeftArrowBtn from "../../UI/ArrowBtns/LeftArrowBtn";
import RightArrowBtn from "../../UI/ArrowBtns/RightArrowBtn";
import styles from "./HotelPhotos.module.css";

import { useState } from "react";

function HotelPhotos({photos}) {
  const [photoIndex, setPhotoIndex] = useState(0);  // Номер отображаемой фотки

  function onLeftArrowBtnClick() {
    photoIndex > 0 ? setPhotoIndex(photoIndex - 1) : setPhotoIndex(photos.length - 1);
  }

  function onRightArrowBtnClick() {
    photoIndex < photos.length ? setPhotoIndex(photoIndex + 1) : photoIndex = 0;
  }

  return ( 
    <div className={styles.photos}>
      <img src={photos[photoIndex]} alt="Нет картинки" className={styles.currentPhoto} />

      <div className={styles.leftArrowBtn}>
        <LeftArrowBtn onClick={onLeftArrowBtnClick}/>
      </div>
      <div className={styles.rightArrowBtn}>
        <RightArrowBtn onClick={onRightArrowBtnClick}/>
      </div>
    </div>
  );
}

export default HotelPhotos;