import React, { Component } from 'react'
import '../App.scss'
import ContactPage from './ContactPage.js'
import HomePage from './HomePage.js'
import AboutPage from './AboutPage.js'

class AccessiblePage extends Component {
  constructor(props){
      super(props);
      this.state = {
        openPage: 'About'

      }
      this.handleClick = this.handleClick.bind(this)

  }

  handleClick(e){
    e.preventDefault()
    console.log(e)
    this.setState({
      openPage: e.target.innerText
    })
  }

  render() {
    const handleClick = this.handleClick
    const openPage = this.state.openPage
    return (
      <div className="AccessiblePage" >
        <header className="header" >
          <h1 aria-label="DDL Accessibility">DDL Accessibility</h1>
            <nav className="menu-bar" id="mainMenu" aria-label="Main Menu">
              <ul className="nav-links">
                <li className="menu-button-holder" id="hometab">
                  <a href="" className="menu-button"  onClick={handleClick} aria-label="Home Page" title="Home Page">Home</a>
                </li>
                <li className="menu-button-holder" id="abouttab">
                  <a href="" className="menu-button"onClick={handleClick} aria-label="About Page" title="About Page">About</a>
                </li>
                <li className="menu-button-holder" id="contacttab">
                  <a href="" className="menu-button" onClick={handleClick} aria-label="Contact Page" title="Contact Page">Contact</a>
                </li>
              </ul>
            </nav>
        </header>

      <main className="main" role="main">
        {openPage === 'Home'
        ?
         <div className="page" role="group">
          <HomePage></HomePage>
         </div>
         : <></>}

        {openPage === 'About'
        ?
         <div className="page" role="group">
          <AboutPage></AboutPage>
         </div>
         : <></>}

        {openPage === 'Contact'
        ?
         <div className="page" role="group">
          <ContactPage></ContactPage>
         </div>
         : <></>}

      </main>
      </div>
  )
}

}

export default AccessiblePage
