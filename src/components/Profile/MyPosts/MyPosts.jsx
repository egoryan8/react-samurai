import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';
import { Form, Field } from 'react-final-form';
import { myPostsValidator, required } from '../../../utils/validator';
import Element from '../../../hoc/withValidation';
import Preloader from '../../Preloader/Preloader';

const TextArea = Element('textarea');

function MyPosts(props) {
  const postElements = props.profile ? (
    props.postsData.map((post) => (
      <Post
        message={post.message}
        likesCount={post.likesCount}
        key={post.id}
        photo={props.profile.photos.small}
      />
    ))
  ) : (
    <Preloader />
  );

  const addPost = (formData) => {
    props.addPost(formData.post);
  };

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
    formData.post = '';
  };
  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, reset }) => (
        <div className={styles.formWrapper}>
          <form
            onSubmit={(event) => {
              handleSubmit(event).then(reset);
            }}
            className={styles.form}>
            <h3 className={styles.addPost}>ДОБАВИТЬ ПОСТ</h3>
            <Field
              name="post"
              component={TextArea}
              placeholder={'Введите текст поста'}
              validate={required}
            />
            <button className={styles.button} onClick={reset}>
              Добавить пост
            </button>
          </form>
        </div>
      )}
    />
  );
}

export default MyPosts;
