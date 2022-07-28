import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';
import MyPosts from "./MyPosts";

function MyPostsContainer(props) {
  const state = props.store.getState();

  const addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  const onPostChange = (text) => {
    const action = updateNewPostTextActionCreator(text)
    props.store.dispatch(action);
  };

  return <MyPosts
    addPost={addPost}
    updateNewPostText={onPostChange}
    postsData={state.profileReducer.postsData}
    newPostText={state.profileReducer.newPostText}/>
}

export default MyPostsContainer;
