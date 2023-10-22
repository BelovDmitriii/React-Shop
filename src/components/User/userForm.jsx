import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import UserSignUpForm from './UserSignUpForm';
import UserLoginForm from './UserLoginForm';
import styles from '../../styles/UserSignUpForm.module.css';
import { toggleForm, toggleFormType } from '../../features/user/userSlice';

const UserForm = () => {
  const dispatch = useDispatch();
  const {showForm, formType} = useSelector(({ user }) => user);
  const closeForm = () => dispatch(toggleForm(false));
  const toggleCurrentFormType = (type) => dispatch(toggleFormType(type));

  return (
    showForm ? (
      <>
        <div className={styles.overlay} onClick={closeForm}/>
        {formType === 'signup' 
          ? 
          <UserSignUpForm closeForm={closeForm} toggleCurrentFormType={toggleCurrentFormType}/>
          :
          <UserLoginForm closeForm={closeForm} toggleCurrentFormType={toggleCurrentFormType}/>}
      </>
    ) : <></>
  )
}

export default UserForm;
