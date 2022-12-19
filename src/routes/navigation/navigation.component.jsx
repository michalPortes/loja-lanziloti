import { Fragment, useContext } from 'react'
import { Outlet, Link } from 'react-router-dom'

import CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'

import { UserContext } from '../../context/user.context'
import { CartContext } from '../../context/cart.context'

import { signOutUser } from '../../utils/firebase/firebase.utils'

import { NavigationConteiner, LogoContainer, Logo, NavLinks, NavLink } from './navigation.styles'


const Navigation = () => {

  const { currentUser } = useContext(UserContext)
  const { isCartOpen } = useContext(CartContext)


  return (
    <Fragment>
      <NavigationConteiner>
        <LogoContainer to='/'>
          <Logo />
        </LogoContainer>
        <NavLinks>
          <NavLink to='/shop'>
            SHOP
          </NavLink>
          {
            currentUser ? (
              <NavLink as='span' onClick={signOutUser}>
                SING OUT
              </NavLink>
            ) : (
              <NavLink to='/auth'>
                SING IN
              </NavLink>
            )
          }
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationConteiner>
      <Outlet />
    </Fragment>
  )
}

export default Navigation