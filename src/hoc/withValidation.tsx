import React from 'react';
import styles from './Validation.module.css';

const Element: (Element: any) => ({input, meta, ...props}: { input: any; meta: any; [p: string]: any }) =>
  JSX.Element = (Element: any) =>
  ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error;

  return (
      <>
        <Element
          {...input}
          {...props}
          className={
            styles.formControl +
            ' ' +
            (hasError ? styles.error : '') +
            ' ' +
            (Element === 'textarea' ? styles.form : '')
          }
        />
        {hasError && <span> {meta.error} </span>}
      </>
    );
  };

export default Element;
