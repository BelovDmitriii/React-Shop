import React, { useState } from 'react'
import styles from '../../styles/UserSignUpForm.module.css';
import btnSrc from '../../images/closeBtn.png';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../features/user/userSlice';

const UserLoginForm = ({closeForm, toggleCurrentFormType}) => {
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const handleChange = ({ target: {value, name} }) => {
    setValues({...values, [name]: value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const isNotEmpty = Object.values(values).every((value) => value);

    if(!isNotEmpty) return;

    dispatch(loginUser(values));
    closeForm();
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.close} onClick={closeForm}>
        <img src={btnSrc} alt="close" />
      </div>
      <div className={styles.title}>
        LogIn
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
            type="password"
            name='password'
            value={values.password}
            placeholder='Your password'
            autoComplete='off'
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.link} onClick={() => toggleCurrentFormType('signup')}>
          Create ACCOUNT
        </div>
        <button className={styles.submit} type='submit'>
          Login
        </button>
      </form>
    </div>
  )
}

export default UserLoginForm