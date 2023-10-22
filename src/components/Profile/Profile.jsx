import React, { useEffect, useState } from 'react';
import styles from '../../styles/Profile.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../features/user/userSlice';

const Profile = () => {
  const dispatch = useDispatch();
  const {currentUser} = useSelector(({user}) => user);

  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = ({ target: {value, name }}) => {
    setValues({...values, [name]: value})
  } 
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const isNotEmpty = Object.values(values).every((value) => value);

    if(!isNotEmpty) return;

    dispatch(updateUser(values));
  }

  useEffect(() => {
    if(!currentUser) return;

    setValues(currentUser);
  },[currentUser]);

  return (
    <div className={styles.profile}>
      {!currentUser ? <span>You need to log in</span> : (
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

        <button className={styles.submit} type='submit'>
          Update
        </button>
      </form>
      )}
    </div>
  )
}

export default Profile