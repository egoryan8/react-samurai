import styles from './Post.module.css';

function Post(props) {
  return (
    <div className={styles.post}>
      <img
        className={styles.img}
        src="https://cs4.pikabu.ru/post_img/big/2015/03/20/6/1426840578_1215893866.jpeg"
        alt=""
      />
      <div>{props.message}</div>
      <div>likes: {props.likesCount} </div>
    </div>
  );
}

export default Post;
