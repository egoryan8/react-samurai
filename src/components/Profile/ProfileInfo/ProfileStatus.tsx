import React, { useEffect, useState } from 'react';
import styles from './ProfileInfo.module.css';
import edit from './Edit.svg';

type ProfileStatusProps = {
  propStatus: string;
  isOwner: boolean;
  updateStatus: (status: string) => void;
};

const ProfileStatus: React.FC<ProfileStatusProps> = ({ propStatus, isOwner, updateStatus }) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(propStatus);

  useEffect(() => {
    setStatus(propStatus);
  }, [propStatus]);

  const onStatusChange = (evt: React.ChangeEvent<HTMLInputElement>) =>
    setStatus(evt.currentTarget.value);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    updateStatus(status);
  };

  return (
    <>
      {!editMode && (
        <div>
          <span className={styles.status}>{propStatus || 'Нет статуса'}</span>
          <span>
            {isOwner && (
              <img
                src={edit}
                alt="Edit button"
                className={styles.editButton}
                onClick={activateEditMode}
              />
            )}
          </span>
        </div>
      )}
      {editMode && (
          <input
            className={styles.statusInput}
            maxLength={30}
            onChange={onStatusChange}
            autoFocus={true}
            value={status}
            onBlur={deactivateEditMode}
          />
      )}
    </>
  );
};

export default ProfileStatus;
