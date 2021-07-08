const Header = ({ title, isRed }) => {

  return (
    <header className={`${isRed ? 'bg-danger' : 'bg-primary'} d-flex justify-content-between`}>
      <h1>{title}</h1>
      <nav>
        Un menú
      </nav>
    </header>
  )
}

export default Header;