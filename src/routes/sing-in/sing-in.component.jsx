import { singInWithGooglePopup } from '../../utils/firebase/firebase.utils'

const SingIn = () => {

  const logGoogleUser = async () => {
    const response = await singInWithGooglePopup()
  }
  return (
    <div>
      <h1>Sing In Page</h1>
      <button onClick={logGoogleUser}>
        Sing In
      </button>
    </div>
  )
}

export default SingIn