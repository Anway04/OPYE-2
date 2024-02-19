import Login from './Login'

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        LOGO
      </div>
      <div className="navlink navbar">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Packages</a></li>
          <li><a href="#">Book Online</a></li>
          <li><a href="#">Contact us</a></li>
        </ul>
      </div>
      <div className="loginbtn">
        <Login />
      </div>
    </nav>
  )
}

export default Nav
