import React from 'react';
import { connect } from 'react-redux';
import { initializeApp } from './redux/app-reducer';
import { Routes, Route } from 'react-router-dom';
import { AppStateType } from './redux/redux-store';

import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import Login from './components/Login/Login';
import Preloader from './components/Preloader/Preloader';
import MessagesContainer from './components/Messages/MessagesContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import './App.css';

type PropsType = {
  initializeApp: () => void;
  initialized: boolean;
};
class App extends React.Component<PropsType> {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) return <Preloader />;

    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            {/*@ts-ignore*/}
            <Route path="/profile" element={<ProfileContainer />} />
            {/*@ts-ignore*/}
            <Route path="/profile/:userId" element={<ProfileContainer />} />
            {/*@ts-ignore*/}
            <Route path="/messages*" element={<MessagesContainer />} />
            <Route path="/users" element={<UsersContainer />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/login" element={<Login />} />
            {/*@ts-ignore*/}
            <Route path="/" element={<ProfileContainer />} />
          </Routes>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: AppStateType) => ({
  initialized: state.appReducer.initialized,
});

export default connect(mapStateToProps, { initializeApp })(App);
