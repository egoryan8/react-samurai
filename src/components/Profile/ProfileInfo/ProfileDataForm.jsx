import React from 'react';
import { Form, Field } from 'react-final-form';
import { required } from '../../../utils/validator';
import styles from './ProfileDataForm.module.css';

const ProfileDataForm = ({ onSubmit, ...props }) => {
  console.log(props.profile.aboutMe);
  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.field}>
            <div className={styles.inputWrapper}>
              <div>Изменить имя</div>
              <Field
                name="fullName"
                type="text"
                placeholder={'Введите имя'}
                component="input"
                validate={required}
                initialValue={props.profile.fullName}
              />
            </div>
            <div className={styles.inputWrapper}>
              <div>Изменить о себе</div>
              <Field
                name="aboutMe"
                type="text"
                placeholder={'Введите о себе'}
                component="textarea"
                validate={required}
                initialValue={props.profile.aboutMe}
              />
            </div>
            <div>Информация о работе</div>
            <div className={styles.checkboxWrapper}>
              <label for="lookingForAJob" className={styles.label}>
                Ищу работу:
              </label>
              <Field
                id="lookingForAJob"
                name="lookingForAJob"
                type="checkbox"
                component="input"
                initialValue={props.profile.lookingForAJob}
              />
            </div>
            <div className={styles.inputWrapper}>
              <Field
                name="lookingForAJobDescription"
                placeholder={'Введите навыки'}
                component="textarea"
                validate={required}
                initialValue={props.profile.lookingForAJobDescription}
              />
            </div>
          </div>
          <div>
            <b>Контакты: </b>{' '}
            {Object.keys(props.profile.contacts).map((key) => {
              return (
                <div>
                  <b>{key}:</b>
                  <Field
                    name={`contacts.${key}`}
                    placeholder={key}
                    component="input"
                    initialValue={props.profile.contacts[key]}
                  />
                </div>
              );
            })}
          </div>
          <div>
            <button className={styles.editButton}>Save</button>
          </div>
        </form>
      )}
    />
  );
};

export default ProfileDataForm;

// <form>
//   <div>
//     <div>
//       <b>Looking for a job:</b>
//       <span>{props.profile.lookingForAJob ? ' yes' : ' no'}</span>
//     </div>
//     {props.profile.lookingForAJob && (
//       <div>
//         <b>My Professional skills: </b> <span>{props.profile.lookingForAJobDescription}</span>
//       </div>
//     )}
//     <div>
//       <b>
//         Contacts:{' '}
//         {Object.keys(props.profile.contacts).map((key) => {
//           return (
//             <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]} />
//           );
//         })}
//       </b>
//     </div>
//   </div>
// </form>;
