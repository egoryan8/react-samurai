import React from 'react';
import { Form, Field } from 'react-final-form';
import styles from './Login.module.css';

function LoginForm() {
  const onSubmit = (formData) => {
    console.log(formData);
  };
  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form className={styles.form} onSubmit={handleSubmit}>
          <div>
            <Field name="login" placeholder={'Login'} component="input" />
          </div>
          <div>
            <Field name="password" type="password" placeholder={'Password'} component="input" />
          </div>
          <div className={styles.container}>
            <Field id="rememberMe" name="rememberMe" type="checkbox" component="input" />
            <label for="rememberMe">remember me</label>
          </div>
          <div>
            <button>Login</button>
          </div>
        </form>
      )}
    />
  );
}

function Login() {
  return (
    <div className={styles.wrapper}>
      <h1>LOGIN</h1>
      <LoginForm />
    </div>
  );
}

export default Login;
