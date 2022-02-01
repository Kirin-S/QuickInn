import styles from "./Preview.module.css";
import heart from "./heart.png";

function Preview(props) {
  return (
    <div className={styles.post}>
      <div className={styles.post_content}>
        <img src={props.post.picture} alt="НЕТ КАРТИНКИ" className={styles.picture}/>

        <div className={styles.post_info}>

          <h3>
            <a href={props.post.url}>{props.post.title}</a>
          </h3>

          <p>{props.post.price}</p>

          <div className={styles.location}>
            <p>{props.post.country}</p>
            <p>{props.post.city}</p>
          </div>

          <div className={styles.review}>
            <p>{props.post.review}</p>
            <p>{props.post.review_word}</p>
          </div>
          
        </div>
        <div className="post_btns">
          <img src={heart} className={styles.heart} alt="НЕТ ИКОНКИ" />
        </div>
      </div>
    </div>
  );
}

export default Preview;
