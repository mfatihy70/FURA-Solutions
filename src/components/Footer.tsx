const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4" style={{ marginTop: "5em" }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <p>&copy; 2024 FURA Solutions. All rights reserved.</p>
          </div>
          <div className="col-md-6">
            <nav>
              <ul className="list-inline text-center text-md-end mb-0">
                <li className="list-inline-item">
                  <a href="" className="text-light text-decoration-none">
                    About Us
                  </a>
                </li>
                <li className="list-inline-item ms-3">
                  <a href="" className="text-light text-decoration-none">
                    Services
                  </a>
                </li>
                <li className="list-inline-item ms-3">
                  <a href="" className="text-light text-decoration-none">
                    Contact
                  </a>
                </li>
                <li className="list-inline-item ms-3">
                  <a href="" className="text-light text-decoration-none">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
