import { Fragment } from 'react'
import { Outlet, Link } from 'react-router-dom'
import './navigation.styles.scss'
import { ReactComponent as LogoLanzi}from '../../assets/LOGOlanzi.svg'

const Navigation = () => {
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
          <Link className="nav-link" to='/singIn'>
            SING IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation