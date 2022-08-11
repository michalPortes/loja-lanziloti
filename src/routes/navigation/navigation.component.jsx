import { Fragment, useContext } from 'react'
import { Outlet, Link } from 'react-router-dom'

import { ReactComponent as LogoLanzi } from '../../assets/LOGOlanzi.svg'
import { UserContext } from '../../context/user.context'

import { signOutUser } from '../../utils/firebase/firebase.utils'

import './navigation.styles.scss'


const Navigation = () => {

  const { currentUser } = useContext(UserContext)
  

  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
        <LogoLanzi className='logo'/>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to='/shop'>
            SHOP
          </Link>
          {
            currentUser ? (
              <span className='nav-link' onClick={signOutUser}>
                SING OUT
                </span>
            ) : (
              <Link className="nav-link" to='/auth'>
                SING IN
              </Link>
            )
          }
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation