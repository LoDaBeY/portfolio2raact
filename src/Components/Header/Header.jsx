/* eslint-disable jsx-a11y/img-redundant-alt */
import "./Header.css";
import "./HeaderMobileView.css";
import LogoPhoto from "../../Assets/KG Logo.jpg";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import ThemeContext from "../../Pages/ThemeContext/ThemeContext";
import { FaHome } from "react-icons/fa";

function Header() {
  const { Theme, ChangeTheme } = useContext(ThemeContext);

  return (
    <div>
      <div className="nav">
        <div className="container">
          <div className="show-on-dekstop">
            <div className="Header-container">
              <div className="Logo-Menu">
                <div className="Logo-Photo-Name">
                  <NavLink to={"/"}>
                    <img
                      src={LogoPhoto}
                      alt="Logo Photo"
                      className="LogoPhoto"
                    />
                  </NavLink>
                  <h3>
                    <NavLink to={"/"}>
                      Khaled Ghonim for Translation Servies
                    </NavLink>
                  </h3>
                </div>

                <div
                  className="DarkLightMode"
                  onChange={(eo) => {
                    ChangeTheme(Theme === "Dark" ? "Light" : "Dark");
                  }}
                >
                  <div className="toggleWrapper">
                    <input type="checkbox" className="dn" id="dn" />
                    <label htmlFor="dn" className="toggle">
                      <span className="toggle__handler">
                        <span className="crater crater--1" />
                        <span className="crater crater--2" />
                        <span className="crater crater--3" />
                      </span>
                      <span className="star star--1" />
                      <span className="star star--2" />
                      <span className="star star--3" />
                      <span className="star star--4" />
                      <span className="star star--5" />
                      <span className="star star--6" />
                    </label>
                  </div>
                </div>

                <div className="Menu-list">
                  <ul>
                    <li>
                      <a href="/Translation">Translation</a>
                    </li>
                    <li>
                      <a href="/Transcription">Transcription</a>
                    </li>
                    <li>
                      <a href="/Subtitling">Subtitling</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="show-on-phone">
            <div className="Header-container">
              <div className="Logo-Menu-Phone">
                <div className="Logo-Name-Phone">
                  <NavLink to={"/"}>
                    <img
                      src={LogoPhoto}
                      alt="Logo Photo"
                      className="LogoPhoto"
                    />
                  </NavLink>
                  <h3>
                    <NavLink to={"/"}>
                      Khaled Ghonim for Translation Servies
                    </NavLink>
                  </h3>
                </div>

                <div className="Mode-Humgur-Menu">
                  <div className="DarkLightMode">
                    <div className="toggleWrapper">
                      <input type="checkbox" className="dn" id="dn" />
                      <label htmlFor="dn" className="toggle">
                        <span className="toggle__handler">
                          <span className="crater crater--1" />
                          <span className="crater crater--2" />
                          <span className="crater-Phone crater--3" />
                        </span>
                        <span className="star star--1" />
                        <span className="star star--2" />
                        <span className="star star--3" />
                        <span className="star star--4" />
                        <span className="star star--5" />
                        <span className="star star--6" />
                      </label>
                    </div>

                  </div>

                  <div className="Humgur-Menu-List">
                  <FaHome className="FaHome" style={{color: "#dbdde1", mr: 10 ,display: { sm: "block" } }}/>

                                      {/* <div className="Menu-list">
                      <ul>
                        <li>
                          <a href="/Translation">Translation</a>
                        </li>
                        <li>
                          <a href="/Transcription">Transcription</a>
                        </li>
                        <li>
                          <a href="/Subtitling">Subtitling</a>
                        </li>
                      </ul>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
