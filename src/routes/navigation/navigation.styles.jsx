import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ReactComponent as LogoLanzi } from '../../assets/LOGOlanzi.svg'


export const NavigationConteiner = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 10px;
  padding-left: 5rem;
`
export const Logo = styled(LogoLanzi)`
  height: 100%;
  width: 120px;
`
export const NavLinks = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
`
export const NavLink = styled(Link)`
  cursor: pointer;
  padding: 10px 15px;
`