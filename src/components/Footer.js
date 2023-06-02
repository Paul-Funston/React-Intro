function Footer() {
  const copyright = String.fromCodePoint(0x00A9);
  return(
    <footer className="bg-dark navbar-dark">
      <div className="container-fluid py-3 text-end" style={{height: "60px"}}>
        <span className="navbar-text fs-6">Paul Funston {copyright}2023 </span>
      </div>
    </footer>
  );
}

export default Footer;
