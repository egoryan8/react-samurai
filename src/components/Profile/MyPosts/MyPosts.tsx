import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';
import { Form, Field } from 'react-final-form';
import { required } from '../../../utils/validator';
import Element from '../../../hoc/withValidation';
import Preloader from '../../Preloader/Preloader';
import { PostType, ProfileType } from '../../../@types/types';

const TextArea = Element('textarea');

type MyPostPropsType = {
  profile: ProfileType;
  postsData: Array<PostType>;
  addPostProps: (post: string) => void;
};

const MyPosts: React.FC<MyPostPropsType> = ({ profile, postsData, addPostProps }) => {
  const postElements = profile ? (
    postsData.map((post) => (
      <Post
        message={post.message}
        likesCount={post.likesCount}
        key={post.id}
        photo={profile.photos ? profile.photos.small : ''}
      />
    ))
  ) : (
    <Preloader />
  );

  const addPost = (formData: { post: string }) => {
    addPostProps(formData.post);
  };

  return (
    <>
      <div className={styles.container}>
        <AddPostForm addPost={addPost} />
        <div className={styles.posts}>{postElements}</div>
      </div>
    </>
  );
};

type AddPostFormType = {
  addPost: (formData: { post: string }) => void;
};

const AddPostForm: React.FC<AddPostFormType> = ({ addPost }) => {
  const onSubmit = (formData: { post: string }) => {
    addPost(formData);
    formData.post = '';
  };
  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <div className={styles.formWrapper}>
          <form
            onSubmit={(event) => {
              handleSubmit(event);
            }}
            className={styles.form}>
            <h3 className={styles.addPost}>ДОБАВИТЬ ПОСТ</h3>
            <Field
              name="post"
              component={TextArea}
              placeholder={'Введите текст поста'}
              validate={required}
            />
            <button className={styles.button}>Добавить пост</button>
          </form>
        </div>
      )}
    />
  );
};

export default MyPosts;
