import styles from './Post.module.css';
import like from './like.svg';
import defaultAva from './user.png';

function Post(props) {
  return (
    <div className={styles.post}>
      <img className={styles.img} src={props.photo || defaultAva} alt="Avatar" />
      <h2>{props.message}</h2>
      <div className={styles.likewrapper}>
        <img src={like} className={styles.like} />
        <span>{props.likesCount}</span>
      </div>
    </div>
  );
}

export default Post;
