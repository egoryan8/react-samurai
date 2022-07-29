import React from 'react';
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from '../../../redux/profile-reducer';
import StoreContext from '../../../storeContext';
import MyPosts from './MyPosts';

function MyPostsContainer() {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const addPost = () => {
          store.dispatch(addPostActionCreator());
        };

        const onPostChange = (text) => {
          const action = updateNewPostTextActionCreator(text);
          store.dispatch(action);
        };

        return (
          <MyPosts
            addPost={addPost}
            updateNewPostText={onPostChange}
            postsData={store.getState().profileReducer.postsData}
            newPostText={store.getState().profileReducer.newPostText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
}

export default MyPostsContainer;
