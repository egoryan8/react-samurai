import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts(props) {
  const postElements = props.postsData.map((post) => (
    <Post message={post.message} likesCount={post.likesCount} key={post.id} />
  ));

  const newPostElement = React.createRef();

  const addPost = (e) => {
    e.preventDefault();
    props.addPost();
  };

  const onPostChange = () => {
    const text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  const onEnterPress = (e) => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      addPost(e);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <form onSubmit={addPost} className={styles.form}>
          <h3 className={styles.addPost}>ДОБАВИТЬ ПОСТ</h3>

          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText}
            placeholder={'Введите текст поста'}
            onKeyDown={onEnterPress}
            className={styles.textarea}
          />
          <button className={styles.button}>✅</button>
        </form>
        <div className={styles.posts}>{postElements}</div>
      </div>
    </>
  );
}

export default MyPosts;
