import { useNavigate } from 'react-router-dom'

import './Header.styles.css'
import Logo from '/public/img/goscrum.png'

const Header = () => {
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem('logged')
    navigate('/login', { replace: true })
  }

  return (
    <header>
      <img src={Logo} alt="Go Scrum logo" />
      <div onClick={handleLogout}>x</div>
    </header>
  )
}

export default Header
