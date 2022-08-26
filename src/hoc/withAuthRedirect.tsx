import React from 'react';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import {AppStateType} from "../redux/redux-store";

const mapStateToPropsForRedirect = (state: AppStateType) => ({
  isAuth: state.authReducer.isAuth,
});

type mapPropsType = {
  isAuth: boolean,
}

export const withAuthRedirect = (Component: React.ComponentType<mapPropsType>) => {
  class RedirectComponent extends React.Component<mapPropsType> {
    render() {
      if (!this.props.isAuth) return <Navigate to="/login" />;

      return <Component {...this.props} />;
    }
  }
  return connect(mapStateToPropsForRedirect)(RedirectComponent);
};
