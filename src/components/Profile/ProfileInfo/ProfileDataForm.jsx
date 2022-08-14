import React from 'react';
import { Form, Field } from 'react-final-form';
import Element from '../../../hoc/withValidation';
import { required } from '../../../utils/validator';
import styles from './ProfileDataForm.module.css';

const Input = Element('input');

const ProfileDataForm = ({ onSubmit, ...props }) => {
  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.field}>
            <div className={styles.inputWrapper}>
              <h2>Изменить имя</h2>
              <Field
                className={styles.inputProfile}
                name="fullName"
                type="text"
                placeholder={'Введите имя'}
                component={Input}
                validate={required}
                initialValue={props.profile.fullName}
              />
            </div>
            <div className={styles.inputWrapper}>
              <h2>Изменить о себе</h2>
              <Field
                className={styles.textareaProfile}
                name="aboutMe"
                type="text"
                placeholder={'Введите информацию о себе'}
                component="textarea"
                // validate={required}
                initialValue={props.profile.aboutMe}
              />
            </div>
            <div className={styles.checkboxWrapper}>
              <label for="lookingForAJob" className={styles.label}>
                Ищу работу:
                <Field
                  id="lookingForAJob"
                  name="lookingForAJob"
                  type="checkbox"
                  component="input"
                  initialValue={props.profile.lookingForAJob}
                />
              </label>
            </div>
            <div className={styles.inputWrapper}>
              <Field
                className={styles.textareaProfile}
                name="lookingForAJobDescription"
                placeholder={'Введите навыки'}
                component="textarea"
                // validate={required}
                initialValue={props.profile.lookingForAJobDescription}
              />
            </div>
          </div>
          <div className={styles.field}>
            <div className={styles.inputWrapper}>
              <h2>Контакты: </h2>
              {Object.keys(props.profile.contacts).map((key) => {
                return (
                  <div>
                    <b>{key}:</b>
                    <Field
                      className={styles.input}
                      name={`contacts.${key}`}
                      placeholder={key}
                      component="input"
                      initialValue={props.profile.contacts[key]}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <button className={styles.editButton}></button>
          </div>
        </form>
      )}
    />
  );
};

export default ProfileDataForm;
