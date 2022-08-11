import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';
import { Form, Field } from 'react-final-form';
import { myPostsValidator, required } from '../../../utils/validator';
import Element from '../../../hoc/withValidation';

const TextArea = Element('textarea');

function MyPosts(props) {
  const postElements = props.postsData.map((post) => (
    <Post message={post.message} likesCount={post.likesCount} key={post.id} />
  ));

  const addPost = (formData) => {
    props.addPost(formData.post);
  };

  // const onEnterPress = (e) => {
  //   if (e.keyCode === 13 && e.shiftKey === false) {
  //     addPost(e);
  //   }
  // };

  return (
    <>
      <div className={styles.container}>
        <AddPostForm addPost={addPost} />
        <div className={styles.posts}>{postElements}</div>
      </div>
    </>
  );
}

function AddPostForm({ addPost }) {
  const onSubmit = (formData) => {
    addPost(formData);
  };
  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className={styles.form}>
          <h3 className={styles.addPost}>ДОБАВИТЬ ПОСТ</h3>
          <Field
            name="post"
            component={TextArea}
            placeholder={'Введите текст поста'}
            validate={myPostsValidator}
          />
          <button className={styles.button}>Добавить пост</button>
        </form>
      )}
    />
  );
}

export default MyPosts;
