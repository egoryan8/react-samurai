import styles from './MyPosts.module.css';
import Post from './Post/Post';

const postsData = [
  {id: 1, message: 'Its my first post!', likesCount: 3},
  {id: 2, message: 'Hello, World', likesCount: 10},
  {id: 3, message: 'How are you?', likesCount: 8},
]

const postElements = postsData.map(post => <Post message={post.message} likesCount={post.likesCount} />)

function MyPosts() {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add Post</button>
      </div>
      <div className={styles.posts}>
        {postElements}
      </div>
    </div>
  );
}

export default MyPosts;
