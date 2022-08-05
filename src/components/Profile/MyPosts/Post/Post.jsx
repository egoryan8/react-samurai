import styles from './Post.module.css';
import like from './like.svg';

function Post(props) {
  return (
    <div className={styles.post}>
      <img
        className={styles.img}
        src="https://cs4.pikabu.ru/post_img/big/2015/03/20/6/1426840578_1215893866.jpeg"
        alt=""
      />
      <div>{props.message}</div>
      <div className={styles.likewrapper}>
        <img src={like} className={styles.like} />
        {props.likesCount}{' '}
      </div>
    </div>
  );
}

export default Post;
