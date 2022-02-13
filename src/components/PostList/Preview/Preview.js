import styles from "./Preview.module.css";
import heart from "./heart.png";

function Preview(props) {
  return (
    <div className={styles.post}>
      <div className={styles.post_content}>
        <div className={styles.post_img}>
          <img src={props.post.picture} alt="НЕТ КАРТИНКИ" className={styles.picture} />
        </div>

        <div className={styles.post_info}>

          <div className={styles.location}>
            <p>{props.post.country}</p>
            <p>{props.post.city}</p>
          </div>
          
          <h2>
            <a href={props.post.id}>{props.post.title}</a>
          </h2>

          <div className={styles.price}>
            <p>{props.post.price}</p>
          </div>

          <div className={styles.review}>
            <p>{props.post.review_word}</p>
            <p>{props.post.review}</p>
          </div>

        </div>

        <div className={styles.btns}>
          <img src={heart} className={styles.heart} alt="НЕТ ИКОНКИ" />
        </div>
      </div>
    </div>
  );
}

export default Preview;
