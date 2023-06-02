function Header(props) {
return (
  <header>
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container d-flex justify-items-between">
        <a href="#" className="navbar-brand">{props.title}</a>
        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav">
          <div className="navbar-toggler-icon"></div>
        </button>
        <div className="collapse navbar-collapse flex-grow-0" id="nav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="#" className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Store</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">About</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Account</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
);
}

export default Header;