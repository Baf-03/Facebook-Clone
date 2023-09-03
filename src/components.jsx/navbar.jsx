import "./navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass,faCheck,faHouse,faUserGroup,faTv,faStore,faGamepad,faPlus,faBell,faUser} from '@fortawesome/free-solid-svg-icons'

import facebook from '../assets/flogo.png'
import messenger from '../assets/messenger.png'

const Navbar = () => {
  return (
    <>
      <section className="navbar1 container-fluid">
        <div className="navelements my-auto col-2">
        <div className=" col-1"><img src={facebook} className="img"/></div>
          <div>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2 searchbar searchbar"
                type="search"
                placeholder="Search Facebook"
                aria-label="Search"
                placeholder-color="#ffffff"
              />
              <button className="btn btn-outline-success" type="submit">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </form>
          </div>
        </div>

        <div className="navelements ">
          <nav className="navbar navbar-expand-lg  ">
            <div className="container-fluid">
              <button
                className="navbar-toggler text-light"
                type="button "
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon "></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                {/* --------------------------nav elements--------------------------------- */}
                <ul className="navbar-nav mainnavelements">
                  <li className="nav-item ">
                    <a className="nav-link active text-primary" aria-current="page" href="#">
                    <FontAwesomeIcon icon={faHouse} />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-light" href="#">
                        <FontAwesomeIcon icon={faUserGroup} />
                    </a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link text-light" href="#">
                    <FontAwesomeIcon icon={faTv} />
                    </a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link text-light" href="#">
                        <FontAwesomeIcon icon={faStore} />
                    </a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link text-light" href="#">
                    <FontAwesomeIcon icon={faGamepad} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

        <div className="navelements my-auto">
          <div><FontAwesomeIcon icon={faPlus} /></div>
          <div><img src={messenger}/></div>
          <div><FontAwesomeIcon icon={faBell} /></div>
          <div><FontAwesomeIcon icon={faUser} /></div>
        </div>
      </section>
    </>
  );
};
export default Navbar;
