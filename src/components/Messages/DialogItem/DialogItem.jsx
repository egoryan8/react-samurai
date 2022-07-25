import React from "react";
import styles from '../Messages.module.css';
import { NavLink } from 'react-router-dom';


function DialogItem(props) {
  return (
    <NavLink to={'/messages/' + props.id} className={styles.dialog}>
      {props.name}
    </NavLink>
  )
}

export default DialogItem;