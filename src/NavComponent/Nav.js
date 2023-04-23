import "./Nav.css";
import { Link } from 'react-router-dom';

function Nav() {
  return (<div>
      {/* Navbar Start */}
    <nav class="navbar navbar-expand-lg bg-white navbar-light shadow-sm py-3 py-lg-0 px-3 px-lg-0">
        <a class="navbar-brand ms-lg-5"><Link to="/">
            <h1 class="m-0 text-uppercase text-dark"><i class="bi bi-shop fs-1 text-primary me-3"></i>Tenders</h1></Link>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav ms-auto py-0">

              {/* 
         <a><Link to="/">Home</Link></a>
        <a><Link to="/about">About</Link></a>
        <a><Link to="/contact">Contant</Link></a>
        <a><Link to="/service">Service</Link></a>
        <a><Link to="/register">Register</Link></a>
        <a><Link to="/login">Login</Link></a> */}
              <a  class="nav-item nav-link active"><Link to="/">Home</Link></a>
                <a class="nav-item nav-link"><Link to="/about">About</Link></a>
                <a class="nav-item nav-link"><Link to="/contact">Contact</Link></a>
                <a  class="nav-item nav-link"><Link to="/service">Service</Link></a>
                <a class="nav-item nav-link"><Link to="/register">Register</Link></a>
                 
                {/* <div class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                    <div class="dropdown-menu m-0">
                        <a href="" class="dropdown-item">Pricing Plan</a>
                        <a href="" class="dropdown-item">The Team</a>
                        <a href="" class="dropdown-item">Testimonial</a>
                        <a href="" class="dropdown-item">Blog Grid</a>
                        <a href="" class="dropdown-item">Blog Detail</a>
                    </div>
                </div> */}
                <a class="nav-item nav-link nav-contact bg-primary text-white px-5 ms-lg-5"><Link style={{"color":"green"}} to="/login">Login</Link><i class="bi bi-arrow-right"></i></a>
            </div>
        </div>
    </nav>
    {/* Navbar End */}

        </div>
     );
}

export default Nav;
