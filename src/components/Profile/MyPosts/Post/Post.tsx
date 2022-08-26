import styles from './Post.module.css';
import like from './like.svg';
import defaultAva from './user.png';
import React from "react";

type PostPropsType = { photo: string | null; message: string; likesCount: number };

const Post: React.FC<PostPropsType> = ({ photo, message, likesCount }) => {
  return (
    <div className={styles.post}>
      <img className={styles.img} src={photo || defaultAva} alt="Avatar" />
      <h2>{message}</h2>
      <div className={styles.likewrapper}>
        <img src={like} className={styles.like} alt="like icon" />
        <span>{likesCount}</span>
      </div>
    </div>
  );
};

export default Post;
