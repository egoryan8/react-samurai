import React from 'react';
import styles from '../Messages.module.css';
import { NavLink } from 'react-router-dom';

type DialogItemType = {
  id: number;
  name: string;
};

const DialogItem: React.FC<DialogItemType> = ({ id, name }) => {
  return (
    <NavLink to={'/messages/' + id} className={styles.dialog}>
      {name}
    </NavLink>
  );
};

export default DialogItem;
