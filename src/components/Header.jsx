import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/img/argentBankLogo.png";
import "../styles/components/Header.css";
import { NavLink } from "react-router-dom";
import userProfile from "../services/userProfile";
import { useState, useEffect } from "react";

function Header() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const result = await userProfile(token);
      setData(result);
    };
    getData();
  }, [token]);

  const logoutHandler = () => {
    setToken(localStorage.removeItem("token"));
  };

  if (!data) {
    return (
      <nav className="main-nav">
        <NavLink to="/">
          <img src={logo} alt="Logo ArgentBank" />
          <h1 className="sr-only">Argent Bank</h1>
        </NavLink>
        <NavLink to="/login" className="main-nav-item">
          <FontAwesomeIcon icon={faCircleUser} className="main-nav-item" />
          Sign In
        </NavLink>
      </nav>
    );
  } else {
    return (
      <nav className="main-nav">
        <NavLink to="/">
          <img src={logo} alt="Logo ArgentBank" />
          <h1 className="sr-only">Argent Bank</h1>
        </NavLink>

        {!token ? (
          <div>
            <NavLink to="/login" className="main-nav-item">
              <FontAwesomeIcon icon={faCircleUser} className="main-nav-item" />
              Sign In
            </NavLink>
          </div>
        ) : (
          ""
        )}

        {token ? (
          <div>
            <NavLink to="/profile" className="main-nav-item">
              <FontAwesomeIcon icon={faCircleUser} className="main-nav-item" />
              {data.body.firstName}
            </NavLink>
            <NavLink onClick={logoutHandler} to="/" className="main-nav-item">
              <FontAwesomeIcon
                icon={faRightFromBracket}
                className="main-nav-item"
              />
              Sign Out
            </NavLink>
          </div>
        ) : (
          ""
        )}
      </nav>
    );
  }
}

export default Header;
