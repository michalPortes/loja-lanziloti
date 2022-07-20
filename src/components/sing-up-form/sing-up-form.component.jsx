import { useState } from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'
import './form-imput.styles.scss'


const defaulFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const SingUpForm = () => {
  
  const [formFields, setFormFields] = useState(defaulFormFields)

  const {displayName, email, password, confirmPassword} = formFields;

  console.log(formFields)

  const resetFormFields = () => {
    setFormFields(defaulFormFields)
  }
  const handleSubmit = async (event) => {
    event.preventDefault()

    if(password != confirmPassword) {
      alert("Password do not match!");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email, 
        password
      );

      await createUserDocumentFromAuth(user, { displayName } );
      resetFormFields();
    } catch (error) {
      if(error.code === 'auth/email-already-in-use'){
        alert('Cannot create user, email already in use')
      }else{
        console.log('User creation encoutered an error', error);
      }
    }
  }


  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormFields({...formFields, [ name ]: value});
  }
  
  return(
    <div>
      <form onSubmit={ handleSubmit }>
        <label>Display Name</label>
        <input type='text' required onChange={ handleChange } name='displayName' value={ displayName }/>

        <label>Email</label>
        <input type='email' required onChange={ handleChange } name='email' value={ email }/>

        <label>Password</label>
        <input type='password' required onChange={ handleChange } name='password' value={ password }/>

        <label>Confirm Password</label>
        <input type='password' required onChange={ handleChange } name='confirmPassword' value={ confirmPassword }/>

        <button type='submit'>Sin Up</button>

      </form>
    </div>
  )
}


export default SingUpForm