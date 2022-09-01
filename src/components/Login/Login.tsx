import React from 'react';
import { Form, Field } from 'react-final-form';
import styles from './Login.module.css';
import { required } from '../../utils/validator';
import Element from '../../hoc/withValidation';
import {connect, useDispatch, useSelector} from 'react-redux';
import { login } from '../../redux/auth-reducer';
import { Navigate } from 'react-router-dom';
import { AppStateType } from '../../redux/redux-store';
const Input = Element('input');

const LoginForm: React.FC = () => {
  const dispatch = useDispatch();

  const onLogin = (email: string, password: string, rememberMe: boolean) => {
    // @ts-ignore
    dispatch(login(email, password, rememberMe));
  }
  const onSubmit = (formData: any) => {
    onLogin(formData.email, formData.password, formData.rememberMe);
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputWrapper}>
            <Field
              name="email"
              type="text"
              placeholder={'Email'}
              component={Input}
              validate={required}
            />
          </div>
          <div className={styles.inputWrapper}>
            <Field
              name="password"
              type="password"
              placeholder={'Password'}
              component={Input}
              validate={required}
            />
          </div>
          <div className={styles.checkboxWrapper}>
            <Field id="rememberMe" name="rememberMe" type="checkbox" component="input" />
            <label htmlFor="rememberMe" className={styles.label}>
              remember me
            </label>
            <button>Войти</button>
          </div>
        </form>
      )}
    />
  );
};

export const Login: React.FC = () => {
  const isAuth = useSelector((state: AppStateType) => state.authReducer.isAuth)
  if (isAuth) {
    return <Navigate to="/profile" />;
  }
  return (
    <div className={styles.wrapper}>
      <h1>Авторизоваться</h1>
      <LoginForm/>
    </div>
  );
};
