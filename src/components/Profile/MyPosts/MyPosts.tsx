import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';
import { Form, Field } from 'react-final-form';
import { required } from '../../../utils/validator';
import Element from '../../../hoc/withValidation';
import Preloader from '../../Preloader/Preloader';
import { ProfileType } from '../../../@types/types';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {actions} from "../../../redux/profile-reducer";

const TextArea = Element('textarea');

type MyPostPropsType = {
  profile: ProfileType;
};

const MyPosts: React.FC<MyPostPropsType> = ({ profile }) => {
  const dispatch = useDispatch();
  const postsData = useSelector((state: AppStateType) => state.profileReducer.postsData);
  const addPostProps = (post: string) => dispatch(actions.addPostActionCreator(post));

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
