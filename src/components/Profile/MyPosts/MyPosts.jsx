import styles from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts() {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add Post</button>
      </div>
      <div className={styles.posts}>
        <Post message="Its my first post!" likesCount="3" />
        <Post message="Hello, world!" likesCount="10" />
        <Post message="How are you?" likesCount="8" />
      </div>
    </div>
  );
}

export default MyPosts;
