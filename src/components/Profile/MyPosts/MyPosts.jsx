import styles from './MyPosts.module.css';
import Post from './Post/Post';

const postsData = [
  {id: 1, message: 'Its my first post!', likesCount: 3},
  {id: 2, message: 'Hello, World', likesCount: 10},
  {id: 3, message: 'How are you?', likesCount: 8},
]

function MyPosts() {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add Post</button>
      </div>
      <div className={styles.posts}>
        <Post message={postsData[0].message} likesCount={postsData[0].likesCount} />
        <Post message={postsData[1].message} likesCount={postsData[1].likesCount} />
        <Post message={postsData[2].message} likesCount={postsData[2].likesCount} />
      </div>
    </div>
  );
}

export default MyPosts;
