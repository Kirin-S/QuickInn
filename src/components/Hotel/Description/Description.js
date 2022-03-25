import styles from "./Description.module.css";

function Description({descriptionP1, descriptionP2}) {
  return ( 
    <div>
      {
        descriptionP1
        ?
          <div className={styles.description}>
            <p>{descriptionP1}</p>
            <br/>
            <p>{descriptionP2}</p>
          </div>
        :
          <p style={{position: "absolute", top: "30%", left: "60%", fontSize: "24px", color: "#fff"}}>К сожалению, описание данного отеля отсутствует.</p>
        }
    </div>
  );
}

export default Description;