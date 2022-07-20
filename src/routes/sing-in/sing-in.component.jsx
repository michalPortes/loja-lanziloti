import { 
  singInWithGooglePopup, 
  createUserDocumentFromAuth 
} from '../../utils/firebase/firebase.utils'
import SingUpForm from '../../components/sing-up-form/sing-up-form.component'

const SingIn = () => {

  const logGoogleUser = async () => {
    const { user } = await singInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user)
  }
  return (
    <div>
      <h1>Sing In Page</h1>
      <button onClick={logGoogleUser}>
      Sing In with google Popup
      </button>
      <SingUpForm/>
    </div>
  )
}

export default SingIn