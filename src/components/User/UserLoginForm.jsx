import React, { useState } from 'react'
import styles from '../../styles/UserLoginForm.module.css';
import btnSrc from '../../images/closeBtn.png';
import { useDispatch } from 'react-redux';
import { createUser } from '../../features/user/userSlice';

const UserLoginForm = ({closeForm}) => {
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = ({ target: {value, name} }) => {
    setValues({...values, [name]: value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const isEmpty = Object.values(values).some((value) => !value);

    if(isEmpty) return;

    dispatch(createUser(values));
    closeForm();
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.close} onClick={closeForm}>
        <img src={btnSrc} alt="close" />
      </div>
      <div className={styles.title}>
        Sign Up
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.group}>
          <input  
            type="email"
            name='email'
            value={values.email}
            placeholder='Your email'
            autoComplete='off'
            onChange={handleChange}
            required
          />
          <input  
            type="name"
            name='username'
            value={values.username}
            placeholder='Your name'
            autoComplete='off'
            onChange={handleChange}
            required
          />
          <input  
            type="password"
            name='password'
            value={values.password}
            placeholder='Your password'
            autoComplete='off'
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.link}>
          I already have an account
        </div>
        <button className={styles.submit} type='submit'>
          Create ACCOUNT
        </button>
      </form>
    </div>
  )
}

export default UserLoginForm