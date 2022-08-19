import React from 'react';
import { Form, Field } from 'react-final-form';
import { ProfileType } from '../../../@types/types';
import Element from '../../../hoc/withValidation';
import { required } from '../../../utils/validator';
import styles from './ProfileDataForm.module.css';

const Input = Element('input');

type ProfileDataFormType = {
  onSubmit: (formData: any) => void;
  profile: ProfileType;
};

const ProfileDataForm: React.FC<ProfileDataFormType> = ({ onSubmit, profile }) => {
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
                initialValue={profile.fullName}
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
                initialValue={profile.aboutMe}
              />
            </div>
            <div className={styles.checkboxWrapper}>
              <label htmlFor="lookingForAJob" className={styles.label}>
                Ищу работу:
                <Field
                  id="lookingForAJob"
                  name="lookingForAJob"
                  type="checkbox"
                  component="input"
                  initialValue={profile.lookingForAJob}
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
                initialValue={profile.lookingForAJobDescription}
              />
            </div>
          </div>
          <div className={styles.field}>
            <div className={styles.inputWrapper}>
              <h2>Контакты: </h2>
              <div>
                <b>github:</b>
                <Field
                  className={styles.input}
                  name="contacts.github"
                  placeholder="github"
                  component="input"
                  initialValue={profile.contacts ? profile.contacts.github : ''}
                />
              </div>
              <div>
                <b>vk:</b>
                <Field
                  className={styles.input}
                  name="contacts.vk"
                  placeholder="vk"
                  component="input"
                  initialValue={profile.contacts ? profile.contacts.vk : ''}
                />
              </div>
              <div>
                <b>instagram:</b>
                <Field
                  className={styles.input}
                  name="contacts.instagram"
                  placeholder="instagram"
                  component="input"
                  initialValue={profile.contacts ? profile.contacts.instagram : ''}
                />
              </div>
              <div>
                <b>website:</b>
                <Field
                  className={styles.input}
                  name="contacts.website"
                  placeholder="website"
                  component="input"
                  initialValue={profile.contacts ? profile.contacts.website : ''}
                />
              </div>
              <div>
                <b>mainLink:</b>
                <Field
                  className={styles.input}
                  name="contacts.mainLink"
                  placeholder="mainLink"
                  component="input"
                  initialValue={profile.contacts ? profile.contacts.mainLink : ''}
                />
              </div>
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
