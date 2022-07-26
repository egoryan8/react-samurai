import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts(props) {
  const postElements = props.postsData.map((post) => (
    <Post message={post.message} likesCount={post.likesCount} />
  ));

  const newPostElement = React.createRef();

  const addPost = () => {
    alert(newPostElement.current.value);
  };

  return (
    <div>
      My posts
      <div>
        <textarea ref={newPostElement}></textarea>
        <button onClick={addPost}>Add Post</button>
      </div>
      <div className={styles.posts}>{postElements}</div>
    </div>
  );
}

export default MyPosts;
