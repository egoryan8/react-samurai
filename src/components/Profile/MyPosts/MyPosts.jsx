import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/state';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts(props) {
  const postElements = props.postsData.map((post) => (
    <Post message={post.message} likesCount={post.likesCount} />
  ));

  const newPostElement = React.createRef();

  const addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  const onPostChange = () => {
    const text = newPostElement.current.value;
    props.dispatch(updateNewPostTextActionCreator(text));
  };

  return (
    <div>
      My posts
      <div>
        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
        <button onClick={addPost}>Add Post</button>
      </div>
      <div className={styles.posts}>{postElements}</div>
    </div>
  );
}

export default MyPosts;
