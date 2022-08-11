import React from 'react';
import { Form, Field } from 'react-final-form';
import styles from './Login.module.css';
import { required } from '../../utils/validator';
import Element from '../../hoc/withValidation';
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer';
import { Navigate } from 'react-router-dom';

const Input = Element('input');

function LoginForm(props) {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
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
              className={styles.input}
            />
          </div>
          <div className={styles.inputWrapper}>
            <Field
              name="password"
              type="password"
              placeholder={'Password'}
              component={Input}
              validate={required}
              className={styles.input}
            />
          </div>
          <div className={styles.container}>
            <Field id="rememberMe" name="rememberMe" type="checkbox" component="input" />
            <label for="rememberMe" className={styles.label}>
              remember me
            </label>
          </div>
          <div>
            <button>Login</button>
          </div>
        </form>
      )}
    />
  );
}

function Login(props) {
  if (props.isAuth) {
    return <Navigate to="/profile" />;
  }
  return (
    <div className={styles.wrapper}>
      <h1>LOGIN</h1>
      <LoginForm {...props} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  isAuth: state.authReducer.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
