import { useNavigate } from 'react-router-dom'

import './Header.styles.css'
import Logo from '/goscrum.png'

const Header = () => {
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('userName')
    navigate('/login', { replace: true })
  }

  return (
    <header>
      <img src={Logo} alt="Go Scrum logo" />
      <div className="header_wrapper">
        <div>{localStorage.getItem('userName')}</div>
        <span className="header_logout" onClick={handleLogout}>
          x
        </span>
      </div>
    </header>
  )
}

export default Header
