import React from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { initializeApp } from './redux/app-reducer';
import { Routes, Route } from 'react-router-dom';
import { AppStateType } from './redux/redux-store';

import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import {Login} from './components/Login/Login';
import Preloader from './components/Preloader/Preloader';
import MessagesContainer from './components/Messages/MessagesContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import './App.css';
import Header from "./components/Header/Header";

export const App: React.FC = () =>  {
  const dispatch = useDispatch();
  const initialized = useSelector((state: AppStateType) => state.appReducer.initialized)
  const initializeApplication = () => {
    // @ts-ignore
    dispatch(initializeApp());
  }
  React.useEffect(() => {
    initializeApplication();
  }, [])

    if (!initialized) return <Preloader />;

    return (
      <div className="app-wrapper">
        <Header />
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

