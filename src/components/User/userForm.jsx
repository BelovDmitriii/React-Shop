import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import UserLoginForm from './UserLoginForm';
import styles from '../../styles/UserLoginForm.module.css';
import { toggleForm } from '../../features/user/userSlice';

const UserForm = () => {
  const dispatch = useDispatch();
  const {showForm} = useSelector(({ user }) => user);
  const closeForm = () => dispatch(toggleForm(false));

  return (
    showForm ? (
      <>
        <div className={styles.overlay} onClick={closeForm}/>
        <UserLoginForm closeForm={closeForm}/>
      </>
    ) : <></>
  )
}

export default UserForm;
