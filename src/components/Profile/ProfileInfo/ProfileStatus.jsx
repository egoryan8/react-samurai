import React, { useEffect, useState } from 'react';
import styles from './ProfileInfo.module.css';
import edit from './Edit.svg';

function ProfileStatus(props) {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const onStatusChange = (evt) => setStatus(evt.currentTarget.value);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  return (
    <>
      {!editMode && (
        <div>
          <span className={styles.status}>{props.status || 'Установите статус'}</span>
          <span>
            <img
              src={edit}
              alt="Edit button"
              className={styles.editButton}
              onClick={activateEditMode}
            />
          </span>
        </div>
      )}
      {editMode && (
        <div>
          <input
            onChange={onStatusChange}
            autoFocus={true}
            value={status}
            onBlur={deactivateEditMode}
          />
        </div>
      )}
    </>
  );
}

export default ProfileStatus;
