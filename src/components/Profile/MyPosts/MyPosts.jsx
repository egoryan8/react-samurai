import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts(props) {
  const postElements = props.postsData.map((post) => (<Post message={post.message} likesCount={post.likesCount}/>));

  const newPostElement = React.createRef();

  const addPost = (e) => {
    e.preventDefault();
    props.dispatch(addPostActionCreator());
  };

  const onPostChange = () => {
    const text = newPostElement.current.value;
    props.dispatch(updateNewPostTextActionCreator(text));
  };

  const onEnterPress = (e) => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      addPost(e);
    }
  };

  return (<div>
      My posts
      <form onSubmit={addPost} className={styles.form}>
        <textarea
          onChange={onPostChange}
          ref={newPostElement}
          value={props.newPostText}
          placeholder={'Введите текст поста'}
          onKeyDown={onEnterPress}/>
        <button>Add Post</button>
      </form>
      <div className={styles.posts}>{postElements}</div>
    </div>);
}

export default MyPosts;
