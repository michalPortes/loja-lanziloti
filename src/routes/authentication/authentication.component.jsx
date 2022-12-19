import SingUpForm from '../../components/sing-up-form/sing-up-form.component'
import SingInForm from '../../components/sing-in-form/sing-in-form.component'

import { AuthContainer } from './authentication.styles'

const Authentication = () => {
  return (
    <AuthContainer>
      <SingInForm />
      <SingUpForm />
    </AuthContainer>
  )
}

export default Authentication