/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import "./Header.css";
import "./HeaderMobileView.css";
import * as React from "react";
import LogoPhoto from "../../Assets/KG Logo.jpg";
import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import ThemeContext from "../../Pages/ThemeContext/ThemeContext";
import { FaHome } from "react-icons/fa";
import { AiOutlineClose, AiOutlineTranslation } from "react-icons/ai";
import { CgTranscript } from "react-icons/cg";
import { SiSubtitleedit } from "react-icons/si";

function Header() {
  const { Theme, ChangeTheme } = useContext(ThemeContext);
  const [DrawerOpener, setDrawerOpener] = useState(false);

  return (
    <div>
      <div className="nav">
        <div className="show-on-dekstop">
          <div className="Header-container">
            <div className="Logo-Menu">
              <div className="Logo-Photo-Name">
                <NavLink to={"/"}>
                  <img src={LogoPhoto} alt="Logo Photo" className="LogoPhoto" />
                </NavLink>
                <h3>
                  <NavLink to={"/"}>
                    Khaled Ghonim for Translation Servies
                  </NavLink>
                </h3>
              </div>

              <div className="DarkLightMode">
                <div
                  onChange={(eo) => {
                    ChangeTheme(Theme === "Dark" ? "Light" : "Dark");
                  }}
                  className="toggleWrapper"
                >
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
                  <img src={LogoPhoto} alt="Logo Photo" className="LogoPhoto" />
                </NavLink>
                <h3>
                  <NavLink to={"/"}>
                    Khaled Ghonim for Translation Servies
                  </NavLink>
                </h3>
              </div>

              <div className="Mode-Humgur-Menu">
                <div className="DarkLightMode">
                  <>
                    <input
                      onChange={(eo) => {
                        ChangeTheme(Theme === "Dark" ? "Light" : "Dark");
                      }}
                      type="checkbox"
                      id="toggle_checkbox"
                    />
                    <label htmlFor="toggle_checkbox">
                      <div id="star">
                        <div className="star" id="star-1">
                          ★
                        </div>
                        <div className="star" id="star-2">
                          ★
                        </div>
                      </div>
                      <div id="moon" />
                    </label>
                  </>
                </div>

                <div className="Humgur-Menu-List">
                  <FaHome
                    onClick={() => {
                      setDrawerOpener(true);
                    }}
                    className="FaHome"
                    style={{
                      color: "#dbdde1",
                      mr: 10,
                      // @ts-ignore
                      display: { sm: "block" },
                    }}
                  />
                  {DrawerOpener && (
                    <div className="drawer">
                      <div className="modal">
                        <ul>
                          <li>
                            <a
                              href=""
                              onClick={(eo) => {
                                eo.preventDefault();
                                setDrawerOpener(false);
                              }}
                            >
                              <AiOutlineClose />
                            </a>
                          </li>
                          <li>
                            <a href="/Translation">
                              <AiOutlineTranslation /> <span>Translation</span>
                            </a>
                          </li>
                          <li>
                            <a href="/Transcription">
                              <CgTranscript /> <span>Transcription</span>
                            </a>
                          </li>
                          <li>
                            <a href="Subtitling">
                              <SiSubtitleedit /> <span>Subtitle</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
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
