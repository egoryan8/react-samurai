import { connect } from 'react-redux';
import { addPostActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

const mapStateToProps = (state) => {
  return {
    postsData: state.profileReducer.postsData,
    newPostText: state.profileReducer.newPostText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (post) => dispatch(addPostActionCreator(post)),
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
