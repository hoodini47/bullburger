import React from "react"
import "../styles/desktop-header.scss"
import { FaFacebook } from 'react-icons/fa';
import BbgMiniSvgLogo from "../images/bbg-mini-logo.inline.svg"
import TripAdvisorLogo from "../images/tripadvisor.inline.svg"


const DesktopHeader = (props) => {

  return (
  <>

  <header className={`desktop-header ${props.navScrolled ? "sticky-header-show" : ""}`}>

  <BbgMiniSvgLogo onClick={() => {
                            props.scrollTo('#welcome');
                            props.setNavState(false)
                            }
                          }/>

  <nav className={`desktop-main-nav`}>
    <ul id="nav-items-list">
        <li>
          <a onClick={() => {
                            props.scrollTo('#welcome');
                            props.setNavState(false)
                            }
                            }
                            className={`${props.langChosen ? "english" : "polish"}`}
                            >
                            {props.langChosen ? props.data.LangEN.home : props.data.LangPL.home}</a>
        </li>
        <li>
          <a onClick={() => {
                            props.scrollTo('#menu');
                            props.setNavState(false)
                            }
                            }
                            className={`${props.langChosen ? "english" : "polish"}`}
                            >
                            {props.langChosen ? props.data.LangEN.menu : props.data.LangPL.menu}</a>
        </li>
        <li>
          <a onClick={() => {
                            props.scrollTo('#location');
                            props.setNavState(false)
                            }
                            }
                            className={`${props.langChosen ? "english" : "polish"}`}
                            >
                            {props.langChosen ? props.data.LangEN.location : props.data.LangPL.location}</a>
        </li>
    </ul>
  </nav>

    <nav className={`desktop-side-nav`}>
      <ul id="nav-side-list">
        <li>
          <a onClick={() => props.setLang(false)} className={`${props.langChosen ? "" : "lang-clicked"}`} >PL</a>
        </li>
        <li>
          |
        </li>
        <li>
          <a onClick={() =>  props.setLang(true)} className={`${props.langChosen ? "lang-clicked" : ""}`} >EN</a>
        </li>
      </ul>

      <div id="social-media-icons">
          <a href="https://pl.tripadvisor.com/Restaurant_Review-g274772-d10057087-Reviews-BULL_Burger_GRILL-Krakow_Lesser_Poland_Province_Southern_Poland.html">
          <TripAdvisorLogo />
          </a>
          <a href="https://www.facebook.com/bullburgerkrakow/">
            <FaFacebook />
          </a>
      </div>
    </nav>


  </header>
  </>
  )
}


export default DesktopHeader
