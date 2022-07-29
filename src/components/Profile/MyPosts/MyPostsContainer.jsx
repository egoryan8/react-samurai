import { connect } from 'react-redux';
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

const mapStateToProps = (state) => {
  return {
    postsData: state.profileReducer.postsData,
    newPostText: state.profileReducer.newPostText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => dispatch(addPostActionCreator()),
    onPostChange: (text) => dispatch(updateNewPostTextActionCreator(text)),
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
