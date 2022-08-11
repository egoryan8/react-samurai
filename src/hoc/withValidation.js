import React from 'react';
import styles from './Validation.module.css';

const Element =
  (Element) =>
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
