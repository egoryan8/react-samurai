import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { PostType, ProfileType } from '../../../@types/types';
import { actions, ActionType } from '../../../redux/profile-reducer';
import { AppStateType } from '../../../redux/redux-store';
import MyPosts from './MyPosts';

type MapStateToPropsType = {
  postsData: Array<PostType>;
  newPostText: string;
};

type MapDispatchToPropsType = {
  addPost: (post: string) => void;
};

type OwnPropsType = {
  profile: ProfileType;
};

type PropsType = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType;
class MyPostsContainer extends React.Component<PropsType> {
  render() {
    return (
      <MyPosts
        profile={this.props.profile}
        postsData={this.props.postsData}
        addPostProps={this.props.addPost}
      />
    );
  }
}

const mapStateToProps = (state: AppStateType) => {
  return {
    postsData: state.profileReducer.postsData,
    newPostText: state.profileReducer.newPostText,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<ActionType>) => {
  return {
    addPost: (post: string) => dispatch(actions.addPostActionCreator(post)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyPostsContainer);
