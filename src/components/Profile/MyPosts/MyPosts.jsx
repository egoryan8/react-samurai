import styles from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts(props) {
const postElements = props.postsData.map(post => <Post message={post.message} likesCount={post.likesCount} />)

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
